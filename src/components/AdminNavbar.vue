<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
    <div class="container-fluid container">
      <a class="navbar-brand bi bi-controller fs-3" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav h4">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/dashboard/products" class="nav-link"
            >商品管理
          </router-link>
          <router-link to="/dashboard/productslist" class="nav-link"
            >商品清單
          </router-link>
          <router-link to="/dashboard/orders" class="nav-link"
            >訂單管理
          </router-link>
          <router-link to="/dashboard/coupons" class="nav-link"
            >優惠券管理</router-link
          >
          <router-link to="/login" class="nav-link">登入 </router-link>
          <a class="nav-link" href="#" @click.prevent="logout">登出 </a>
        </div>
        <ul class="nav fs-5 navbar-nav">
          <li class="nav-item position-relative">
            <!-- <a href="#/user/cart" class="nav-link"
              ><i class="bi bi-cart-plus fs-3"></i>
            </a> -->
            <a class="position-relative" href="#/user/cart">
              <i class="bi bi-cart fs-3"></i>
              <span
                class="cartQuantity text-white bg-danger"
                v-if="cart.carts"
                >{{ cart.carts.length }}</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
      });
    },
  },
  created() {
    this.getCart();
  },
  updated() {
    this.getCart();
  },
};
</script>
