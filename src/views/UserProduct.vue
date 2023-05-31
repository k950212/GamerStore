<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-product">
    <div class="container p-5" style="min-height: 1500px">
      <nav aria-label="breadcrumb" class="pt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link
              to="/user/userproducts"
              class="text-danger fw-bold"
              style="text-decoration: none"
              >產品</router-link
            >
          </li>
          <li class="breadcrumb-item active fw-bold" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <div class="row justify-content-center h4">
        <article class="col-lg-8 py-2">
          <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
        </article>
        <div class="col-lg-4 p-5">
          <h2>{{ product.title }}</h2>
          <div class="h2" v-if="!product.price">
            {{ product.origin_price }} 元
          </div>
          <del class="h2" v-if="product.price"
            >原價 {{ product.origin_price }} 元</del
          >
          <div class="h2" v-if="product.price" style="color: red">
            現在只要 {{ product.price }} 元
          </div>
          <hr />
          <div>{{ product.content }}</div>
          <div>{{ product.description }}</div>
          <button
            type="button"
            class="btn btn-dark btn-outline-light h3 p-2"
            @click="addCart(product.id)"
            style="margin-top: 2rem"
            v-bind:disabled="this.status.loadingItem === product.id"
          >
            <div
              v-if="this.status.loadingItem === product.id"
              class="spinner-border spinner-border-sm text-light"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            加到購物車
          </button>
        </div>
      </div>
      <hr />
      <div class="information h4">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <button
              class="nav-link text-white fw-bold"
              @click="change('about')"
            >
              關於產品
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white fw-bold" @click="change('time')">
              出貨時間
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-white fw-bold"
              @click="change('before')"
            >
              購前須知
            </button>
          </li>
        </ul>
        <div class="py-3" v-if="this.moredata === 'about'">
          <ul>
            <li class="p-1">
              產品皆為全新品、公司貨(原廠或「總代理」授權品牌地區經營的代理商或經銷商)。
            </li>
            <li class="p-1">若下單後無庫存會另外再通知。</li>
            <li class="p-1">
              關於退換貨，請見<a href="#/user/questions">常見問題</a>。
            </li>
          </ul>
        </div>
        <div class="py-3" v-if="this.moredata === 'time'">
          <ul>
            <li class="p-1">
              當日中午前下訂，晚上8.前會寄出，預計隔兩日上午送達。
            </li>
            <li class="p-1">當日中午後下訂，隔日寄出，後兩日上午送達。</li>
          </ul>
        </div>
        <div class="py-3" v-if="this.moredata === 'before'">
          <ul>
            <li class="p-1">
              商品都有1年保固，除去人為惡意損毀，自然使用損壞皆能更換新品。
            </li>
            <li class="p-1">商品發票若無使用載具會隨商品寄送。</li>
          </ul>
        </div>
      </div>
      <div class="pb-2 h4">
        <hr />
        <p class="pt-2">
          我們所提供為全新產品，並提供以下保證：<br />
          - 保固期限：一年 <br />- 保固範圍：新品瑕疵 <br />-
          保固來源：原廠保固<br />
          顧客諮詢服務中心：本站客服中心<br />
          您所購買的商品，我們提供優於消保法7天，享有15天內無條件退貨的權利，請參考退貨詳細辦法。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      id: 1,
      status: {
        loadingItem: "", // 對應品項ID
      },
      moredata: "about",
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.product = res.data.product;
      });
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        this.$httpMessageState(res, "新增至購物車");
        this.status.loadingItem = "";
        console.log(res);
      });
    },
    change(i) {
      this.moredata = i;
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    window.scrollTo(0, -1);
  },
};
</script>
