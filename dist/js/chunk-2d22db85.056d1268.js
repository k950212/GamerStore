(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22db85"],{f962:function(t,e,c){"use strict";c.r(e);var s=c("7a23");const i={class:"bg-product"},a={class:"container p-5",style:{"min-height":"1500px"}},l={"aria-label":"breadcrumb",class:"pt-5"},b={class:"breadcrumb"},o={class:"breadcrumb-item"},r={class:"breadcrumb-item active fw-bold","aria-current":"page"},d={class:"row justify-content-center h4"},n={class:"col-lg-8 py-2"},h=["src"],j={class:"col-lg-4 p-5"},O={key:0,class:"h2"},u={key:1,class:"h2"},p={key:2,class:"h2",style:{color:"red"}},g=Object(s["h"])("hr",null,null,-1),m=["disabled"],v={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},f=Object(s["h"])("span",{class:"visually-hidden"},"Loading...",-1),k=[f],y=Object(s["h"])("hr",null,null,-1),w={class:"information h4"},L={class:"nav nav-tabs"},x={class:"nav-item"},B={class:"nav-item"},I={class:"nav-item"},C={key:0,class:"py-3"},$=Object(s["h"])("ul",null,[Object(s["h"])("li",{class:"p-1"}," 產品皆為全新品、公司貨(原廠或「總代理」授權品牌地區經營的代理商或經銷商)。 "),Object(s["h"])("li",{class:"p-1"},"若下單後無庫存會另外再通知。"),Object(s["h"])("li",{class:"p-1"},[Object(s["j"])(" 關於退換貨，請見"),Object(s["h"])("a",{href:"#/user/questions"},"常見問題"),Object(s["j"])("。 ")])],-1),_=[$],q={key:1,class:"py-3"},J=Object(s["h"])("ul",null,[Object(s["h"])("li",{class:"p-1"}," 當日中午前下訂，晚上8.前會寄出，預計隔兩日上午送達。 "),Object(s["h"])("li",{class:"p-1"},"當日中午後下訂，隔日寄出，後兩日上午送達。")],-1),P=[J],U={key:2,class:"py-3"},M=Object(s["h"])("ul",null,[Object(s["h"])("li",{class:"p-1"}," 商品都有1年保固，除去人為惡意損毀，自然使用損壞皆能更換新品。 "),Object(s["h"])("li",{class:"p-1"},"商品發票若無使用載具會隨商品寄送。")],-1),S=[M],T=Object(s["h"])("div",{class:"pb-2 h4"},[Object(s["h"])("hr"),Object(s["h"])("p",{class:"pt-2"},[Object(s["j"])(" 我們所提供為全新產品，並提供以下保證："),Object(s["h"])("br"),Object(s["j"])(" - 保固期限：一年 "),Object(s["h"])("br"),Object(s["j"])("- 保固範圍：新品瑕疵 "),Object(s["h"])("br"),Object(s["j"])("- 保固來源：原廠保固"),Object(s["h"])("br"),Object(s["j"])(" 顧客諮詢服務中心：本站客服中心"),Object(s["h"])("br"),Object(s["j"])(" 您所購買的商品，我們提供優於消保法7天，享有15天內無條件退貨的權利，請參考退貨詳細辦法。 ")])],-1);function z(t,e,c,f,$,J){const M=Object(s["I"])("Loading"),z=Object(s["I"])("router-link");return Object(s["B"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(M,{active:t.isLoading},null,8,["active"]),Object(s["h"])("div",i,[Object(s["h"])("div",a,[Object(s["h"])("nav",l,[Object(s["h"])("ol",b,[Object(s["h"])("li",o,[Object(s["k"])(z,{to:"/user/userproducts",class:"text-danger fw-bold",style:{"text-decoration":"none"}},{default:Object(s["U"])(()=>[Object(s["j"])("產品")]),_:1})]),Object(s["h"])("li",r,Object(s["L"])($.product.title),1)])]),Object(s["h"])("div",d,[Object(s["h"])("article",n,[Object(s["h"])("img",{src:$.product.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,h)]),Object(s["h"])("div",j,[Object(s["h"])("h2",null,Object(s["L"])($.product.title),1),$.product.price?Object(s["f"])("",!0):(Object(s["B"])(),Object(s["g"])("div",O,Object(s["L"])($.product.origin_price)+" 元 ",1)),$.product.price?(Object(s["B"])(),Object(s["g"])("del",u,"原價 "+Object(s["L"])($.product.origin_price)+" 元",1)):Object(s["f"])("",!0),$.product.price?(Object(s["B"])(),Object(s["g"])("div",p," 現在只要 "+Object(s["L"])($.product.price)+" 元 ",1)):Object(s["f"])("",!0),g,Object(s["h"])("div",null,Object(s["L"])($.product.content),1),Object(s["h"])("div",null,Object(s["L"])($.product.description),1),Object(s["h"])("button",{type:"button",class:"btn btn-dark btn-outline-light h3 p-2",onClick:e[0]||(e[0]=t=>J.addCart($.product.id)),style:{"margin-top":"2rem"},disabled:this.status.loadingItem===$.product.id},[this.status.loadingItem===$.product.id?(Object(s["B"])(),Object(s["g"])("div",v,k)):Object(s["f"])("",!0),Object(s["j"])(" 加到購物車 ")],8,m)])]),y,Object(s["h"])("div",w,[Object(s["h"])("ul",L,[Object(s["h"])("li",x,[Object(s["h"])("button",{class:"nav-link text-white fw-bold",onClick:e[1]||(e[1]=t=>J.change("about"))}," 關於產品 ")]),Object(s["h"])("li",B,[Object(s["h"])("button",{class:"nav-link text-white fw-bold",onClick:e[2]||(e[2]=t=>J.change("time"))}," 出貨時間 ")]),Object(s["h"])("li",I,[Object(s["h"])("button",{class:"nav-link text-white fw-bold",onClick:e[3]||(e[3]=t=>J.change("before"))}," 購前須知 ")])]),"about"===this.moredata?(Object(s["B"])(),Object(s["g"])("div",C,_)):Object(s["f"])("",!0),"time"===this.moredata?(Object(s["B"])(),Object(s["g"])("div",q,P)):Object(s["f"])("",!0),"before"===this.moredata?(Object(s["B"])(),Object(s["g"])("div",U,S)):Object(s["f"])("",!0)]),T])])],64)}var A={data(){return{product:{},id:1,status:{loadingItem:""},moredata:"about"}},methods:{getProduct(){const t="https://vue3-course-api.hexschool.io/api/k950212-api/product/"+this.id;this.isLoading=!0,this.$http.get(t).then(t=>{this.isLoading=!1,console.log(t),this.product=t.data.product})},addCart(t){const e="https://vue3-course-api.hexschool.io/api/k950212-api/cart";this.status.loadingItem=t;const c={product_id:t,qty:1};this.$http.post(e,{data:c}).then(t=>{this.$httpMessageState(t,"新增至購物車"),this.status.loadingItem="",console.log(t)})},change(t){this.moredata=t}},created(){this.id=this.$route.params.productId,this.getProduct(),window.scrollTo(0,-1)}},D=c("6b0d"),E=c.n(D);const F=E()(A,[["render",z]]);e["default"]=F}}]);
//# sourceMappingURL=chunk-2d22db85.056d1268.js.map