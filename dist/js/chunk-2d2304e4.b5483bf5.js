(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2304e4"],{ec5e:function(e,t,l){"use strict";l.r(t);var c=l("7a23");const s=Object(c["h"])("div",{class:"thankimg d-flex align-items-center justify-content-center p-5"},[Object(c["h"])("p",{class:"h1 fs-bold text-light"},"THANKS")],-1),a={class:"container py-5"},o={class:"row"},r=Object(c["h"])("div",{class:"col-md-12 d-flex justify-content-center"},[Object(c["h"])("p",{class:"h3 p-3"},"請填入表單，並再三確認資料正確與否。")],-1),d={class:"col-md-8 pb-5"},n={class:"row justify-content-center"},b={class:"mb-3"},i=Object(c["h"])("label",{for:"email",class:"form-label"},"Email",-1),u={class:"mb-3"},h=Object(c["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),m={class:"mb-3"},j=Object(c["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),O={class:"mb-3"},p=Object(c["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),f={class:"mb-3"},v=Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1),g=Object(c["h"])("div",{class:"text-end pb-3"},[Object(c["h"])("button",{class:"btn btn-white btn-outline-danger"},"送出訂單")],-1),k={class:"col-md-4"},x={class:"border col-md-10 p-3"},w={class:"table"},y=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",null,"商品名稱"),Object(c["h"])("th",null,"數量"),Object(c["h"])("th",null,"價格")])],-1),V={href:"#",class:"text-dark",style:{"text-decoration":"none"}},L={class:"p-3"},U={class:"d-flex justify-content-between"},q=Object(c["h"])("p",null,"總計:",-1),I=Object(c["h"])("p",{class:"text-success"},"已套用優惠券",-1),S={class:"d-flex justify-content-between text-success"},$=Object(c["h"])("p",null,"折扣價:",-1);function B(e,t,l,B,C,E){const _=Object(c["I"])("Field"),F=Object(c["I"])("ErrorMessage"),J=Object(c["I"])("Form");return Object(c["B"])(),Object(c["g"])(c["a"],null,[s,Object(c["h"])("div",a,[Object(c["h"])("div",o,[r,Object(c["h"])("div",d,[Object(c["h"])("div",n,[Object(c["k"])(J,{class:"border col-md-9",onSubmit:E.createOrder},{default:Object(c["U"])(({errors:e})=>[Object(c["h"])("div",b,[i,Object(c["k"])(_,{id:"email",name:"email",type:"email",class:Object(c["s"])(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:C.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>C.form.user.email=e)},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",u,[h,Object(c["k"])(_,{id:"name",name:"姓名",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:C.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=e=>C.form.user.name=e)},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",m,[j,Object(c["k"])(_,{id:"tel",name:"電話",type:"tel",class:Object(c["s"])(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:C.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=e=>C.form.user.tel=e)},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",O,[p,Object(c["k"])(_,{id:"address",name:"地址",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:C.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>C.form.user.address=e)},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",f,[v,Object(c["V"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=e=>C.form.message=e)},null,512),[[c["P"],C.form.message]])]),g]),_:1},8,["onSubmit"])])]),Object(c["h"])("div",k,[Object(c["h"])("div",x,[Object(c["h"])("table",w,[y,Object(c["h"])("tbody",null,[(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(C.cart.carts,e=>(Object(c["B"])(),Object(c["g"])("tr",{key:e.id},[Object(c["h"])("td",null,[Object(c["h"])("a",V,Object(c["L"])(e.product.title),1)]),Object(c["h"])("td",null,[Object(c["h"])("div",null,Object(c["L"])(e.qty)+"/"+Object(c["L"])(e.product.unit),1)]),Object(c["h"])("td",null,[Object(c["h"])("div",null,Object(c["L"])(e.total)+" 元",1)])]))),128))])]),Object(c["h"])("div",L,[Object(c["h"])("div",U,[q,Object(c["h"])("p",null,Object(c["L"])(C.cart.total),1)]),I,Object(c["h"])("div",S,[$,Object(c["h"])("p",null,Object(c["L"])(C.cart.final_total),1)])])])])])])],64)}l("14d9");var C={data(){return{products:[],product:{},status:{loadingItem:""},cart:{},coupon_code:"",isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){const e="https://vue3-course-api.hexschool.io/api/k950212-api/cart";this.$http.get(e).then(e=>{console.log(e),this.cart=e.data.data})},createOrder(){const e="https://vue3-course-api.hexschool.io/api/k950212-api/order";this.isLoading=!0;const t=this.form;this.$http.post(e,{data:t}).then(e=>{console.log(e),this.isLoading=!1,this.$httpMessageState(e,"建立訂單"),this.getCart(),this.$router.push("/user/checkout/"+e.data.orderId)})}},created(){this.getCart(),window.scrollTo(0,-1)}},E=l("6b0d"),_=l.n(E);const F=_()(C,[["render",B]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-2d2304e4.b5483bf5.js.map