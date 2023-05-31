<template>
  <Navbar class="navbar-dark"></Navbar>
  <div
    class="back-top btn bg-light"
    title="回頂部"
    @click="gotop"
    v-if="windowTop >= 200"
  ></div>
  <div class="position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
  <Footer></Footer>
</template>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      windowTop: 0,
    };
  },
  components: {
    ToastMessages,
    Navbar,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    gotop() {
      window.scrollTo(0, -1);
    },
  },
};
</script>
