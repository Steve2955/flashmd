(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a96bb0e"],{"09e8":function(t,e,n){"use strict";var s=n("b5dc"),r=n.n(s);r.a},"1b15":function(t,e,n){t.exports=n.p+"img/wrong.ed7f3b92.svg"},"37af":function(t,e,n){t.exports=n.p+"img/right.106ffc84.svg"},3821:function(t,e,n){},"3ce3":function(t,e,n){t.exports=n.p+"img/visibility_off.26cebf86.svg"},"3f16":function(t,e,n){"use strict";var s=n("3821"),r=n.n(s);r.a},"41ce":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container pt-3 mb-3"},[t.learnset&&t.learnset.cards&&t.learnset.cards.length>1?s("div",{staticClass:"card"},[s("div",{staticClass:"card-body bg-dark"},[s("h2",{staticClass:"h4"},[t._v(t._s(t.learnset.cards[t.currentCard].title))]),t.showBack?s("MarkdownRenderer",{attrs:{elements:t.learnset.cards[t.currentCard].back}}):t._e()],1)]):t._e(),t.learnset&&t.learnset.cards&&t.learnset.cards.length>1?s("CardControl",{attrs:{showBack:t.showBack},on:{"update:showBack":function(e){t.showBack=e},"update:show-back":function(e){t.showBack=e},nextCard:t.nextCard,prevCard:t.prevCard,knownCard:t.knownCard,unknownCard:t.unknownCard}}):s("div",{staticClass:"card"},[s("div",{staticClass:"card-body bg-dark"},[s("h4",{staticClass:"text-center my-5"},[t._v("Something went wrong!")]),s("img",{staticClass:"mx-auto d-block mt-5",attrs:{width:"100",height:"100",src:n("afa2"),alt:""}}),s("div",{staticClass:"d-flex justify-content-center my-5"},[s("router-link",{staticClass:"btn btn-outline-light",attrs:{tag:"button",to:"/",type:"button"}},[t._v("Return to home")])],1)])])],1)])},r=[],a=n("5530"),i=n("2f62"),c=n("90d2"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"body",staticClass:"md"})},d=[],u={name:"MarkdownRenderer",props:{elements:Array},methods:{renderMD:function(t){t=t||this.elements,this.$refs.body.innerHTML=this.$md.renderer.render(t,this.$md.options,{})}},mounted:function(){this.renderMD()},watch:{elements:function(t){this.renderMD(t)}}},h=u,l=(n("3f16"),n("2877")),f=Object(l["a"])(h,o,d,!1,null,"4b9cc1c3",null),m=f.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3 mx-5"},[t.showBack?s("div",{staticClass:"d-flex justify-content-between"},[s("img",{staticClass:"clickable",attrs:{src:n("1b15"),width:"48",height:"48"},on:{click:function(e){return t.$emit("unknownCard")}}}),s("img",{staticClass:"clickable",attrs:{src:n("3ce3"),width:"48",height:"48"},on:{click:function(e){return t.$emit("update:showBack",!1)}}}),s("img",{staticClass:"clickable",attrs:{src:n("37af"),width:"48",height:"48"},on:{click:function(e){return t.$emit("knownCard")}}})]):s("div",{staticClass:"d-flex justify-content-between"},[s("img",{staticClass:"clickable",attrs:{src:n("d73b"),width:"48",height:"48"},on:{click:function(e){return t.$emit("prevCard")}}}),s("img",{staticClass:"clickable",attrs:{src:n("fd86"),width:"48",height:"48"},on:{click:function(e){return t.$emit("update:showBack",!0)}}}),s("img",{staticClass:"clickable",attrs:{src:n("aa66"),width:"48",height:"48"},on:{click:function(e){return t.$emit("nextCard")}}})])])},C=[],w={name:"Footer",props:{showBack:Boolean}},b=w,p=Object(l["a"])(b,k,C,!1,null,null,null),v=p.exports,g={name:"Learn",components:{MarkdownRenderer:m,CardControl:v},data:function(){return{currentCard:0,showBack:!1}},computed:Object(a["a"])({},Object(i["b"])(["learnset"])),methods:{nextCard:function(){this.showBack=!1,this.currentCard=++this.currentCard%this.learnset.cards.length},prevCard:function(){this.showBack=!1,this.currentCard=this.currentCard<1?this.learnset.cards.length-1:--this.currentCard},knownCard:function(){this.$store.commit(c["b"],this.currentCard),this.nextCard()},unknownCard:function(){this.$store.commit(c["g"],this.currentCard),this.nextCard()}},mounted:function(){this._keyListener=function(t){switch(t.keyCode){case 32:t.preventDefault(),this.showBack=!this.showBack;break;case 39:t.preventDefault(),this.showBack?this.knownCard():this.nextCard();break;case 37:t.preventDefault(),this.showBack?this.unknownCard():this.prevCard();break}},document.addEventListener("keydown",this._keyListener.bind(this))},beforeDestroy:function(){document.removeEventListener("keydown",this._keyListener)},created:function(){this.$store.commit(c["f"],this.$route.params.id)},beforeRouteUpdate:function(t,e,n){this.$store.commit(c["f"],t.params.id),n()},beforeRouteLeave:function(t,e,n){this.$store.commit(c["d"]),n()}},x=g,y=(n("09e8"),Object(l["a"])(x,s,r,!1,null,"51b222ec",null));e["default"]=y.exports},aa66:function(t,e,n){t.exports=n.p+"img/arrow_forward.3ae29a33.svg"},afa2:function(t,e,n){t.exports=n.p+"img/sentiment_very_dissatisfied.c17a7bcc.svg"},b5dc:function(t,e,n){},d73b:function(t,e,n){t.exports=n.p+"img/arrow_back.a0417b38.svg"},fd86:function(t,e,n){t.exports=n.p+"img/visibility.37dac0fd.svg"}}]);
//# sourceMappingURL=chunk-1a96bb0e.3e45f590.js.map