<template>
  <nav
    class="navbar navbar-expand-lg fixed-top p-3"
    id="navbar-top"
    v-bind:class="{
      'navbar-dark ': colorchange,
      'bg-dark': colorchange,
      myshadow: colorchange,
    }"
  >
    <div class="container">
      <a class="navbar-brand bi bi-controller fs-2" href="#"></a>
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
        <div class="navbar-nav h3 fw-bold">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/user/userproducts" class="nav-link"
            >產品</router-link
          >
          <router-link to="/user/about" class="nav-link">關於我們</router-link>
          <router-link to="/user/questions" class="nav-link"
            >常見問題</router-link
          >
          <router-link to="/user/cart" class="nav-link">購物車</router-link>
        </div>
        <ul class="nav fs-5 navbar-nav">
          <li class="nav-item position-relative">
            <a class="position-relative" href="#/user/cart">
              <i class="bi bi-cart fs-2"></i>
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
      windowTop: "",
      colorchange: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
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
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      if (this.windowTop >= 700) {
        this.colorchange = true;
      } else {
        this.colorchange = false;
      }
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
