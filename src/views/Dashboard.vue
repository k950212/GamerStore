<template>
  <AdminNavbar></AdminNavbar>
  <div class="container mt-3 p-5 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import AdminNavbar from "../components/AdminNavbar.vue";
import emitter from "../methods/emitter";
import ToastMessages from "../components/ToastMessages.vue";

export default {
  components: {
    AdminNavbar,
    ToastMessages,
  },
  provide() {
    // 讓內層元件都可使用外層功能
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      console.log(res);
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
