(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"1e5b":function(t,e,i){},"2da0":function(t,e,i){"use strict";i("1e5b")},"713b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-page-container",{staticClass:"front"},[i("vue-page-transition",{attrs:{name:"overlay-down-full"}},[i("router-view")],1)],1),i("Fireworks",{staticClass:"behind"})],1)},a=[],n=i("eca3"),o={name:"MainLayout",components:{Fireworks:n["a"]}},h=o,r=(i("2da0"),i("2877")),c=i("4d5a"),d=i("09e3"),l=i("eebe"),u=i.n(l),p=Object(r["a"])(h,s,a,!1,null,null,null);e["default"]=p.exports;u()(p,"components",{QLayout:c["a"],QPageContainer:d["a"]})},8716:function(t,e,i){},bec1:function(t,e,i){"use strict";i("8716")},eca3:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"canvasBox",style:"\n    height: "+t.canvasBoxHeight+";\n    width: "+t.canvasBoxWidth+";\n    margin-top: 8%;"},[i("canvas",{attrs:{id:"canvas"}})])},a=[],n=(i("a434"),{props:["boxHeight","boxWidth"],data(){return{width:window.innerWidth,height:490,seedAmount:0,seeds:[],particles:[],auto:!0}},computed:{canvas(){return document.getElementById("canvas")},ctx(){return void 0!==this.canvas?this.canvas.getContext("2d"):null},canvasBoxHeight(){return this.boxHeight||"80%"},canvasBoxWidth(){return this.boxWidth||"100%"}},methods:{clearCanvas(){void 0!==this.ctx&&(this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.width,this.height))},circle(t,e,i){void 0!==this.ctx&&(this.ctx.beginPath(),this.ctx.arc(t,e,i,0,2*Math.PI),this.ctx.closePath())},loop(){if(void 0!==this.ctx){this.clearCanvas(),this.ctx.globalCompositeOperation="lighter";for(let t=0;t<this.seeds.length;t+=1)this.seeds[t].dead?this.seeds.splice(t,1):(this.seeds[t].move(),this.seeds[t].draw());for(let t=0;t<this.particles.length;t+=1)this.particles[t].dead?this.particles.splice(t,1):(this.particles[t].move(),this.particles[t].draw());if(this.auto&&this.seedAmount%40===0){const t=this.Seed(this.randomInt(20,this.width-20),this.height-20,this.randomInt(175,185),[this.randomInt(0,359),"100%","50%"]);this.seeds.push(t)}this.ctx.globalCompositeOperation="destination-out",requestAnimationFrame(this.loop),this.seedAmount+=1}},Seed(t,e,i,s){const a=this,n=.05,o=3,h=s[0],r=s[1],c=s[2],d=`hsla(${h}, ${r}, ${c}, 1)`,l=!1,u={};let p=2;return u.x=t,u.y=e,u.move=()=>{u.y>a.randomInt(100,200)?(p+=n,u.x+=p*Math.sin(Math.PI/180*i),u.y+=p*Math.cos(Math.PI/180*i)):l||(u.explode(),u.dead=!0)},u.draw=()=>{a.ctx.fillStyle=d,a.circle(u.x,u.y,o),a.ctx.fill()},u.explode=()=>{for(let t=0;t<359;t+=4){const e=a.Firework(u.x,u.y,t+a.randomInt(-200,200)/100,[h,r,c]);a.particles.push(e)}},u.dead=l,u},Firework(t,e,i,s){const a=this,n={},o=a.randomInt(-20,20)/100,h=1,r=-.01,c=.01;let d=1,l=`hsla(${s[0]}, ${s[1]}, ${s[2]}, ${d})`,u=0,p=a.randomInt(195,205)/100,v=i,w=t,m=e;return n.dead=!1,n.move=()=>{d>0?(p>0&&(p+=r),v+=o,d-=.005,l=`hsla(${s[0]}, ${s[1]}, ${s[2]}, ${d})`,u+=c,w+=p*Math.sin(Math.PI/180*v),m+=p*Math.cos(Math.PI/180*v)+u):n.dead||(n.dead=!0)},n.draw=()=>{a.ctx.fillStyle=l,a.circle(w,m,h),a.ctx.fill()},n},randomInt(t,e){return Math.floor(Math.random()*(e-t+1)+t)},init(){this.canvas.width=this.width,this.canvas.height=this.height}},mounted(){const t=this;t.init(),t.loop(),window.addEventListener("click",(e=>{const i=t.Seed(e.pageX,e.pageY,t.randomInt(175,185),[t.randomInt(0,359),"100%","50%"]);t.seeds.push(i)})),window.addEventListener("resize",(()=>{t.width=window.innerWidth,t.height=window.innerHeight,t.canvas.width=t.width,t.clearCanvas()}))}}),o=n,h=(i("bec1"),i("2877")),r=Object(h["a"])(o,s,a,!1,null,"784508bf",null);e["a"]=r.exports}}]);