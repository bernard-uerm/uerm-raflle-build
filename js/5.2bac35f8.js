(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{2040:function(E,A,R){"use strict";R("c828")},2816:function(E,A,R){"use strict";R.r(A);var N=function(){var E=this,A=E.$createElement,R=E._self._c||A;return R("q-page",{staticClass:"flex flex-center"},[R("div",{staticClass:"container"},[R("div",{staticClass:"row justify-center"},[R("div",{staticClass:"col-12",staticStyle:{"margin-top":"25%"}},[R("q-card",{staticClass:"card-border-primary bg-red-6",staticStyle:{height:"600px","overflow-y":"auto",width:"1200px"}},[R("q-card-section",[R("div",{staticClass:"row"},[R("div",{staticClass:"col-6 text-h3 text-weight-thin text-white text-left blink"},[E._v("CONGRATULATIONS")]),R("div",{staticClass:"col-6 text-right"},[R("q-btn",{attrs:{color:"negative",push:"",icon:"logout",large:"",to:"/raffles"}},[R("div",{staticClass:"q-pl-sm"},[E._v("BACK")])])],1)]),R("table",{staticClass:"winner-table",staticStyle:{"border-collapse":"collapse","font-size":"22px",color:"white"},attrs:{border:this.tableBorder}},[R("tr",[R("td",{staticClass:"text-center",attrs:{width:"8%"}},[E._v("#")]),R("td",{staticClass:"text-center",attrs:{width:"10%"}},[E._v("ID")]),R("td",{staticClass:"text-center",attrs:{width:"20%"}},[E._v("NAME")]),R("td",{staticClass:"text-center",attrs:{width:"29%"}},[E._v("DEPARTMENT")]),R("td",{staticClass:"text-center",attrs:{width:"18%"}},[E._v("POSITION")]),R("td",{staticClass:"text-center",attrs:{width:"20%"}},[E._v("PRIZE")])])])]),R("Fireworks"),R("div",{attrs:{id:"main"}},[R("q-card-section",{style:"animation-duration: "+this.overallDuration+";",attrs:{id:"scroller"}},[R("table",{staticClass:"winner-table",staticStyle:{"border-collapse":"collapse","font-size":"22px"},attrs:{border:this.tableBorder}},E._l(this.overallWinners,(function(A){return R("tr",E._b({key:A.entry_id},"tr",A,!1),[R("td",{staticClass:"text-center",attrs:{width:"8%"}},[E._v(E._s(A.incrementalID))]),R("td",{staticClass:"text-center",attrs:{width:"10%"}},[E._v(E._s(A.entry_id))]),R("td",{staticClass:"text-center",attrs:{width:"20%"}},[E._v(E._s(A.fullname))]),R("td",{staticClass:"text-center",attrs:{width:"29%"}},[E._v(E._s(A.department))]),R("td",{staticClass:"text-center",attrs:{width:"18%"}},[E._v(E._s(A.position))]),R("td",{staticClass:"text-center",attrs:{width:"20%"}},[E._v(E._s(A.prize))])])})),0)])],1)],1)],1)])])])},O=[],M=(R("e6cf"),R("ded3")),t=R.n(M),C=R("eca3"),e=R("2f62"),B=R("7389"),D={components:{Fireworks:C["a"]},data(){return{winners:B,overallDuration:null,tableBorder:0,tada:R("f9e9"),overallWinners:[]}},computed:t()({},Object(e["b"])(["raffleDetails","currentWinners","raffleWinnersByCategory","duration","durationPerCategory","raffleStatus"])),created(){var E=new Audio(this.tada);E.play(),this.getFinalWinners()},methods:{async getFinalWinners(){await this.$store.dispatch("getCurrentWinners",this.$route.params.id);var E=0,A=null;this.durationPerCategory>0?(E=this.durationPerCategory,A=Number(this.durationPerCategory<15)?12:Number(this.durationPerCategory>=20)&&Number(this.durationPerCategory<=30)?15:50):(E=this.duration,A=Number(this.duration<15)?10:Number(this.duration>=20)&&Number(this.duration<=30)?15:50),this.overallDuration=E+A+"s",this.raffleStatus?this.overallWinners=this.currentWinners:this.overallWinners=this.raffleWinnersByCategory}}},s=D,a=(R("2040"),R("2877")),i=R("9989"),U=R("f09f"),I=R("a370"),r=R("9c40"),n=R("eebe"),W=R.n(n),L=Object(a["a"])(s,N,O,!1,null,"14826008",null);A["default"]=L.exports;W()(L,"components",{QPage:i["a"],QCard:U["a"],QCardSection:I["a"],QBtn:r["a"]})},7389:function(E){E.exports=JSON.parse('[{"ROWNUMBER":"1","CODE":"","NAME":", "},{"ROWNUMBER":"2","CODE":"3898","NAME":", , ."},{"ROWNUMBER":"3","CODE":"3980","NAME":", , ."},{"ROWNUMBER":"4","CODE":"2622","NAME":"ABABAT, MARIBEL D."},{"ROWNUMBER":"5","CODE":"4","NAME":"ABABAT, MARIBEL D."},{"ROWNUMBER":"6","CODE":"7425","NAME":"ABACAN, AIRAH GIZELLE A."},{"ROWNUMBER":"7","CODE":"7279","NAME":"ABACHE, JEAN ALEX U."},{"ROWNUMBER":"8","CODE":"5000","NAME":"ABAD, ALLELI JENNA V."},{"ROWNUMBER":"9","CODE":"6187","NAME":"ABAD, CHARMAINE T."},{"ROWNUMBER":"10","CODE":"5197","NAME":"ABAD, MA. TERESITA Y."},{"ROWNUMBER":"11","CODE":"798","NAME":"ABAD, REINERIO S."},{"ROWNUMBER":"12","CODE":"5790","NAME":"ABAD, SHINTARO ."},{"ROWNUMBER":"13","CODE":"3761","NAME":"ABADILLA, AISA U."},{"ROWNUMBER":"14","CODE":"946","NAME":"ABADINES, LUZ ."},{"ROWNUMBER":"15","CODE":"4087","NAME":"ABAGA, MA. VERONICA D."},{"ROWNUMBER":"16","CODE":"6709","NAME":"ABALORIO, MA JESELA B."},{"ROWNUMBER":"17","CODE":"4209","NAME":"ABALOS, CARMELA Q."},{"ROWNUMBER":"18","CODE":"4642","NAME":"ABALOS, MICHELLE SHEENA ."},{"ROWNUMBER":"19","CODE":"5939","NAME":"ABAMONGA, REY TIRSO Y."},{"ROWNUMBER":"20","CODE":"3384","NAME":"ABANCO, NINI PAZ ."},{"ROWNUMBER":"21","CODE":"3470","NAME":"ABANDO, JOANNA MARIE M."},{"ROWNUMBER":"22","CODE":"2016","NAME":"ABANDO, MA ROSALITA P."},{"ROWNUMBER":"23","CODE":"3061","NAME":"ABANDO, MA. ROSALITA ."},{"ROWNUMBER":"24","CODE":"2013","NAME":"ABAREDES, MARCIALLO P."},{"ROWNUMBER":"25","CODE":"5603","NAME":"ABARQUEZ, JAYMEE CHRISTINE M."},{"ROWNUMBER":"26","CODE":"1609","NAME":"ABAYA, MARISTELLA ."},{"ROWNUMBER":"27","CODE":"1615","NAME":"ABAYAN, LOVIN T."},{"ROWNUMBER":"28","CODE":"7426","NAME":"ABAYAO, CAROLYN T."},{"ROWNUMBER":"29","CODE":"780","NAME":"ABCEDE, DANTE ."},{"ROWNUMBER":"30","CODE":"275","NAME":"ABCEDE, MIRAFLOR ."},{"ROWNUMBER":"31","CODE":"3848","NAME":"ABDON, JEFFREY C."},{"ROWNUMBER":"32","CODE":"1087","NAME":"ABE, MA. PAZ ."},{"ROWNUMBER":"33","CODE":"301","NAME":"ABEAR, AVA LOURDES ."},{"ROWNUMBER":"34","CODE":"4117","NAME":"ABEDES, WENDELL A."},{"ROWNUMBER":"35","CODE":"4032","NAME":"ABEL, AISA A."},{"ROWNUMBER":"36","CODE":"530","NAME":"ABELARDO, CARLOS D."},{"ROWNUMBER":"37","CODE":"3709","NAME":"ABELEDA, LORIDEL D."},{"ROWNUMBER":"38","CODE":"4945","NAME":"ABELLA, ANGELI M."},{"ROWNUMBER":"39","CODE":"6343","NAME":"ABELLA, FRANCE JO ANNE E."},{"ROWNUMBER":"40","CODE":"7427","NAME":"ABELLA, JANELLA JILLIAN G."},{"ROWNUMBER":"41","CODE":"4185","NAME":"ABELLA, MARIE FE A."},{"ROWNUMBER":"42","CODE":"5925","NAME":"ABELLA, ROSSELL ARIANNE C."},{"ROWNUMBER":"43","CODE":"4326","NAME":"ABELLANOSA, GINA D."},{"ROWNUMBER":"44","CODE":"5417","NAME":"ABELLERA, JOSE MODESTO B. III"},{"ROWNUMBER":"45","CODE":"334","NAME":"ABELLERA, SAGRADO ."},{"ROWNUMBER":"46","CODE":"5971","NAME":"ABELLO, RAYMOND EMMANUEL S."},{"ROWNUMBER":"47","CODE":"7170","NAME":"ABELLON, ALEXANDER L."},{"ROWNUMBER":"48","CODE":"7428","NAME":"ABESAMIS, REGINE VALERIE G."},{"ROWNUMBER":"49","CODE":"6389","NAME":"ABICHUELA, ARJAY V."},{"ROWNUMBER":"50","CODE":"1502","NAME":"ABILLE, ELEANOR ."},{"ROWNUMBER":"51","CODE":"5999","NAME":"ABIOG, RONALD J."},{"ROWNUMBER":"52","CODE":"T-478","NAME":"ABLEN, AMELIA S."},{"ROWNUMBER":"53","CODE":"6924","NAME":"ABLING, ESMERALDA L."},{"ROWNUMBER":"54","CODE":"1517","NAME":"ABOLA, LUIS E."},{"ROWNUMBER":"55","CODE":"169","NAME":"ABONAN, LORENCIO ."},{"ROWNUMBER":"56","CODE":"6078","NAME":"ABONG, MARRION U."},{"ROWNUMBER":"57","CODE":"648","NAME":"ABONO, VIOLETA ."},{"ROWNUMBER":"58","CODE":"2619","NAME":"ABRAHAM, EVANGELINE ."},{"ROWNUMBER":"59","CODE":"3724","NAME":"ABRAHAM, JOSE BENITO A."},{"ROWNUMBER":"60","CODE":"6711","NAME":"ABRAHAM, KIMBERT M."},{"ROWNUMBER":"61","CODE":"737","NAME":"ABRAHAN, MARY ANNE LIM ."},{"ROWNUMBER":"62","CODE":"4339","NAME":"ABRATIQUE, RIZZA CARMELLETE ."},{"ROWNUMBER":"63","CODE":"3198","NAME":"ABRERA, MARIA ASUNCION ."},{"ROWNUMBER":"64","CODE":"2572","NAME":"ABRICO, TERESITA ."},{"ROWNUMBER":"65","CODE":"1400","NAME":"ABRIGO, MARIA CORAZON ."},{"ROWNUMBER":"66","CODE":"5604","NAME":"ABRIL, DIANNE SHARMAINE D."},{"ROWNUMBER":"67","CODE":"5643","NAME":"ABRIL, KARISSE S."},{"ROWNUMBER":"68","CODE":"6892","NAME":"ABROGENA, GELIA CONCEPCION Q."},{"ROWNUMBER":"69","CODE":"1801","NAME":"ABTAHI, ADNAN ."},{"ROWNUMBER":"70","CODE":"5654","NAME":"ABUSTAN, ANTHONY B."},{"ROWNUMBER":"71","CODE":"7340","NAME":"ABUT, PRINCESS ERIKA ANNE R."},{"ROWNUMBER":"72","CODE":"6351","NAME":"ABUYUAN, JELYCA R."},{"ROWNUMBER":"73","CODE":"3072","NAME":"ACACIO, NORMITA C."},{"ROWNUMBER":"74","CODE":"3158","NAME":"ACAYA, MARIVIC ."},{"ROWNUMBER":"75","CODE":"7342","NAME":"ACEBRON, ROCHELLE A."},{"ROWNUMBER":"76","CODE":"6702","NAME":"ACEBUCHE, ROSELLER C."},{"ROWNUMBER":"77","CODE":"1246","NAME":"ACERA, LIGAYA ."},{"ROWNUMBER":"78","CODE":"5451","NAME":"ACERO, GRACIANO L."},{"ROWNUMBER":"79","CODE":"6000","NAME":"ACIDO, JASON S."},{"ROWNUMBER":"80","CODE":"5344","NAME":"ACLAN, BELTRAN ALEXIS A."},{"ROWNUMBER":"81","CODE":"4166","NAME":"ACLERA, ANNA MARIE Q."},{"ROWNUMBER":"82","CODE":"1363","NAME":"ACOBA JR, WILFREDO ."},{"ROWNUMBER":"83","CODE":"7711","NAME":"ACOL, MARY ROSE D."},{"ROWNUMBER":"84","CODE":"7671","NAME":"ACORDA, AUGUST CEAZAR M."},{"ROWNUMBER":"85","CODE":"6505","NAME":"ACORDA, FRANCES DOLOUR MARIE G."},{"ROWNUMBER":"86","CODE":"7765","NAME":"ACORDON, BRYAN M."},{"ROWNUMBER":"87","CODE":"4504","NAME":"ACOSTA JR., DENNIS DANILO ."},{"ROWNUMBER":"88","CODE":"2397","NAME":"ACOSTA, ALLAN RENAN ."},{"ROWNUMBER":"89","CODE":"4360","NAME":"ACOSTA, HANNAH ANGELA D."},{"ROWNUMBER":"90","CODE":"5697","NAME":"ACOSTA, HANNAH ANGELA D."},{"ROWNUMBER":"91","CODE":"6598","NAME":"ACOSTA, MARIAH CHARISSE B."},{"ROWNUMBER":"92","CODE":"5769","NAME":"ACOSTA, RALPH LEWIS A."},{"ROWNUMBER":"93","CODE":"T167","NAME":"ACOSTA, SHERLYNE ."},{"ROWNUMBER":"94","CODE":"407","NAME":"ACSAY, CECILLE KRISTIN ."},{"ROWNUMBER":"95","CODE":"707","NAME":"ACSAY, LIGAYA ."},{"ROWNUMBER":"96","CODE":"7768","NAME":"ACUAVERA, REYNOLD L. JR"},{"ROWNUMBER":"97","CODE":"7211","NAME":"ACUYONG, CHITO B."},{"ROWNUMBER":"98","CODE":"7429","NAME":"ADA, MA. MICHELLE B."},{"ROWNUMBER":"99","CODE":"5547","NAME":"ADACHI, RYOTA YOSHIHIKO T. JR"},{"ROWNUMBER":"100","CODE":"2368","NAME":"ADAPON III, PAUL CYRUS ."},{"ROWNUMBER":"101","CODE":"4932","NAME":"ADAPON, KAREN P."},{"ROWNUMBER":"102","CODE":"5466","NAME":"ADINA, RAYMOND B."},{"ROWNUMBER":"103","CODE":"188","NAME":"ADOLFO, EDITH ."},{"ROWNUMBER":"104","CODE":"3206","NAME":"ADOLFO, JONATHAN B."},{"ROWNUMBER":"105","CODE":"672","NAME":"ADONES, THELMA ."},{"ROWNUMBER":"106","CODE":"2469","NAME":"ADRALES, ROLANDO T."},{"ROWNUMBER":"107","CODE":"3129","NAME":"ADRALES, ROLANDO T."},{"ROWNUMBER":"108","CODE":"4212","NAME":"ADRAMEDA, ADRIAN ."},{"ROWNUMBER":"109","CODE":"4186","NAME":"ADRANEDA, CARLO FELIX H."},{"ROWNUMBER":"110","CODE":"5145","NAME":"ADRIANO, KRISTINE ANN A."},{"ROWNUMBER":"111","CODE":"2399","NAME":"ADRIAS, MARIA LENLEN P."},{"ROWNUMBER":"112","CODE":"7796","NAME":"ADRICULA, MAAN ELINOR L."},{"ROWNUMBER":"113","CODE":"T495","NAME":"ADVERSARIO, MA. PEÑAFRANCIA ."},{"ROWNUMBER":"114","CODE":"6009","NAME":"ADVERSARIO, MARIA PEÑAFRANCIA L."},{"ROWNUMBER":"115","CODE":"5771","NAME":"ADVINCULA, JASMIN GRACE E."},{"ROWNUMBER":"116","CODE":"5675","NAME":"AFICIAL, RICHARD ALAIN F."},{"ROWNUMBER":"117","CODE":"4420","NAME":"AFOS-GONZALES, IVY ELLINE S."},{"ROWNUMBER":"118","CODE":"2197","NAME":"AFRICA, MARIA THERESA H."},{"ROWNUMBER":"119","CODE":"3992","NAME":"AGACITE, MARLYN G."},{"ROWNUMBER":"120","CODE":"934","NAME":"AGAR, LOURDES S."},{"ROWNUMBER":"121","CODE":"6249","NAME":"AGATEP, IMEE JANE D."},{"ROWNUMBER":"122","CODE":"719","NAME":"AGATO, MA IRMA ."},{"ROWNUMBER":"123","CODE":"286","NAME":"AGBAYANI, AIDA T."},{"ROWNUMBER":"124","CODE":"3786","NAME":"AGBAYANI, LOVE GAY A."},{"ROWNUMBER":"125","CODE":"335","NAME":"AGBAYANI, SOBIE A."},{"ROWNUMBER":"126","CODE":"863","NAME":"AGCAOILI, NORBERTO R."},{"ROWNUMBER":"127","CODE":"4072","NAME":"AGCAOILI, VANESSA MAY L."},{"ROWNUMBER":"128","CODE":"6791","NAME":"AGDIPA, CHARYSS T."},{"ROWNUMBER":"129","CODE":"6079","NAME":"AGERO, JANELYNE  MAE S."},{"ROWNUMBER":"130","CODE":"4505","NAME":"AGGA, MARY GRACE ."},{"ROWNUMBER":"131","CODE":"4082","NAME":"AGNI, RUEL T."},{"ROWNUMBER":"132","CODE":"6874","NAME":"AGNIS, DOROTHY M."},{"ROWNUMBER":"133","CODE":"7238","NAME":"AGOHOB, CATHERINE B."},{"ROWNUMBER":"134","CODE":"5354","NAME":"AGONCILLO, KAREN ELOUIE ."},{"ROWNUMBER":"135","CODE":"5642","NAME":"AGOSTO, HILDA V."},{"ROWNUMBER":"136","CODE":"6080","NAME":"AGPALO, BORIS MIKHAIL D."},{"ROWNUMBER":"137","CODE":"T241","NAME":"AGPASA, NORA ALMIRA I."},{"ROWNUMBER":"138","CODE":"1922","NAME":"AGQUIZ, MARIVIC ."},{"ROWNUMBER":"139","CODE":"6925","NAME":"AGRAVANTE, GILBERT BRYAN L."},{"ROWNUMBER":"140","CODE":"3275","NAME":"AGREGADO, GELSIE VISITACION ."},{"ROWNUMBER":"141","CODE":"3297","NAME":"AGSAOAY, DOROTHY D."},{"ROWNUMBER":"142","CODE":"3353","NAME":"AGSAOAY, EDWIN ANTHONY FRANCIS J."},{"ROWNUMBER":"143","CODE":"4047","NAME":"AGTAGMA JR., VICTOR E."},{"ROWNUMBER":"144","CODE":"7345","NAME":"AGUADA, SHERMAGNE E."},{"ROWNUMBER":"145","CODE":"6399","NAME":"AGUADO, MARIA JENINA P."},{"ROWNUMBER":"146","CODE":"3703","NAME":"AGUADO, MARY GRACE R."},{"ROWNUMBER":"147","CODE":"4927","NAME":"AGUANTA, ISIDRO V. IV"},{"ROWNUMBER":"148","CODE":"3414","NAME":"AGUDA, ANNABEL ."},{"ROWNUMBER":"149","CODE":"3578","NAME":"AGUDA, MARY ANNE B."},{"ROWNUMBER":"150","CODE":"6518","NAME":"AGUDA, MYCELLE ARIENE MAUREEN A."},{"ROWNUMBER":"151","CODE":"6600","NAME":"AGUHAR, SHANENN LOUISE T."},{"ROWNUMBER":"152","CODE":"42","NAME":"AGUILA, NILDA B."},{"ROWNUMBER":"153","CODE":"7717","NAME":"AGUILAR, AILEEN BIANCA S."},{"ROWNUMBER":"154","CODE":"4054","NAME":"AGUILAR, ALLAN JAY F."},{"ROWNUMBER":"155","CODE":"1704","NAME":"AGUILAR, ANNA LIZA ."},{"ROWNUMBER":"156","CODE":"T599","NAME":"AGUILAR, AVELINO JR ."},{"ROWNUMBER":"157","CODE":"4643","NAME":"AGUILAR, ENAMARI ."},{"ROWNUMBER":"158","CODE":"5816","NAME":"AGUILAR, JOSE CARLO C."},{"ROWNUMBER":"159","CODE":"4536","NAME":"AGUILAR, KITCHIE MAE C."},{"ROWNUMBER":"160","CODE":"6068","NAME":"AGUILAR, NAKITA MARIE C."},{"ROWNUMBER":"161","CODE":"1762","NAME":"AGUILAR, OLGA ."},{"ROWNUMBER":"162","CODE":"4486","NAME":"AGUILAR, SHEREE LYNN C."},{"ROWNUMBER":"163","CODE":"3280","NAME":"AGUILAR, VERONICA V."},{"ROWNUMBER":"164","CODE":"6513","NAME":"AGUINALDO, ANTHONY C."},{"ROWNUMBER":"165","CODE":"3702","NAME":"AGUINALDO, JANICE D."},{"ROWNUMBER":"166","CODE":"6322","NAME":"AGUIRRE, MARIA EUNICE D."},{"ROWNUMBER":"167","CODE":"5033","NAME":"AGUIRRE, MARIA FELICIDAD M."},{"ROWNUMBER":"168","CODE":"7331","NAME":"AGUIRRE, MARIELLE JOY T."},{"ROWNUMBER":"169","CODE":"2092","NAME":"AGUIRRE, MEMAKE ."},{"ROWNUMBER":"170","CODE":"1832","NAME":"AGUIRRE, MERRY DEE ."},{"ROWNUMBER":"171","CODE":"6569","NAME":"AGUIRRE, ROMIL M."},{"ROWNUMBER":"172","CODE":"4757","NAME":"AGUIRRE, SHANA GAIL ."},{"ROWNUMBER":"173","CODE":"4634","NAME":"AGULLANA, JUNE MOSHIE S."},{"ROWNUMBER":"174","CODE":"6400","NAME":"AGULTO, APPLE CHARM A."},{"ROWNUMBER":"175","CODE":"1854","NAME":"AGUMBAY, MA TRICIA ."},{"ROWNUMBER":"176","CODE":"4353","NAME":"AGUSTIN JR., STIMSON F."},{"ROWNUMBER":"177","CODE":"4506","NAME":"AGUSTIN, AILEEN ."},{"ROWNUMBER":"178","CODE":"6205","NAME":"AGUSTIN, ARGYRIS A."},{"ROWNUMBER":"179","CODE":"738","NAME":"AGUSTIN, BERNARDINO ."},{"ROWNUMBER":"180","CODE":"6244","NAME":"AGUSTIN, CARLOS LORENZO B."},{"ROWNUMBER":"181","CODE":"4855","NAME":"AGUSTIN, CATHERINE JOY V."},{"ROWNUMBER":"182","CODE":"930","NAME":"AGUSTIN, EVANGELINE ."},{"ROWNUMBER":"183","CODE":"4586","NAME":"AGUSTIN, FLORY MAY G."},{"ROWNUMBER":"184","CODE":"5407","NAME":"AGUSTIN, GRACE ANNE P."},{"ROWNUMBER":"185","CODE":"44468","NAME":"AGUSTIN, JR., STIMSON ."},{"ROWNUMBER":"186","CODE":"3941","NAME":"AGUSTIN, LOUIS GERARD Q."},{"ROWNUMBER":"187","CODE":"4776","NAME":"AGUSTIN, MAE AILEEN V."},{"ROWNUMBER":"188","CODE":"2453","NAME":"AGUSTIN, MARIA BERNADETTE M."},{"ROWNUMBER":"189","CODE":"4644","NAME":"AGUSTIN, SILVEROSE ."},{"ROWNUMBER":"190","CODE":"3273","NAME":"AISON, DEXTER S."},{"ROWNUMBER":"191","CODE":"6401","NAME":"AJERO, MARIE FERNANDA C."},{"ROWNUMBER":"192","CODE":"2353","NAME":"ALABAN, CESAR ALFRED ."},{"ROWNUMBER":"193","CODE":"4071","NAME":"ALABAN, CESAR ALFRED C."},{"ROWNUMBER":"194","CODE":"2354","NAME":"ALABANZA, MA AURORA ."},{"ROWNUMBER":"195","CODE":"G0034","NAME":"ALABATA, KATHY JANE"},{"ROWNUMBER":"196","CODE":"1206","NAME":"ALAG, JOSEPHINE B."},{"ROWNUMBER":"197","CODE":"3692","NAME":"ALAM, MELODY L."},{"ROWNUMBER":"198","CODE":"1808","NAME":"ALAMIS, DENNIS ."},{"ROWNUMBER":"199","CODE":"4008","NAME":"ALANES, SHERWIN A."},{"ROWNUMBER":"200","CODE":"7316","NAME":"ALARVA, WAYNE DAY A."}]')},"78f2":function(E,A,R){},"9edd":function(E,A,R){"use strict";R("78f2")},c828:function(E,A,R){},eca3:function(E,A,R){"use strict";var N=function(){var E=this,A=E.$createElement,R=E._self._c||A;return R("div",{staticClass:"canvasBox",style:"\n    height: "+E.canvasBoxHeight+";\n    width: "+E.canvasBoxWidth+";\n    margin-top: 8%;"},[R("canvas",{attrs:{id:"canvas"}})])},O=[],M=(R("a434"),{props:["boxHeight","boxWidth"],data(){return{width:window.innerWidth,height:490,seedAmount:0,seeds:[],particles:[],auto:!0}},computed:{canvas(){return document.getElementById("canvas")},ctx(){return void 0!==this.canvas?this.canvas.getContext("2d"):null},canvasBoxHeight(){return this.boxHeight||"100%"},canvasBoxWidth(){return this.boxWidth||"100%"}},methods:{clearCanvas(){void 0!==this.ctx&&(this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.width,this.height))},circle(E,A,R){void 0!==this.ctx&&(this.ctx.beginPath(),this.ctx.arc(E,A,R,0,2*Math.PI),this.ctx.closePath())},loop(){if(void 0!==this.ctx){this.clearCanvas(),this.ctx.globalCompositeOperation="lighter";for(let E=0;E<this.seeds.length;E+=1)this.seeds[E].dead?this.seeds.splice(E,1):(this.seeds[E].move(),this.seeds[E].draw());for(let E=0;E<this.particles.length;E+=1)this.particles[E].dead?this.particles.splice(E,1):(this.particles[E].move(),this.particles[E].draw());if(this.auto&&this.seedAmount%40===0){const E=this.Seed(this.randomInt(20,this.width-20),this.height-20,this.randomInt(175,185),[this.randomInt(0,359),"100%","50%"]);this.seeds.push(E)}this.ctx.globalCompositeOperation="destination-out",requestAnimationFrame(this.loop),this.seedAmount+=1}},Seed(E,A,R,N){const O=this,M=.05,t=3,C=N[0],e=N[1],B=N[2],D=`hsla(${C}, ${e}, ${B}, 1)`,s=!1,a={};let i=2;return a.x=E,a.y=A,a.move=()=>{a.y>O.randomInt(100,200)?(i+=M,a.x+=i*Math.sin(Math.PI/180*R),a.y+=i*Math.cos(Math.PI/180*R)):s||(a.explode(),a.dead=!0)},a.draw=()=>{O.ctx.fillStyle=D,O.circle(a.x,a.y,t),O.ctx.fill()},a.explode=()=>{for(let E=0;E<359;E+=4){const A=O.Firework(a.x,a.y,E+O.randomInt(-200,200)/100,[C,e,B]);O.particles.push(A)}},a.dead=s,a},Firework(E,A,R,N){const O=this,M={},t=O.randomInt(-20,20)/100,C=1,e=-.01,B=.01;let D=1,s=`hsla(${N[0]}, ${N[1]}, ${N[2]}, ${D})`,a=0,i=O.randomInt(195,205)/100,U=R,I=E,r=A;return M.dead=!1,M.move=()=>{D>0?(i>0&&(i+=e),U+=t,D-=.005,s=`hsla(${N[0]}, ${N[1]}, ${N[2]}, ${D})`,a+=B,I+=i*Math.sin(Math.PI/180*U),r+=i*Math.cos(Math.PI/180*U)+a):M.dead||(M.dead=!0)},M.draw=()=>{O.ctx.fillStyle=s,O.circle(I,r,C),O.ctx.fill()},M},randomInt(E,A){return Math.floor(Math.random()*(A-E+1)+E)},init(){this.canvas.width=this.width,this.canvas.height=this.height}},mounted(){const E=this;E.init(),E.loop(),window.addEventListener("click",(A=>{const R=E.Seed(A.pageX,A.pageY,E.randomInt(175,185),[E.randomInt(0,359),"100%","50%"]);E.seeds.push(R)})),window.addEventListener("resize",(()=>{E.width=window.innerWidth,E.height=window.innerHeight,E.canvas.width=E.width,E.clearCanvas()}))}}),t=M,C=(R("9edd"),R("2877")),e=Object(C["a"])(t,N,O,!1,null,"90aa5a48",null);A["a"]=e.exports},f9e9:function(E,A,R){E.exports=R.p+"media/tada.1aa3d2b9.mp3"}}]);