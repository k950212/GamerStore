<template>
  <div class="container">
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th>控制</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in titleProducts" :key="item.id">
            <td style="width: 200px">
              <div
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>
              <a href="#" class="text-dark" style="text-decoration: none">{{
                item.title
              }}</a>
            </td>
            <td>
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元
              </div>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="getProduct(item.id)"
              >
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addCart(item.id)"
                v-bind:disabled="this.status.loadingItem === item.id"
              >
                <div
                  v-if="this.status.loadingItem === item.id"
                  class="spinner-border spinner-border-sm text-danger"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
      cart: {},
      isLoading: false,
      category: "ALL", // 點擊後存放的分類
      select: {
        // 搜尋title
        title: "",
      },
      list: [
        "ALL",
        "鍵盤",
        "滑鼠",
        "耳機",
        "其他",
        "椅子",
        "手把",
        "螢幕",
        "主機",
      ],
      isActive: 0,
    };
  },
  // 篩選
  computed: {
    typeProducts() {
      if (this.category === "ALL") {
        return this.products;
      } else {
        return this.products.filter((item) => {
          return item.category === this.category;
        });
      }
    },
    titleProducts() {
      if (this.select.title) {
        return this.typeProducts.filter((item) => {
          return (
            item.title
              .toLowerCase()
              .indexOf(this.select.title.toLowerCase()) !== -1
          );
        });
      } else {
        return this.typeProducts;
      }
    },
  },
  methods: {
    changeClass(i) {
      console.log(i);
      this.isActive = i;
      document
        .getElementById("search")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    },
    gocategory(category) {
      console.log(category);
      this.category = category;
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
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.cart = res.data.data;
      });
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

        this.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    window.scrollTo(0, -1);
  },
};
</script>
