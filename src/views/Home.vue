<template>
  <Navbar></Navbar>
  <div
    class="back-top btn bg-light"
    title="回頂部"
    @click="gotop"
    v-if="windowTop >= 200"
  ></div>
  <div
    class="topimg d-flex flex-column align-items-center justify-content-center p-5"
  >
    <p class="h1 fs-bold text-light">專屬配件 全新體驗</p>
    <a
      href="#/user/userproducts"
      class="btn btn-outline-light px-3 mt-3 d-flex align-items-center"
      ><p class="h4 animate__animated animate__bounceInLeft">去逛逛</p></a
    >
    <div class="centered">
      <div class="mouse-scroll"></div>
    </div>
  </div>
  <div class="home">
    <section class="container pb-5">
      <h2 class="text-center py-3">———— 優點 ————</h2>
      <div class="row row-cols-1 row-cols-lg-3">
        <div
          class="col"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <div class="text-center p-4">
            <i class="bi bi-currency-dollar fs-1"></i>
            <h4 class="fw-bold">CP值高</h4>
            <p>
              以優惠的價格讓您獲得高品質的產品，同時節省您的開支，讓您享受物超所值的購物體驗。
            </p>
          </div>
        </div>
        <div
          class="col"
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="1500"
        >
          <div class="text-center p-4">
            <i class="bi bi-rocket-takeoff fs-1"></i>
            <h4 class="fw-bold">出貨速度</h4>
            <p>
              以極快速的出貨速度，確保您能在最短的時間收到訂購的商品，讓您能夠立即享受購物的樂趣。
            </p>
          </div>
        </div>
        <div
          class="col"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <div class="text-center p-4">
            <i class="bi bi-hand-thumbs-up fs-1"></i>
            <h4 class="fw-bold">售後服務</h4>
            <p>
              完善的售後服務，包括快速回應疑問與需求，解決產品相關的問題，確保您在購買後享有無憂的使用體驗。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="position-relative loser py-3">
        <p class="position-absolute background-text fw-bold">LOSER</p>
        <p class="position-absolute background-text fw-bold py-5">LOSER</p>
        <p class="position-absolute background-text2 fw-bold py-5">LOSER</p>
        <p class="position-absolute background-text2 fw-bold">LOSER</p>
        <h2 class="mb-5 text-end">————還在為了遊戲體驗不佳而憤怒?</h2>
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-8">
            <img
              src="../../public/lose.png"
              class="w-100 position-relative"
              style="z-index: 1"
              data-aos="zoom-in-right"
              data-aos-delay="200"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-center"
            />
          </div>
        </div>
      </div>
      <div class="position-relative winer">
        <div>
          <h2 class="mb-5 text-start pt-5">勝利近在眼前————</h2>
          <p class="position-absolute background-text fw-bold">WINER</p>
          <p class="position-absolute background-text fw-bold py-5">WINER</p>
          <p class="position-absolute background-text2 fw-bold py-5">WINER</p>
          <p class="position-absolute background-text2 fw-bold">WINER</p>

          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-8">
              <img
                src="../../public/win.jpg"
                class="w-100 position-relative"
                style="z-index: 1"
                data-aos="zoom-in-left"
                data-aos-delay="200"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="categories">
      <div class="container">
        <h2 class="mb-5 text-center">————快來尋找你專屬配件————</h2>
        <ul class="row g-0" id="sort" style="list-style: none; padding: 0">
          <li class="col-md-6">
            <a class="d-block position-relative"
              ><div
                class="bg-image ratio ratio-16x9"
                style="background-image: url(keyboard.jpg)"
              ></div>
              <h3
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                鍵盤 <br />
                keyboard
              </h3></a
            >
          </li>
          <li class="col-md-6">
            <a class="d-block position-relative"
              ><div
                class="bg-image ratio ratio-16x9"
                style="background-image: url(mouse.jpg)"
              ></div>
              <h3
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                滑鼠 <br />
                mouse
              </h3></a
            >
          </li>
          <li class="col-md-6">
            <a class="d-block position-relative"
              ><div
                class="bg-image ratio ratio-16x9"
                style="background-image: url(headphones.jpg)"
              ></div>
              <h3
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                耳機 <br />
                headphones
              </h3></a
            >
          </li>
          <li class="col-md-6">
            <a class="d-block position-relative"
              ><div
                class="bg-image ratio ratio-16x9"
                style="background-image: url(gamepad.jpg)"
              ></div>
              <h3
                class="masonryCard-text text-hv-center position-absolute text-white fw-bold z-1"
              >
                其他 <br />
                others
              </h3></a
            >
          </li>
        </ul>
      </div>
    </section>
    <section class="container pb-5">
      <div class="d-flex justify-content-between">
        <h3>熱門商品</h3>
        <a href="#/user/userproducts" class="text-decoration-none fs-5 fw-bold"
          >更多商品</a
        >
      </div>
      <div style="height: 430px">
        <Hotproducts></Hotproducts>
      </div>
    </section>
    <section class="container py-3">
      <div
        class="coupon d-flex align-items-center justify-content-end overflow-hidden"
      >
        <div
          class="text-center p-lg-5"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-center"
        >
          <h2 class="fs-1 fw-bold">限時優惠</h2>
          <p class="fs-3">
            優惠碼
            <span class="text-light" id="couponnum">888888</span> 立即享8折優惠
          </p>
          <button
            class="btn btn-light"
            @click="
              coupon();
              alertcopied();
            "
          >
            領取
          </button>
        </div>
      </div>
    </section>
    <section class="container py-5">
      <div
        class="submail d-flex align-items-center justify-content-start p-5 row-cols-md-2"
      >
        <div
          class="col p-md-4 text-light"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-center"
        >
          <h2 class="fs-1 fw-bold">訂閱獲得更多資訊</h2>
          <p class="fs-3">取得超值優惠</p>
          <Form class="d-flex input-group mb-3">
            <input
              type="text"
              class="form-control lh-lg"
              v-model="email"
              placeholder="請輸入信箱"
            />
            <button
              class="btn btn-dark"
              type="reset"
              @click="
                alertsub();
                resetemail();
              "
              :disabled="email === ''"
            >
              訂閱
            </button>
          </Form>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="d-flex justify-content-center">
        <p class="h2 fw-bold">好評推薦</p>
      </div>
      <Evaluateswiper></Evaluateswiper>
    </section>
  </div>

  <Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Hotproducts from "../components/Hotproducts.vue";
import Evaluateswiper from "../components/EvaluateSwiper.vue";

export default {
  data() {
    return {
      isLoading: false,
      email: "",
      // Y軸
      windowTop: 0,
    };
  },
  computed: {},
  components: {
    Navbar,
    Footer,
    Hotproducts,
    Evaluateswiper,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    coupon() {
      var text = document.getElementById("couponnum").textContent;
      console.log("複製成功:", text);
      navigator.clipboard.writeText(text);
    },
    alertcopied() {
      alert("優惠碼已成功複製");
    },
    alertsub() {
      alert("已成功訂閱最新消息");
    },
    resetemail() {
      this.email = "";
    },
    gotop() {
      window.scrollTo(0, -1);
    },
  },
  created() {
    window.scrollTo(0, -1);
  },
};
</script>
