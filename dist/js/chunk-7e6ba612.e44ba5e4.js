(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6ba612"],{"159d":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const l={class:"table mt-4"},s=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",null,"購買時間"),Object(c["h"])("th",null,"Email"),Object(c["h"])("th",null,"購買款項"),Object(c["h"])("th",null,"應付金額"),Object(c["h"])("th",null,"是否付款"),Object(c["h"])("th",null,"編輯")])],-1),d=["textContent"],r={class:"list-unstyled"},n={class:"text-right"},i={class:"form-check form-switch"},b=["id","onUpdate:modelValue","onChange"],o=["for"],O={key:0},h={key:1},j={class:"btn-group"},u=["onClick"],p=["onClick"];function g(e,t,a,g,m,k){const f=Object(c["I"])("Loading"),y=Object(c["I"])("OrderModal"),v=Object(c["I"])("DelModal"),L=Object(c["I"])("Pagination");return Object(c["B"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(f,{active:m.isLoading},null,8,["active"]),Object(c["h"])("table",l,[s,Object(c["h"])("tbody",null,[(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(m.orders,(t,a)=>(Object(c["B"])(),Object(c["g"])(c["a"],{key:a},[m.orders.length?(Object(c["B"])(),Object(c["g"])("tr",{key:0,class:Object(c["s"])({"text-secondary":!t.is_paid})},[Object(c["h"])("td",null,Object(c["L"])(e.$filters.date(t.create_at)),1),Object(c["h"])("td",null,[t.user?(Object(c["B"])(),Object(c["g"])("span",{key:0,textContent:Object(c["L"])(t.user.email)},null,8,d)):Object(c["f"])("",!0)]),Object(c["h"])("td",null,[Object(c["h"])("ul",r,[(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.products,(e,t)=>(Object(c["B"])(),Object(c["g"])("li",{key:t},Object(c["L"])(e.product.title)+" 數量："+Object(c["L"])(e.qty)+" "+Object(c["L"])(e.product.unit),1))),128))])]),Object(c["h"])("td",n,Object(c["L"])(t.total),1),Object(c["h"])("td",null,[Object(c["h"])("div",i,[Object(c["V"])(Object(c["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch"+t.id,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>k.updatePaid(t)},null,40,b),[[c["O"],t.is_paid]]),Object(c["h"])("label",{class:"form-check-label",for:"paidSwitch"+t.id},[t.is_paid?(Object(c["B"])(),Object(c["g"])("span",O,"已付款")):(Object(c["B"])(),Object(c["g"])("span",h,"未付款"))],8,o)])]),Object(c["h"])("td",null,[Object(c["h"])("div",j,[Object(c["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>k.openModal(!1,t)}," 檢視 ",8,u),Object(c["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>k.openDelOrderModal(t)}," 刪除 ",8,p)])])],2)):Object(c["f"])("",!0)],64))),128))])]),Object(c["k"])(y,{order:m.tempOrder,ref:"orderModal",onUpdatePaid:k.updatePaid},null,8,["order","onUpdatePaid"]),Object(c["k"])(v,{item:m.tempOrder,ref:"delModal",onDelItem:k.delOrder},null,8,["item","onDelItem"]),Object(c["k"])(L,{pages:m.pagination,onEmitPages:k.getOrders},null,8,["pages","onEmitPages"])],64)}var m=a("6ff1");const k={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},v=Object(c["h"])("div",{class:"modal-header bg-dark text-white"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["h"])("span",null,"訂單細節")]),Object(c["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},x={class:"row"},P={class:"col-md-4"},M=Object(c["h"])("h3",null,"用戶資料",-1),B={class:"table"},_={key:0},w=Object(c["h"])("th",{style:{width:"100px"}},"姓名",-1),C=Object(c["h"])("th",null,"Email",-1),$=Object(c["h"])("th",null,"電話",-1),D=Object(c["h"])("th",null,"地址",-1),I={class:"col-md-8"},E=Object(c["h"])("h3",null,"訂單細節",-1),G={class:"table"},U=Object(c["h"])("th",{style:{width:"100px"}},"訂單編號",-1),N=Object(c["h"])("th",null,"下單時間",-1),S=Object(c["h"])("th",null,"付款時間",-1),V={key:0},W={key:1},q=Object(c["h"])("th",null,"付款狀態",-1),J={key:0,class:"text-success"},z={key:1,class:"text-muted"},A=Object(c["h"])("th",null,"總金額",-1),F=Object(c["h"])("h3",null,"選購商品",-1),H={class:"table"},K=Object(c["h"])("thead",null,[Object(c["h"])("tr")],-1),Q={class:"text-end"},R={class:"modal-footer"},T=Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function X(e,t,a,l,s,d){return Object(c["B"])(),Object(c["g"])("div",k,[Object(c["h"])("div",f,[Object(c["h"])("div",y,[v,Object(c["h"])("div",L,[Object(c["h"])("div",x,[Object(c["h"])("div",P,[M,Object(c["h"])("table",B,[s.tempOrder.user?(Object(c["B"])(),Object(c["g"])("tbody",_,[Object(c["h"])("tr",null,[w,Object(c["h"])("td",null,Object(c["L"])(s.tempOrder.user.name),1)]),Object(c["h"])("tr",null,[C,Object(c["h"])("td",null,Object(c["L"])(s.tempOrder.user.email),1)]),Object(c["h"])("tr",null,[$,Object(c["h"])("td",null,Object(c["L"])(s.tempOrder.user.tel),1)]),Object(c["h"])("tr",null,[D,Object(c["h"])("td",null,Object(c["L"])(s.tempOrder.user.address),1)])])):Object(c["f"])("",!0)])]),Object(c["h"])("div",I,[E,Object(c["h"])("table",G,[Object(c["h"])("tbody",null,[Object(c["h"])("tr",null,[U,Object(c["h"])("td",null,Object(c["L"])(s.tempOrder.id),1)]),Object(c["h"])("tr",null,[N,Object(c["h"])("td",null,Object(c["L"])(e.$filters.date(s.tempOrder.create_at)),1)]),Object(c["h"])("tr",null,[S,Object(c["h"])("td",null,[s.tempOrder.paid_date?(Object(c["B"])(),Object(c["g"])("span",V,Object(c["L"])(e.$filters.date(s.tempOrder.paid_date)),1)):(Object(c["B"])(),Object(c["g"])("span",W,"時間不正確"))])]),Object(c["h"])("tr",null,[q,Object(c["h"])("td",null,[s.tempOrder.is_paid?(Object(c["B"])(),Object(c["g"])("strong",J,"已付款")):(Object(c["B"])(),Object(c["g"])("span",z,"尚未付款"))])]),Object(c["h"])("tr",null,[A,Object(c["h"])("td",null,Object(c["L"])(e.$filters.currency(s.tempOrder.total)),1)])])]),F,Object(c["h"])("table",H,[K,Object(c["h"])("tbody",null,[(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(s.tempOrder.products,t=>(Object(c["B"])(),Object(c["g"])("tr",{key:t.id},[Object(c["h"])("th",null,Object(c["L"])(t.product.title),1),Object(c["h"])("td",null,Object(c["L"])(t.qty)+" / "+Object(c["L"])(t.product.unit),1),Object(c["h"])("td",Q,Object(c["L"])(e.$filters.currency(t.final_total)),1)]))),128))])])])])]),Object(c["h"])("div",R,[T,Object(c["h"])("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("update-order",s.tempOrder))}," 確認 ")])])])],512)}var Y=a("e0ae"),Z={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[Y["a"]],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},ee=a("6b0d"),te=a.n(ee);const ae=te()(Z,[["render",X]]);var ce=ae,le=a("1799"),se={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:le["a"],DelModal:m["a"],OrderModal:ce},methods:{getOrders(e=1){this.currentPage=e;const t="https://vue3-course-api.hexschool.io/api/k950212-api/admin/orders?page="+e;this.isLoading=!0,this.$http.get(t,this.tempProduct).then(e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1,console.log(e)})},openModal(e,t){this.tempOrder={...t},this.isNew=!1;const a=this.$refs.orderModal;a.showModal()},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},updatePaid(e){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/k950212-api/admin/order/"+e.id,a={is_paid:e.is_paid};this.$http.put(t,{data:a}).then(e=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(e,"更新付款狀態")})},delOrder(){const e="https://vue3-course-api.hexschool.io/api/k950212-api/admin/order/"+this.tempOrder.id;this.isLoading=!0,this.$http.delete(e).then(e=>{console.log(e);const t=this.$refs.delModal;t.hideModal(),this.getOrders(this.currentPage)})}},created(){this.getOrders(),console.log("https://vue3-course-api.hexschool.io/")}};const de=te()(se,[["render",g]]);t["default"]=de},1799:function(e,t,a){"use strict";var c=a("7a23");const l={"aria-label":"Page navigation example"},s={class:"pagination justify-content-center"},d=Object(c["h"])("span",{"aria-hidden":"true"},"«",-1),r=[d],n=["onClick"],i=Object(c["h"])("span",{"aria-hidden":"true"},"»",-1),b=[i];function o(e,t,a,d,i,o){return Object(c["B"])(),Object(c["g"])("nav",l,[Object(c["h"])("ul",s,[Object(c["h"])("li",{class:Object(c["s"])(["page-item",{disabled:!1===a.pages.has_pre}])},[Object(c["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(c["W"])(e=>o.updatePage(a.pages.current_page+-1),["prevent"]))},r)],2),(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(a.pages.total_pages,e=>(Object(c["B"])(),Object(c["g"])("li",{class:Object(c["s"])(["page-item",{active:e===a.pages.current_page}]),key:e},[Object(c["h"])("a",{class:"page-link",href:"#",onClick:Object(c["W"])(t=>o.updatePage(e),["prevent"])},Object(c["L"])(e),9,n)],2))),128)),Object(c["h"])("li",{class:Object(c["s"])(["page-item",{disabled:!1===a.pages.has_next}])},[Object(c["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(c["W"])(e=>o.updatePage(a.pages.current_page+1),["prevent"]))},b)],2)])])}var O={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},h=a("6b0d"),j=a.n(h);const u=j()(O,[["render",o]]);t["a"]=u}}]);
//# sourceMappingURL=chunk-7e6ba612.e44ba5e4.js.map