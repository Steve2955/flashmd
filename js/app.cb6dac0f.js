(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-27ad44da":"9af8ee09"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-27ad44da":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-27ad44da":"10cf97c1"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/flashmd/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"54ab":function(e,t,n){e.exports=n.p+"img/ic_base.fd349e24.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar fixed-top navbar-dark bg-dark"},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:n("54ab"),width:"30",height:"30",alt:"",loading:"lazy"}}),r("router-link",{staticClass:"navbar-brand mb-0 h1 ml-2 mr-auto clickable",attrs:{tag:"span",to:"/"}},[e._v("FlashMD")])],1)},i=[],l={name:"Header"},c=l,u=n("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null),p=d.exports,f={name:"App",components:{Header:p}},h=f,m=(n("5c0b"),Object(u["a"])(h,o,a,!1,null,null,null)),v=m.exports,b=n("9483");Object(b["a"])("".concat("/flashmd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g,w=n("2f62"),k=(n("4de4"),n("7db0"),n("b0c0"),n("d3b7"),n("ade3")),y=n("5530"),O=n("2909"),C=(n("96cf"),n("1da1")),_="loadLearnsetFromFile",x="loadLearnsetFromUrl",j="tokenizeMarkdown",L="parseLearnset",$="setLearnset",E=n("36d5"),M=n.n(E),A=(n("c740"),{getCardTitle:function(e){return e.front[1].content},getLearnsetTitle:function(e){var t=1+e.findIndex((function(e){return"heading_open"===e.type}));return e[t].content},getCardLevel:function(e){return parseInt(e.front[0].tag[1])-1}}),P=n("ec26"),T={learnset:{}},F={learnset:function(e){return e.learnset}},N=(g={},Object(k["a"])(g,_,(function(){return new Promise(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M()({accept:".md,.markdown"});case 2:r=e.sent,r[0]||n(new Error("No file selected")),o=new FileReader,o.onload=function(){return t(o.result)},o.onerror=function(){return n(new Error("No file selected"))},o.readAsText(r[0]);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),Object(k["a"])(g,x,(function(e){return fetch(e).then((function(e){if(200==e.status)return e.text();new Error("Failed to load file with statuscode ".concat(e.status))}))})),Object(k["a"])(g,j,(function(e,t){return r["a"].$md.parse(t,{})})),Object(k["a"])(g,L,(function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s,i,l,c,u,d,p,f,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,o=e.dispatch,n.t0=t.tokens,n.t0){n.next=6;break}return n.next=5,o(j,t.md||t);case 5:n.t0=n.sent;case 6:for(a=n.t0,s=[],i={front:[],back:[]},l=!0,c=0;c<a.length;c++)("heading_open"===a[c].type&&!l||c==a.length-1)&&(l=!0,u=Object(O["a"])(s).reverse().find((function(e){return e.front[0].tag[1]<i.front[0].tag[1]})),u&&(i.category=A.getCardTitle(u)),i.title=A.getCardTitle(i),s.push(Object(y["a"])(Object(y["a"])({},i),{},{id:Object(P["a"])()})),i={front:[],back:[]}),i[l?"front":"back"].push(a[c]),"heading_close"===a[c].type&&l&&(l=!1);return s=s.filter((function(e){return e.back.length})),s=s.filter((function(e){return t.levels[A.getCardLevel(e)]})),d=t.url||void 0,p=t.name||void 0,f=Object(P["a"])(),h={cards:s,url:d,name:p,id:f},r($,h),n.abrupt("return",h);case 19:case"end":return n.stop()}}),n)})))()})),g),S=Object(k["a"])({},$,(function(e,t){e.learnset=t})),R={state:T,getters:F,actions:N,mutations:S};r["a"].use(w["a"]);var D=new w["a"].Store({modules:{learnset:R}}),H=(n("a89b"),n("4989"),n("8c4f")),B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container pt-5"},[r("h1",{staticClass:"text-center h3"},[e._v("Welcome to FlashMD")]),r("p",{staticClass:"text-center h6 mt-3"},[e._v("A simple tool to make digital flashcards from your exisiting markdown notes")]),r("img",{staticClass:"mx-auto d-block mt-5",attrs:{width:"150",height:"150",src:n("54ab")}}),r("div",{staticClass:"mt-5"},[r("p",{staticClass:"text-center"},[e._v("Just open a markdown file and start learning")]),r("div",{staticClass:"d-flex justify-content-center"},[r("button",{staticClass:"btn btn-outline-light mr-2",attrs:{type:"button"},on:{click:e.openFile}},[e._v("Open File")]),r("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:e.openURL}},[e._v("Open URL")])])]),r("LearnsetOptionsModal",{attrs:{options:e.options,active:e.showLearnsetOptionsModal},on:{"update:options":function(t){e.options=t},"update:active":function(t){e.showLearnsetOptionsModal=t},saved:e.parseMarkdown}})],1)},U=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal",attrs:{id:"learnsetOptionsModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("form",{staticClass:"container"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"font-weight-bold"},[e._v("Give this learnset a name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loptions.name,expression:"loptions.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example input placeholder"},domProps:{value:e.loptions.name},on:{input:function(t){t.target.composing||e.$set(e.loptions,"name",t.target.value)}}})]),n("label",{staticClass:"font-weight-bold"},[e._v("Enable/Disable certain heading levels")]),e._l(e.loptions.levels,(function(t,r){return n("div",{key:r,staticClass:"form-group form-check mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.loptions.levels[r],expression:"loptions.levels[index]"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.loptions.levels[r])?e._i(e.loptions.levels[r],null)>-1:e.loptions.levels[r]},on:{change:function(t){var n=e.loptions.levels[r],o=t.target,a=!!o.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);o.checked?i<0&&e.$set(e.loptions.levels,r,n.concat([s])):i>-1&&e.$set(e.loptions.levels,r,n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.loptions.levels,r,a)}}}),n("label",{staticClass:"form-check-label"},[e._v("Heading "+e._s(r+1))])])}))],2)]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.$emit("update:active",!1)}}},[e._v("Cancel")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.$emit("update:options",e.loptions),e.$emit("update:active",!1),e.$emit("saved")}}},[e._v("Save")])])])])])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[e._v("Options")])])}],J=n("1157"),z=n.n(J),G={name:"learnsetOptionsModal",data:function(){return{loptions:{}}},props:{active:Boolean,options:Object},watch:{active:function(e){e&&(this.loptions=this.options),z()("#learnsetOptionsModal").modal(e?"show":"hide")}},methods:{}},K=G,W=Object(u["a"])(K,q,I,!1,null,null,null),Q=W.exports,V={name:"Home",components:{LearnsetOptionsModal:Q},data:function(){return{tokens:void 0,showLearnsetOptionsModal:!1,options:{name:void 0,url:void 0,levels:[!0,!0,!0,!0,!0,!0]}}},methods:{openFile:function(){var e=this;this.$store.dispatch(_).then((function(t){return e.$store.dispatch(j,t)})).then((function(t){return e.showOptionsDialog({tokens:t})})).catch((function(e){return console.error(e)}))},openURL:function(){var e=this,t=prompt("Please enter a url to your markdown file","");if(!t)return console.error("empty url");this.$store.dispatch(x,t).then((function(t){return e.$store.dispatch(j,t)})).then((function(n){return e.showOptionsDialog({tokens:n,url:t})})).catch((function(e){return console.error(e)}))},showOptionsDialog:function(e){var t=e.tokens,n=e.url;this.tokens=t,this.options.name=A.getLearnsetTitle(t),this.options.url=n,this.showLearnsetOptionsModal=!0},parseMarkdown:function(){var e=this,t=this.options,n=t.levels,r=t.name,o=t.url,a=this.tokens;this.$store.dispatch(L,{tokens:a,levels:n,name:r,url:o}).then((function(){return e.$router.push("/learn")})).catch((function(e){return console.error(e)}))}}},X=V,Y=Object(u["a"])(X,B,U,!1,null,null,null),Z=Y.exports;r["a"].use(H["a"]);var ee=[{path:"/",name:"Home",component:Z},{path:"/learn",name:"Learn",component:function(){return n.e("chunk-27ad44da").then(n.bind(null,"41ce"))}}],te=new H["a"]({mode:"history",base:"/flashmd/",routes:ee}),ne=te,re=n("d4cd"),oe=n.n(re),ae={init:function(){return Object(C["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=oe()(),r["a"].prototype.$md=r["a"].$md=t;case 2:case"end":return e.stop()}}),e)})))()}};r["a"].config.productionTip=!1,ae.init(),new r["a"]({store:D,router:ne,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},a89b:function(e,t,n){}});
//# sourceMappingURL=app.cb6dac0f.js.map