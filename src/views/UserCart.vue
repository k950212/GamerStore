<template>
  <Loading :active="isLoading"></Loading>
  <div class="cartimg d-flex align-items-center justify-content-center p-5">
    <p class="h1 fs-bold text-light">購物去</p>
  </div>
  <div class="container py-5" style="min-height: 700px">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            to="/"
            class="text-danger fw-bold"
            style="text-decoration: none"
            >首頁</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">購物車</li>
      </ol>
    </nav>

    <h3>購物車</h3>
    <hr />
    <div
      class="col-md-12 bg-light p-5 d-flex justify-content-center align-items-center"
      v-if="this.cart.total == 0"
      style="min-height: 400px"
    >
      <div class="text-center">
        <i class="bi bi-cart display-1 fw-bold"></i>
        <p class="h5 fw-bold p-2">購物車內無商品</p>
        <button
          class="btn p-2 btn-outline-danger"
          @click="gotoproducts"
          style="font-size: 15px"
        >
          繼續選購
        </button>
      </div>
    </div>
    <div class="row mt-4" v-else>
      <div class="col-md-8">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>品名</th>
              <th style="width: 110px" class="text-end">數量</th>
              <th class="text-end">單價</th>
              <th>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="removeCarts"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr
                v-for="item in cart.carts"
                :key="item.id"
                class="align-items-center"
              >
                <td>
                  <div class="d-flex align-items-center">
                    <div style="width: 200px">
                      <div
                        style="
                          height: 150px;
                          background-size: cover;
                          background-position: center;
                        "
                        :style="{
                          backgroundImage: `url(${item.product.imageUrl})`,
                        }"
                      ></div>
                    </div>

                    <div>
                      <p>
                        {{ item.product.title }}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="item.qty"
                      min="1"
                      @change="updateCart(item)"
                      :disabled="item.id === status.loadingItem"
                    />
                    <div class="input-group-text">
                      / {{ item.product.unit }}
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small
                    v-if="cart.final_total !== cart.total"
                    class="text-success"
                    >折扣價：</small
                  >
                  {{ $filters.currency(item.final_total) }}
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    :disabled="status.loadingItem === item.id"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-x"></i>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div class="col-md-4">
        <div class="border border-primary" style="padding: 20px">
          <div class="d-flex justify-content-between">
            <p>總計:</p>
            <p>{{ $filters.currency(cart.total) }}</p>
          </div>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
              :disabled="cart.final_total !== cart.total"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addCouponCode"
              >
                套用
              </button>
            </div>
          </div>
          <div v-if="cart.final_total !== cart.total">
            <p class="text-end text-success">已套用優惠券</p>
          </div>
          <div
            class="d-flex justify-content-between"
            v-if="cart.final_total !== cart.total"
          >
            <p colspan="3" class="text-end text-success">折扣價</p>
            <p class="text-end text-success">
              {{ $filters.currency(cart.final_total) }}
            </p>
          </div>
          <button type="button" class="btn btn-danger w-100" @click="gotoBill">
            去結帳
          </button>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <section class="pb-5">
        <div class="container">
          <div class="d-flex justify-content-between">
            <h4>猜你可能會喜歡</h4>
            <a
              href="#/user/userproducts"
              class="text-decoration-none fs-5 fw-bold"
              >更多商品</a
            >
          </div>
          <div class="row col-lg-12">
            <div
              class="col-md-6 col-lg-4 col-xl-3"
              style="height: 430px"
              v-for="item in products.slice(number, number + 4)"
              :key="item.id"
            >
              <div class="card flex h-100 w-100 productcard">
                <img
                  :src="item.imageUrl"
                  class="card-img-top img-fluid"
                  alt="#"
                  style="
                    min-height: 200px;
                    background-color: black;
                    display: block;
                    width: 100%;

                    object-fit: cover;
                  "
                />

                <div class="card-body">
                  <a
                    class="btn stretched-link"
                    @click="getProduct(item.id)"
                  ></a>
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title" style="max-height: 35px">
                      {{ item.title }}
                    </h5>
                  </div>
                  <hr />
                  <div class="text-end">
                    <del class="text-danger">NT:{{ item.origin_price }}</del>
                    <p class="text-success h3">NT:{{ item.price }}</p>
                  </div>
                  <div class="text-end">
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="addCart(item.id)"
                      v-bind:disabled="this.status.loadingItem === item.id"
                      style="z-index: 2; position: relative"
                    >
                      <div
                        v-if="this.status.loadingItem === item.id"
                        class="spinner-border spinner-border-sm text-danger"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>

                      <i class="bi bi-cart"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="info d-flex justify-content-center align-items-center"
                >
                  <p class="text-white fw-bold h4">詳細內容</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [], // 產品列表
      product: {}, // 個別產品
      status: {
        loadingItem: "", // 對應品項ID
      },
      cart: {}, // 購物車
      coupon_code: "", // 優惠碼
      isLoading: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      number: "",
    };
  },

  methods: {
    getrandomN() {
      const number = Math.floor(Math.random() * 25);
      this.number = number;
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        // console.log(res);
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        this.$httpMessageState(res, "新增至購物車");
        this.status.loadingItem = "";
        // console.log(res);
        this.getCart();
        this.isLoading = false;
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.cart = res.data.data;
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((res) => {
        console.log(res);
        this.status.loadingItem = "";
        this.getCart();
        this.isLoading = false;
      });
    },
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.$httpMessageState(res, "從購物車刪除");
        console.log(res);
        this.getCart();
        this.isLoading = false;
      });
    },
    removeCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.$httpMessageState(res, "購物車清空");
        console.log(res);
        this.getCart();
        this.isLoading = false;
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(api, { data: coupon }).then((res) => {
        this.$httpMessageState(res, "加入優惠券");
        this.getCart();
        this.isLoading = false;
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.isLoading = true;
      const order = this.form;
      this.$http.post(api, { data: order }).then((res) => {
        console.log(res);
        // -NTgEbYUmOtGaYY6GsZ3
        this.isLoading = false;
        this.$httpMessageState(res, "建立訂單");
        this.getCart();
        this.$router.push(`/user/checkout/${res.data.orderId}`);
      });
    },
    gotoBill() {
      console.log("去結帳");
      if (this.cart.total !== 0) {
        this.$router.push(`/user/cartbill`);
      } else {
        alert("請先將商品加入購物車");
      }
    },
    gotoproducts() {
      this.$router.push(`/user/userproducts`);
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    window.scrollTo(0, -1);
    this.getrandomN();
  },
};
</script>
