(function(e){function t(t){for(var o,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},r=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-32027104":"1e7b8078","chunk-5fe34042":"3aba2e1e","chunk-73f76172":"4aab0214"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=i[e]=[t,o]}));t.push(n[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e);var u=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}i[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/portfolio/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dc7":function(e,t,n){"use strict";n("f743")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function i(e,t,n,i,r,a){var c=Object(o["v"])("He"),s=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["d"])("div",{class:Object(o["m"])(["app_div",{app_back0:0==e.$store.state.app_back},{app_back1:1==e.$store.state.app_back},{app_back2:2==e.$store.state.app_back}])},[Object(o["g"])(c),Object(o["g"])(s)],2)}n("b0c0");var r={name:"App",components:{},methods:{load:function(){var e=this.$route.name;this.$store.commit("background",e)}},mounted:function(){window.addEventListener("load",this.load)},watch:{$route:function(e,t){this.$store.commit("background",e.name)}}},a=(n("7598"),n("0dc7"),n("6b0d")),c=n.n(a);const s=c()(r,[["render",i]]);var u=s,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=function(){return n.e("chunk-73f76172").then(n.bind(null,"a954"))},d=function(){return n.e("chunk-5fe34042").then(n.bind(null,"cabe"))},h=function(){return n.e("chunk-32027104").then(n.bind(null,"88bb"))},f=[{path:"/",name:"profile",component:p},{path:"/project",name:"project",component:d},{path:"/blog",name:"blog",component:h}],b=Object(l["a"])({history:Object(l["b"])(),routes:f}),m=b,S=(n("4de4"),n("5502")),g={info:"<div class='info'>\n        <p>구현모 (Gu Hyeonmo)</p>\n        <p>1997 / 08 / 15 (만 25세)</p>\n        <p>경기도 고양시 거주</p>\n        <p>김포대학교 컴퓨터네트워크과 졸업(2021.02)</p>\n        <p>강남하이미디어아카데미 '자바 앱&웹개발자 양성과정A' 수료(2021.03.24 ~ 2021.08.13)</p>\n        <div class='mail'><p>저에게 궁금한 점이 있으시다면,</p><a href='mailto: gusah8504@gmail.com'>\n            <em>✉ </em>gusah8504@gmail.com</a>\n            <p>위의 이메일로 연락주세요,</p>\n            <p>항상 발전하는 사람이 되겠습니다.</p>\n            <p>읽어주셔서 감사합니다 :)</p>\n            <p>© 2021 Produced by 구현모</p>\n        </div>\n    </div>",file:'<p class="file">PROFILE</p>\n    <p class="pro">안녕하세요. 프론트엔드 개발자 구현모 입니다.<br>\n    대학교에서 개발자의 기초적인 역량을 쌓고 6개월 간의 프론트엔드 국비과정을\n    배우면서 HTML,CSS,JAVASCRIPT를 활용하여 웹페이지를 제작하고,<br>\n    개인프로젝트도 진행하며 개인역량을 쌓아왔습니다.</p>\n    <p>가장 좋아하는 언어는 JAVASCRIPT 입니다.<br>\n    새로운 기술로 개발하여 사용자 친화적인 웹페이지를 개발하기위해\n    항상 발전하는 개발자가 되기위해 노력하고있습니다. 감사합니다\n    </p>'},v=[{title:"@media 사용",tag:"CSS",day:"21.09.27",img:"CSS_1",link:"https://fork-valley-f0c.notion.site/media-a568dba2079e4dabaf5be94081d85d7f"},{title:"Vue.js SASS / SCSS <br>설치, 사용방법",tag:"Vue",day:"21.09.30",img:"VUE_1",link:"https://fork-valley-f0c.notion.site/Vue-js-SASS-SCSS-accb643e770d47bcbdfa7178514c28ad"},{title:"Vue.js SCSS 설치 시 오류발생",tag:"Vue",day:"21.09.30",img:"VUE_2",link:"https://fork-valley-f0c.notion.site/Vue-js-SCSS-4fd752460c304e7cbf308712a3353426"},{title:"SASS / SCSS 사용법",tag:"SCSS",day:"21.10.01",img:"SCSS_1",link:"https://fork-valley-f0c.notion.site/SASS-SCSS-7415a149f5104da69e09d546125a8d27"},{title:"meta viewport",tag:"HTML",day:"21.10.01",img:"HTML_1",link:"https://fork-valley-f0c.notion.site/meta-viewport-b8a25c4fc63e4fffa0bd88e11891b599"},{title:"vue_roter 설치",tag:"Vue",day:"21.10.02",img:"VUE_3",link:"https://fork-valley-f0c.notion.site/vue_roter-6b26b914149c41a9a38a6950090a412a"}],_=[{name:"Tommy Hilfinger",day:"2021.07 ~ 2021.08",people:"팀 프로젝트 (4인)",stack:"HTML, CSS, JAVASCRIPT, JQUERY, JSP",goal:"HTML, CSS, JS, JSP 기반 쇼핑몰 프로젝트 입니다. 백엔드 팀원들과의 협력을 배웠으며,\n회원가입, 로그인, 해당 상품구매 기능까지 구현하였습니다",did:"PC 프론트엔드 전체 기능",link:"http://jeongkyu7.cafe24.com/tommy_hilfinger1_0/",codelink:""},{name:"HYEONMO STUDIO",day:"2021.08 ~ 2021.08",people:"개인 프로젝트",stack:"HTML, CSS, JAVASCRIPT, JQUERY",goal:"[핸드스튜디오] 의 Copy page 입니다 \n HTML, CSS, JAVASCRIPT, JQUERY로 제작되었으며,\n 프론트엔드 기초기술 연습에 초첨을 두었습니다.",did:"프론트엔드 전체 기능",link:"http://c08150404.cafe24.com/port_wheel/wheel.html",codelink:"https://github.com/Yeonhul/Yeonhul.github.io/tree/main/HYEONMO_STUDIO"},{name:"LG PAGE",day:"2021.08 ~ 2021.08",people:"개인 프로젝트",stack:"HTML, CSS, JAVASCRIPT, JQUERY",goal:"[LG 그룹] 의 Copy page 입니다. \n HTML, CSS, JAVASCRIPT, JQUERY로 제작되었으며,\n 반응형 대응과 JS, JQUERY 기술 연습에 초첨을 두었습니다",did:"프론트엔드 전체 기능",link:"http://c08150404.cafe24.com/hell/",codelink:"https://github.com/Yeonhul/Yeonhul.github.io/tree/main/LG"},{name:"PASTEL PALETTE",day:"2021.08 ~ 2021.09",people:"개인 프로젝트",stack:"HTML, CSS, JAVASCRIPT, JQUERY, VUE",goal:"VUE 처음 활용한 프로젝트 입니다. 여러 파스텔 색상을 소개해주는 목적으로 제작되었고\n HTML, CSS, JAVASCRIPT, JQUERY, VUE 로 제작되었으며, \n VUE 활용, 배포 등 많은 경험을 할 수 있었던 프로젝트 입니다.",did:"전체 기능",link:"https://yeonhul.github.io/vue_PASTEL/",codelink:"https://github.com/Yeonhul/Yeonhul.github.io/tree/main/vue_PASTEL"},{name:"Portfolio",day:"2021.09 ~ 2021.09",people:"개인 프로젝트",stack:"HTML, CSS, JAVASCRIPT, VUE",goal:"보고 계신 페이지의 프로젝트 입니다. 포트폴리오 목적으로 제작 되었습니다",did:"전체 기능",link:"https://yeonhul.github.io/portfolio/",codelink:"https://github.com/Yeonhul/Yeonhul.github.io/tree/main/portfolio"}],k=[{name:"HTML"},{name:"CSS"},{name:"JAVASCRIPT"},{name:"ECMAScript6"},{name:"JQUERY"},{name:"VUE"},{name:"SASS, SCSS"}],y=[{name:"Github",link:"https://github.com/Yeonhul"},{name:"Notion",link:"https://www.notion.so/Develope-Note-5d08c9b6d73b4d15b8acab8d72e5670a"}],j=Object(S["a"])({state:{info:g,posting:v,project:_,skills:k,storage:y,width_resize:0,height_resize:0,info_TF:!0,app_back:0,put_c:0,select:"all"},mutations:{resize:function(e){e.width_resize=window.innerWidth,e.width_resize>1023?e.info_TF=!0:e.width_resize<1024&&(e.info_TF=!1)},background:function(e,t){switch(t){case"profile":return e.app_back=0,e.put_c=0;case"project":return e.app_back=1,e.put_c=1;case"blog":return e.app_back=2,e.put_c=2}},putE:function(e,t){e.put_c=t}},actions:{},modules:{},getters:{posting_list:function(e){return"all"==e.select?e.posting:e.posting.filter((function(t){return t.tag==e.select.toUpperCase()}))}}}),T={class:"header"},O={class:"pro"},C={class:"plbox"},w={class:"pro_img"},E=["src"],A=Object(o["e"])("div",{class:"pro_txt"},[Object(o["e"])("h1",null,"안녕하세요!"),Object(o["e"])("p",null,"Front_end 개발자 구현모 입니다.")],-1),P=["innerHTML"],L=["value","onClick"];function V(e,t,i,r,a,c){return Object(o["q"])(),Object(o["d"])("div",T,[Object(o["e"])("div",O,[Object(o["e"])("div",C,[Object(o["e"])("div",w,[Object(o["e"])("img",{src:n("9715"),alt:""},null,8,E)]),A]),Object(o["C"])(Object(o["e"])("div",{innerHTML:e.$store.state.info.info},null,8,P),[[o["A"],e.$store.state.info_TF]])]),Object(o["e"])("div",{class:Object(o["m"])(["h_pbox",{hp_E2:a.header_TF}])},[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(a.menu,(function(e,t){return Object(o["q"])(),Object(o["d"])("input",{class:Object(o["m"])(["h_put",c.put_E(t)]),type:"button",key:t,value:e,onClick:function(n){return c.m_link(e.toLowerCase(),t)}},null,10,L)})),128))],2)])}var J=n("1157"),M=n.n(J),H={data:function(){return{menu:["Profile","Project","Blog"],header_TF:!1}},methods:{m_link:function(e,t){var n=this.$router;n.push({name:e}),this.$store.commit("putE",t)},resize_event:function(){this.$store.commit("resize")},scroll_event:function(){var e=M()(window).scrollTop(),t=M()(".h_pbox").offset().top,n=M()(".header").height();t<=e&&this.$store.state.width_resize<1024&&0==this.header_TF?this.header_TF=!0:n>=e&&this.$store.state.width_resize<1024&&(this.header_TF=!1)},put_E:function(e){return this.$store.state.put_c==e?"h_E":""}},computed:{},mounted:function(){M()("html, body").scrollTop(0),window.addEventListener("resize",this.resize_event),window.addEventListener("scroll",this.scroll_event),this.$store.commit("resize")},beforeDestory:function(){window.removeEventListener("resize",this.resize_event)},watch:{$route:function(e,t){M()("html, body").animate({scrollTop:0})}}};const R=c()(H,[["render",V]]);var U=R;Object(o["c"])(u).use(j).use(m).component("He",U).mount("#app")},7598:function(e,t,n){"use strict";n("c763")},9715:function(e,t,n){e.exports=n.p+"img/mo.018d4a82.jpg"},c763:function(e,t,n){},f743:function(e,t,n){}});
//# sourceMappingURL=app.dc6f1b96.js.map