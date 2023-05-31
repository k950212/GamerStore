<template>
  <Loading :active="isLoading"></Loading>
  <div class="productsimg d-flex align-items-center justify-content-center p-5">
    <p class="h1 fs-bold text-light">精選產品</p>
  </div>

  <section class="container-fluid px-0 mb-8 mb-md-10">
    <div class="row g-0">
      <div class="col-lg-6">
        <a
          class="d-block position-relative"
          @click="
            gocategory('鍵盤');
            changeClass(1);
          "
        >
          <div class="products1"></div>
          <h5
            class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
          >
            鍵盤
          </h5>
        </a>
        <div class="row g-0">
          <div class="col-6">
            <a
              class="d-block position-relative"
              @click="
                gocategory('滑鼠');
                changeClass(2);
              "
            >
              <div class="products2"></div>
              <h5
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                滑鼠
              </h5>
            </a>
          </div>
          <div class="col-6">
            <a
              class="d-block position-relative"
              @click="
                gocategory('耳機');
                changeClass(3);
              "
            >
              <div class="products3"></div>
              <h5
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                耳機
              </h5>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="row g-0">
          <div class="col-6">
            <a
              class="d-block position-relative"
              @click="
                gocategory('其他');
                changeClass(4);
              "
            >
              <div class="products4"></div>
              <h5
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                其他
              </h5>
            </a>
          </div>
          <div class="col-6">
            <a
              class="d-block position-relative"
              @click="
                gocategory('椅子');
                changeClass(5);
              "
            >
              <div class="products5"></div>
              <h5
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                椅子
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <div class="col-lg-3">
        <a
          class="d-block position-relative"
          @click="
            gocategory('手把');
            changeClass(6);
          "
        >
          <div class="products6"></div>
          <h5
            class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
          >
            手把
          </h5>
        </a>
      </div>
      <div class="col-lg-6">
        <a
          class="d-block position-relative"
          @click="
            gocategory('螢幕');
            changeClass(7);
          "
        >
          <div class="products7"></div>
          <h5
            class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
          >
            螢幕
          </h5>
        </a>
      </div>
      <div class="col-lg-3">
        <a
          class="d-block position-relative"
          @click="
            gocategory('主機');
            changeClass(8);
          "
        >
          <div class="products8"></div>
          <h5
            class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
          >
            主機
          </h5>
        </a>
      </div>
    </div>
  </section>
  <div class="bg-black">
    <div class="container pt-5" style="overflow: hidden">
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
          <li class="breadcrumb-item active text-light" aria-current="page">
            產品列表
          </li>
        </ol>
      </nav>
      <div class="productlist text-center"></div>
      <div class="row">
        <div class="d-flex justify-content-center align-item-center col-lg-12">
          <p class="BGtext fw-bold">GAME PRODUCTS</p>
        </div>
      </div>

      <p class="news_marquee h3 pt-3 text-white">
        限量優惠碼:[888888]:8折 [555555]:5折
      </p>
      <div class="row justify-content-around py-5">
        <div class="col-lg-3 mb-3">
          <div class="pb-3 d-flex justify-content-start">
            <p class="h4 text-white" id="search">搜尋:</p>
            <input type="text" v-model="this.select.title" />
          </div>

          <ul class="list-group sticky-position">
            <a
              class="list-group-item list-group-item-action"
              v-for="(item, index) of list"
              :key="index"
              :class="{ active: isActive === index }"
              @click="
                changeClass(index);
                gocategory(item);
              "
            >
              {{ item }}
            </a>
          </ul>
        </div>
        <div class="col-lg-9">
          <div v-if="titleProducts.length == 0">
            <div class="text-center p-5 text-white">
              <i class="bi bi-bag-x-fill display-1 fw-bold"></i>
              <p class="h1 fw-bold p-2">目前無商品上架</p>
            </div>
          </div>
          <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            <div class="col" v-for="item in titleProducts" :key="item.id">
              <div class="card h-100 border cardHover productcard">
                <img
                  :src="item.imageUrl"
                  class="card-img-top img-fluid"
                  alt="#"
                  style="
                    object-fit: cover;
                    height: 200px;
                    cursor: pointer;
                    background-color: black;
                  "
                />
                <div class="card-body">
                  <a
                    class="btn stretched-link"
                    @click="getProduct(item.id)"
                  ></a>
                  <div>
                    <h5 class="card-title">
                      {{ item.title }}
                    </h5>
                    <!-- <h5>{{ item.category }}</h5> -->
                  </div>

                  <hr />
                  <!-- <p class="card-text">{{ item.description }}</p> -->
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
      </div>
    </div>
    <div class="bg-img">
      <div
        class="bg-dark bg-opacity-50 h-100 d-flex flex-column justify-content-center"
      >
        <p class="h3 text-white text-center">享受最佳遊戲體驗</p>
        <p class="h3 text-white text-center">立即下單</p>
      </div>
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
