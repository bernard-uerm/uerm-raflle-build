(function(e){function t(t){for(var r,a,i=t[0],l=t[1],f=t[2],c=0,u=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&u.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={2:0},s={2:0},o=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{1:"7ff61acb",3:"ef8bc7fb",4:"104d0a5a",5:"e644decb",6:"3be73a75",7:"f11f85a2",8:"a6896144",9:"9264e8c4",10:"04dbe2d1"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={1:1,3:1,4:1,5:1,6:1,8:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"87bf8100",3:"f1c10582",4:"40f103fc",5:"b23e9200",6:"34267da6",7:"31d6cfe0",8:"5ef2be60",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",s=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var f=o[i],c=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===r||c===s))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){f=u[i],c=f.getAttribute("data-href");if(c===r||c===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var f,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var u=new Error;f=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}s[e]=void 0}};var p=setTimeout((function(){f({type:"timeout",target:c})}),12e4);c.onerror=c.onload=f,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],c=f.push.bind(f);f.push=t,f=f.slice();for(var u=0;u<f.length;u++)t(f[u]);var p=c;o.push([1,0]),n()})({"0047":function(e,t,n){},1:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047");var r=n("2b0e"),a=n("1f91"),s=n("42d2"),o=n("b05d");r["a"].use(o["a"],{config:{dark:"auto"},lang:a["a"],iconSet:s["a"]});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},l=[],f={name:"App"},c=f,u=n("2877"),p=Object(u["a"])(c,i,l,!1,null,null,null),h=p.exports,d=n("2f62");n("ddb0");const m={apiUrl:"https://apps.uerm.edu.ph:3443/it/",categories:[]},y={setCategory(e,t){e.categories=t}},g={async getCategories(e){const t=await fetch(`${this.state.categories.apiUrl}raffle-categories`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(t.length>0){const r=[];for(var n of t){const e=n.category;r.push(e)}return e.commit("setCategory",r),t}}},v={categories(e){return e.categories}};var b={namespace:!0,state:m,mutations:y,actions:g,getters:v};const w={apiUrl:"https://apps.uerm.edu.ph:3443/it/",raffles:[],winners:{},raffleDetails:{},finalWinners:[],winnersStatus:!1,duration:30,allWinners:[],winnersV2:[],raffleStatus:!1},C={setRaffles(e,t){e.raffles=t},setCurrentWinners(e,t){e.winners=t},setRaffleDetails(e,t){e.raffleDetails=t},setFinalWinners(e,t){e.finalWinners=t},setWinnersStatus(e,t){e.winnersStatus=t},setDuration(e,t){e.duration=t},setAllWinners(e,t){e.allWinners=t},setCurrentWinnersV2(e,t){e.winnersV2=t},setRaffleStatus(e,t){e.raffleStatus=t}},W={setRaffleStatus(e,t){e.commit("setRaffleStatus",t)},async setRaffleDetails(e,t){console.log(t),e.commit("setRaffleDetails",t)},async getRaffles(e){const t=await fetch(`${this.state.raffles.apiUrl}raffles`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(t),t.length>0)return e.commit("setRaffles",t),t},async getRandomWinners(e,t){const n=await fetch(`${this.state.raffles.apiUrl}getRandomWinners?category=${t.category}&winnersCount=${t.drawNumbers}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(n.length>0)return n},async setWinners(e,t){const n=await fetch(`${this.state.raffles.apiUrl}setWinners`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return n},async getCurrentWinners(e,t){const n=await fetch(`${this.state.raffles.apiUrl}raffle-get-winners?raffleID=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(n),Object.keys(n).length>0){e.commit("setCurrentWinners",n),e.commit("setDuration",n.length);var r=1;for(var a of n)a.incrementalID=r++;return n.length>0?e.commit("setWinnersStatus",!0):e.commit("setWinnersStatus",!1),n}e.commit("setCurrentWinners",[]),e.commit("setWinnersStatus",!1)},async getCurrentWinnersV2(e,t){console.log(`${this.state.raffles.apiUrl}raffle-get-winners-v2?raffleID=${t}`);const n=await fetch(`${this.state.raffles.apiUrl}raffle-get-winners-v2?raffleID=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(n),Object.keys(n).length>0){e.commit("setCurrentWinnersV2",n);var r=1;for(var a of n)a.incrementalID=r++;return n}e.commit("setCurrentWinnersV2",[]),e.commit("setWinnersStatus",!1)},async getWinnerPerCategory(e,t){const n=await fetch(`${this.state.raffles.apiUrl}raffle-get-winners?raffleID=${t.raffleID}&category=${t.categoryID}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(n),n.length>0){var r=1;for(var a of n)a.incrementalID=r++;e.commit("setFinalWinners",n)}},async getAllWinners(e){const t=await fetch(`${this.state.raffles.apiUrl}raffle-get-winners`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(t),t.length>0){var n=1;for(var r of t)r.incrementalID=n++;e.commit("setAllWinners",t)}else e.commit("setAllWinners",t)},async clearWinners(e){const t=await fetch(`${this.state.raffles.apiUrl}raffle-clear-winners`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));return t},async resetRaffleWinners(e){const t=await fetch(`${this.state.raffles.apiUrl}raffle-reset-overall-winners`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));return console.log(t),t}},j={raffles(e){return e.raffles},currentWinners(e){return e.winners},raffleDetails(e){return e.raffleDetails},finalWinners(e){return e.finalWinners},winnersStatus(e){return e.winnersStatus},duration(e){return e.duration},setAllWinners(e){return e.allWinners},winnersV2(e){return e.winnersV2},raffleStatus(e){return e.raffleStatus}};var P={namespace:!0,state:w,mutations:C,actions:W,getters:j};n("fb6a"),n("4e82");const E={apiUrl:"https://apps.uerm.edu.ph:3443/it/",employees:[],raffleEntries:[],finalRaffleEntryWinners:[],raffleWinnersByCategory:[],durationPerCategory:0},S={saveEmployees(e,t){e.categories=t},setRaffleEntries(e,t){e.raffleEntries=t},shuffleRaffleEntries(e,t){const n=e.raffleEntries.sort((()=>Math.random()-.5)),r=n.sort((()=>Math.random()-.5)),a=r.sort((()=>Math.random()-.5)),s=a.sort((()=>Math.random()-.5)),o=s.slice(0,t),i=o.sort((()=>Math.random()-.5)),l=i.sort((()=>Math.random()-.5)),f=l.sort((()=>Math.random()-.5));e.finalRaffleEntryWinners=f},setRaffleWinnersByCategory(e,t){e.raffleWinnersByCategory=t},setDurationPerCategory(e,t){e.durationPerCategory=t}},T={setRaffleWinnersByCategory(e,t){e.commit("setRaffleWinnersByCategory",t)},async saveEmployees(e,t){for(var n of t){n.code=n.Code,n.firstName=n.FirstName,n.lastName=n.LastName,n.middleName=n.MiddleName,n.position=n.Position,n.department=n.Department,n.category=n.Group;var r=await fetch(`${this.state.employees.apiUrl}raffle-save-entries`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json()));console.log(n.code)}return r},async getFinalWinners(e,t){console.log(t)},async getRaffleEntries(e,t){console.log(t);const n=await fetch(`${this.state.raffles.apiUrl}raffle-entries?category=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));n.length>0&&e.commit("setRaffleEntries",n)},async shuffleRaffleEntries(e,t){e.commit("shuffleRaffleEntries",t)},async saveRaffleWinners(e,t){for(var n of(console.log(t,"sfdsfdsaffsafsf"),t))var r=await fetch(`${this.state.employees.apiUrl}raffle-save-winners`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json()));if(console.log(r),void 0!==r.success){var a=1;for(var s of t)s.fullname=`${s.last_name}, ${s.first_name} ${null===s.middle_name?"":s.middle_name}`,s.prize=`${this.state.raffles.raffleDetails.rafflePrize}`,s.incrementalID=a++;e.commit("setDurationPerCategory",t.length),e.commit("setRaffleWinnersByCategory",t)}return r}},$={employees(e){return e.categories},raffleEntries(e){return e.raffleEntries},finalRaffleEntryWinners(e){return e.finalRaffleEntryWinners},raffleWinnersByCategory(e){return e.raffleWinnersByCategory},durationPerCategory(e){return e.durationPerCategory}};var R={namespace:!0,state:E,mutations:S,actions:T,getters:$};r["a"].use(d["a"]);var D=function(){const e=new d["a"].Store({modules:{categories:b,raffles:P,employees:R},strict:!1});return e},O=n("8c4f"),U=n("f0eb");const N=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"8b24"))}]},{path:"/raffles",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"2f14"))}]},{path:"/raffle-draw/:id",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"d55a"))}]},{path:"/winners/:id",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"cfc6"))}]},{path:"/winners-list/:id",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"2816"))}]},{path:"/admin",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"f6b42")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"34ab"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"e51e"))}];var _=N;r["a"].use(O["a"]),r["a"].use(U["default"]);var A=function(){const e=new O["a"]({scrollBehavior:()=>({x:0,y:0}),routes:_,mode:"hash",base:""});return e},B=async function(){const e="function"===typeof D?await D({Vue:r["a"]}):D,t="function"===typeof A?await A({Vue:r["a"],store:e}):A;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},I=n("bc3a"),M=n.n(I);r["a"].prototype.$axios=M.a;const x="";async function G(){const{app:e,store:t,router:n}=await B();let a=!1;const s=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),i=[void 0];for(let f=0;!1===a&&f<i.length;f++)if("function"===typeof i[f])try{await i[f]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:s,urlPath:o,publicPath:x})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&new r["a"](e)}G()}});