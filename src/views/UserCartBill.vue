<template>
  <div class="thankimg d-flex align-items-center justify-content-center p-5">
    <p class="h1 fs-bold text-light">THANKS</p>
  </div>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <p class="h3 p-3">請填入表單，並再三確認資料正確與否。</p>
      </div>

      <div class="col-md-8 pb-5">
        <div class="row justify-content-center">
          <Form
            class="border col-md-9"
            v-slot="{ errors }"
            @submit="createOrder"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end pb-3">
              <button class="btn btn-white btn-outline-danger">送出訂單</button>
            </div>
          </Form>
        </div>
      </div>
      <div class="col-md-4">
        <div class="border col-md-10 p-3">
          <table class="table">
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>數量</th>
                <th>價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <a href="#" class="text-dark" style="text-decoration: none">{{
                    item.product.title
                  }}</a>
                </td>
                <td>
                  <div>{{ item.qty }}/{{ item.product.unit }}</div>
                </td>
                <td>
                  <div>{{ item.total }} 元</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="p-3">
            <div class="d-flex justify-content-between">
              <p>總計:</p>
              <p>{{ cart.total }}</p>
            </div>
            <p class="text-success">已套用優惠券</p>
            <div class="d-flex justify-content-between text-success">
              <p>折扣價:</p>
              <p>{{ cart.final_total }}</p>
            </div>
          </div>
        </div>
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
      cart: {}, // 購物車
      coupon_code: "", // 優惠碼
      isLoading: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.cart = res.data.data;
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.isLoading = true;
      const order = this.form;
      this.$http.post(api, { data: order }).then((res) => {
        console.log(res);
        // -NTgEbYUmOtGaYY6GsZ3
        this.isLoading = false;
        this.$httpMessageState(res, "建立訂單");
        this.getCart();
        this.$router.push(`/user/checkout/${res.data.orderId}`);
      });
    },
  },
  created() {
    this.getCart();
    window.scrollTo(0, -1);
  },
};
</script>
