<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :loop="true"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :modules="modules"
    class="mySwiper evaluate-swiper"
  >
    <swiper-slide
      class="evaluate-slide container"
      v-for="person in customer"
      :key="person.name"
      style="background-color: rgb(202, 202, 202)"
      ><div class="d-flex">
        <img
          :src="person.imgurl"
          alt=""
          class="bg-cover mr-3 img-fluid customer-img m-2"
        />
        <div class="m-3 align-items-center">
          <p class="h5">{{ person.name }}</p>
        </div>
      </div>
      <div
        style="width: 100%; height: 30px"
        class="d-flex justify-content-between align-items-center"
      >
        <p class="h5 pt-3">{{ person.date }}</p>
        <div>{{ person.star }} <i class="bi bi-star-fill fs-5"></i></div>
      </div>
      <hr />
      <div style="width: 100%; height: 120px">
        <p class="h4">{{ person.content }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

import "swiper/swiper-bundle.min.css";
import "../styles/evaluate.css";
import { EffectCoverflow } from "swiper";
import people1 from "../../public/1.png";
import people2 from "../../public/2.png";
import people3 from "../../public/3.png";
import people4 from "../../public/4.png";
import people5 from "../../public/5.png";
import people6 from "../../public/6.png";
import people7 from "../../public/7.png";
import people8 from "../../public/8.png";
import people9 from "../../public/9.png";
export default {
  data() {
    return {
      customer: [
        {
          name: "台北 張先生",
          imgurl: people1,
          content: "這家電商的訂單處理速度非常快，而且產品質量也非常好。",
          date: "2023/04/11",
          star: "4.8",
        },
        {
          name: "新北 劉先生",
          imgurl: people2,
          content: "我很喜歡這家電商的網站設計，很容易找到我想要的產品。",
          date: "2023/03/02",
          star: "4.3",
        },
        {
          name: "台北 楊小姐",
          imgurl: people3,
          content: "我在這家電商上購買的產品收到後非常滿意，和網站上描述一樣。",
          date: "2023/05/10",
          star: "4.9",
        },
        {
          name: "台中 張小姐",
          imgurl: people4,
          content: "這家電商的客服非常專業，回覆問題也非常快速，讓我很放心。",
          date: "2023/01/01",
          star: "4.6",
        },
        {
          name: "台北 謝小姐",
          imgurl: people5,
          content: "我非常喜歡這家電商的返利計劃，可以享受到很多折扣和優惠。",
          date: "2023/04/18",
          star: "5.0",
        },
        {
          name: "台南 李先生",
          imgurl: people6,
          content: "這家電商的包裝非常仔細，產品到達時沒有任何損壞。",
          date: "2023/02/19",
          star: "4.5",
        },
        {
          name: "新竹 陳先生",
          imgurl: people7,
          content: "我很滿意這家電商的物流速度，產品很快就送達了。",
          date: "2023/01/28",
          star: "4.3",
        },
        {
          name: "基隆 張先生",
          imgurl: people8,
          content: "這家電商的退換貨政策很方便，我需要更換尺寸的產品也很順利。",
          date: "2023/04/27",
          star: "4.0",
        },
        {
          name: "高雄 黃小姐",
          imgurl: people9,
          content: "我非常推薦這家電商的貨源，產品種類非常多，而且質量都很好。",
          date: "2023/02/02",
          star: "5.0",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow],
    };
  },
};
</script>
