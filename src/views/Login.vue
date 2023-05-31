<template>
  <div class="min-vh-100" style="background-color: rgb(0, 0, 0)">
    <div class="container" style="height: 100vh">
      <div class="row justify-content-center align-items-center h-100">
        <form
          class="row justify-content-center bg-light col-md-6"
          @submit.prevent="signIn"
          style="border-radius: 0.5rem"
        >
          <div class="p-5">
            <h1 class="h3 mb-3 font-weight-normal">請先登入 進行管理員操作</h1>
            <div class="mb-2">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
              />
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                v-model="user.password"
              />
            </div>

            <div class="text-end mt-4">
              <a href="#/" class="btn btn-lg btn-outline-danger">取消</a>
              <button class="btn btn-lg btn-outline-primary" type="submit">
                登入
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push("/dashboard/products");
        }
      });
    },
  },
};
</script>
