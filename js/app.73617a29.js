(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-27ad44da":"1145cca1"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-27ad44da":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-27ad44da":"10cf97c1"}[e]+".css",o=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/flashmd/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d45":function(e,t,n){e.exports=n.p+"img/delete.90ec1e66.svg"},"54ab":function(e,t,n){e.exports=n.p+"img/ic_base.fd349e24.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar fixed-top navbar-dark bg-dark"},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:n("54ab"),width:"30",height:"30",alt:"",loading:"lazy"}}),r("router-link",{staticClass:"navbar-brand mb-0 h1 ml-2 mr-auto clickable",attrs:{tag:"span",to:"/"}},[e._v("FlashMD")])],1)},i=[],l={name:"Header"},c=l,u=n("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null),p=d.exports,f={name:"App",components:{Header:p}},m=f,h=(n("5c0b"),Object(u["a"])(m,a,o,!1,null,null,null)),v=h.exports,b=n("9483");Object(b["a"])("".concat("/flashmd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g,k,w=n("2f62"),y=n("0e44"),L=(n("c740"),n("a434"),n("d3b7"),n("ade3")),O=n("15fd"),C=(n("96cf"),n("1da1")),_="loadLearnsetFromFile",j="loadLearnsetFromUrl",x="loadLearnsetFromTokens",$="loadLearnsetFromMarkdown",F="setLearnset",M="pushLearnset",E="deleteLearnset",T=n("36d5"),A=n.n(T),S=(n("4de4"),n("7db0"),n("b0c0"),n("5530")),R=n("2909"),P=n("ec26"),D={getCardTitle:function(e){return e.front[1].content},getLearnsetTitle:function(e){var t=1+e.findIndex((function(e){return"heading_open"===e.type}));return e[t].content},getCardLevel:function(e){return parseInt(e.front[0].tag[1])-1},getTokensFromMarkdown:function(e){return r["a"].$md.parse(e,{})},getLearnsetFromTokens:function(e,t){for(var n=this,r=[],a={front:[],back:[]},o=!0,s=0;s<e.length;s++){if("heading_open"===e[s].type&&!o||s==e.length-1){var i=Object(R["a"])(r).reverse().find((function(e){return n.getCardLevel(e)<n.getCardLevel(a)}));i&&(a.category=this.getCardTitle(i)),a.title=this.getCardTitle(a),r.push(Object(S["a"])(Object(S["a"])({},a),{},{id:Object(P["a"])()})),o=!0,a={front:[],back:[]}}a[o?"front":"back"].push(e[s]),"heading_close"===e[s].type&&o&&(o=!1)}r=r.filter((function(e){return e.back.length})),r=r.filter((function(e){return t.levels[n.getCardLevel(e)]}));var l=t.url,c=t.name,u=Object(P["a"])(),d=Date.now();return{cards:r,url:l,name:c,id:u,created:d}},getLearnsetFromMarkdown:function(e,t){return this.getLearnsetFromTokens(this.getTokensFromMarkdown(e),t)}},N={learnset:{},learnsets:[]},H={learnset:function(e){return e.learnset},learnsets:function(e){return e.learnsets}},I=(g={},Object(L["a"])(g,_,(function(){return new Promise(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A()({accept:".md,.markdown"});case 2:r=e.sent,r[0]||n(new Error("No file selected")),a=new FileReader,a.onload=function(){return t(a.result)},a.onerror=function(){return n(new Error("No file selected"))},a.readAsText(r[0]);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),Object(L["a"])(g,j,(function(e){return fetch(e).then((function(e){if(200==e.status)return e.text();new Error("Failed to load file with statuscode ".concat(e.status))}))})),Object(L["a"])(g,$,(function(e,t){var n=e.commit,r=t.markdown,a=Object(O["a"])(t,["markdown"]),o=D.getLearnsetFromMarkdown(r,a);return n(F,o),n(M,o),o})),Object(L["a"])(g,x,(function(e,t){var n=e.commit,r=t.tokens,a=Object(O["a"])(t,["tokens"]),o=D.getLearnsetFromTokens(r,a);return n(F,o),n(M,o),o})),g),B=(k={},Object(L["a"])(k,F,(function(e,t){e.learnset=t})),Object(L["a"])(k,M,(function(e,t){e.learnsets.push(t)})),Object(L["a"])(k,E,(function(e,t){e.learnsets.splice(e.learnsets.findIndex((function(e){return e.id===t.id})),1)})),k),U={state:N,getters:H,actions:I,mutations:B};r["a"].use(w["a"]);var q=new w["a"].Store({plugins:[Object(y["a"])({paths:["learnset.learnsets"]})],modules:{learnset:U}}),J=(n("4989"),n("a89b"),n("be0f"),n("8c4f")),z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container pt-2"},[r("div",{staticClass:"card bg-dark border border-secondary mb-3"},[r("div",{staticClass:"card-body text-center"},[e.learnsets.length?e._e():r("div",{staticClass:"welcome mb-5"},[r("h1",{staticClass:"h3"},[e._v("Welcome to FlashMD")]),r("p",{staticClass:"text-center h6 mt-3"},[e._v("A simple tool to make digital flashcards from your exisiting markdown notes")]),r("img",{staticClass:"mx-auto d-block mt-5",attrs:{width:"120",height:"120",src:n("54ab")}})]),e.learnsets.length?r("p",{staticClass:"text-center"},[e._v("Choose from your learnsets below or open a markdown file")]):r("p",{staticClass:"text-center"},[e._v("Just open a markdown file and start learning")]),r("div",{staticClass:"d-flex justify-content-center"},[r("button",{staticClass:"btn btn-outline-light mr-2",attrs:{type:"button"},on:{click:e.openFile}},[e._v("Open File")]),r("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:e.openURL}},[e._v("Open URL")])])])]),r("LearnsetList",{attrs:{learnsets:e.learnsets},on:{onLearnsetSelected:e.openLearnset,onDeleteLearnset:e.deleteLearnset}}),r("LearnsetOptionsModal",{attrs:{options:e.options,active:e.showLearnsetOptionsModal},on:{"update:options":function(t){e.options=t},"update:active":function(t){e.showLearnsetOptionsModal=t},saved:e.parseMarkdown}})],1)},G=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal",attrs:{id:"learnsetOptionsModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("form",{staticClass:"container"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"font-weight-bold"},[e._v("Give this learnset a name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loptions.name,expression:"loptions.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example input placeholder"},domProps:{value:e.loptions.name},on:{input:function(t){t.target.composing||e.$set(e.loptions,"name",t.target.value)}}})]),n("label",{staticClass:"font-weight-bold"},[e._v("Enable/Disable certain heading levels")]),e._l(e.loptions.levels,(function(t,r){return n("div",{key:r,staticClass:"form-group form-check mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.loptions.levels[r],expression:"loptions.levels[index]"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.loptions.levels[r])?e._i(e.loptions.levels[r],null)>-1:e.loptions.levels[r]},on:{change:function(t){var n=e.loptions.levels[r],a=t.target,o=!!a.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);a.checked?i<0&&e.$set(e.loptions.levels,r,n.concat([s])):i>-1&&e.$set(e.loptions.levels,r,n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.loptions.levels,r,o)}}}),n("label",{staticClass:"form-check-label"},[e._v("Heading "+e._s(r+1))])])}))],2)]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.$emit("update:active",!1)}}},[e._v("Cancel")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.$emit("update:options",e.loptions),e.$emit("update:active",!1),e.$emit("saved")}}},[e._v("Save")])])])])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[e._v("Options")])])}],Y=n("1157"),Q=n.n(Y),V={name:"learnsetOptionsModal",data:function(){return{loptions:{}}},props:{active:Boolean,options:Object},watch:{active:function(e){e&&(this.loptions=this.options),Q()("#learnsetOptionsModal").modal(e?"show":"hide")}},methods:{}},X=V,Z=Object(u["a"])(X,K,W,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card bg-dark border border-secondary mb-3"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[e._v("Your learnsets")]),e.learnsets.length?n("div",e._l(e.learnsets,(function(t,r){return n("div",{key:r},[n("LearnsetListItem",{attrs:{learnset:t},on:{onDeleteLearnset:function(n){return e.$emit("onDeleteLearnset",t)},onLearnsetSelected:function(n){return e.$emit("onLearnsetSelected",t)}}}),r!==e.learnsets.length-1?n("hr"):e._e()],1)})),0):n("div",{staticClass:"card-body mt-3"},[n("p",{staticClass:"text-center h-4"},[e._v("No learnsets, yet.")])])])])},ne=[],re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-between clickable"},[r("span",{on:{click:function(t){return e.$emit("onLearnsetSelected",e.learnset)}}},[e._v(e._s(e.learnset.name))]),r("img",{attrs:{src:n("0d45")},on:{click:function(t){return e.$emit("onDeleteLearnset",e.learnset)}}})])},ae=[],oe={name:"LearnsetListItem",props:{learnset:Object}},se=oe,ie=Object(u["a"])(se,re,ae,!1,null,null,null),le=ie.exports,ce={name:"LearnsetList",components:{LearnsetListItem:le},props:{learnsets:Array}},ue=ce,de=Object(u["a"])(ue,te,ne,!1,null,null,null),pe=de.exports,fe={name:"Home",components:{LearnsetOptionsModal:ee,LearnsetList:pe},data:function(){return{tokens:void 0,showLearnsetOptionsModal:!1,options:{name:void 0,url:void 0,levels:[!0,!0,!0,!0,!0,!0]}}},computed:Object(S["a"])({},Object(w["b"])(["learnsets"])),methods:{openFile:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch(_);case 2:t=e.sent,n=D.getTokensFromMarkdown(t),this.showOptionsDialog({tokens:n});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),openURL:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=prompt("Please enter a url to your markdown file",""),t){e.next=3;break}return e.abrupt("return",console.error("empty url"));case 3:return e.next=5,this.$store.dispatch(j,t);case 5:n=e.sent,r=D.getTokensFromMarkdown(n),this.showOptionsDialog({tokens:r,url:t});case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),showOptionsDialog:function(e){var t=e.tokens,n=e.url;this.tokens=t,this.options.name=D.getLearnsetTitle(t),this.options.url=n,this.showLearnsetOptionsModal=!0},parseMarkdown:function(){var e=this,t=this.options,n=t.levels,r=t.name,a=t.url,o=this.tokens;this.$store.dispatch(x,{tokens:o,levels:n,name:r,url:a}).then((function(){return e.$router.push("/learn")})).catch((function(e){return console.error(e)}))},openLearnset:function(e){this.$store.commit(F,e),this.$router.push("/learn")},deleteLearnset:function(e){this.$store.commit(E,e)}}},me=fe,he=Object(u["a"])(me,z,G,!1,null,null,null),ve=he.exports;r["a"].use(J["a"]);var be=[{path:"/",name:"Home",component:ve},{path:"/learn",name:"Learn",component:function(){return n.e("chunk-27ad44da").then(n.bind(null,"41ce"))}}],ge=new J["a"]({mode:"history",base:"/flashmd/",routes:be}),ke=ge,we=n("d4cd"),ye=n.n(we),Le=n("5ea5"),Oe=n.n(Le),Ce=n("3b2f"),_e=n.n(Ce),je=n("1487"),xe=n.n(je),$e={init:function(){return Object(C["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Oe.a.use(_e.a),n=ye()({highlight:function(e,t){return t&&xe.a.getLanguage(t)?'<pre class="hljs"><code>'.concat(xe.a.highlight(t,e,!0).value,"</code></pre>"):'<pre class="hljs"><code>'.concat(ye.a.utils.escapeHtml(e),"</code></pre>")}}).use(t,{delimiters:"dollars",macros:{"\\RR":"\\mathbb{R}"}}),r["a"].prototype.$md=r["a"].$md=n;case 3:case"end":return e.stop()}}),e)})))()}};r["a"].config.productionTip=!1,$e.init(),new r["a"]({store:q,router:ke,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},a89b:function(e,t,n){}});
//# sourceMappingURL=app.73617a29.js.map