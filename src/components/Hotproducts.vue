<template>
  <Loading :active="isLoading"></Loading>
  <swiper
    :loop="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
    :speed="1500"
    :modules="modules"
    :breakpoints="{
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
    class="mySwiper"
    style="width: 100%; height: 100%"
  >
    <swiper-slide
      v-for="item in products.slice(0, 8)"
      :key="item.id"
      style="
        justify-content: flex-start;
        align-items: start;
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
      "
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
          <a class="btn stretched-link" @click="getProduct(item.id)"></a>
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
        <div class="info d-flex justify-content-center align-items-center">
          <p class="text-white fw-bold h4">詳細內容</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import "swiper/swiper-bundle.min.css";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

// import required modules
import { Autoplay } from "swiper";

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
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  methods: {
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
      console.log(123);
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

        this.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
