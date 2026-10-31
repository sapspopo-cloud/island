import * as T from 'three';
// 原創導覽示意，非實際古蹟測繪；地標限制在步道環內。
export function buildKinmenLandmark(g,index){
 const mat=c=>new T.MeshStandardMaterial({color:c,roughness:.86,flatShading:true});
 const brick=mat('#b7674e'),cream=mat('#f3e3c5'),stone=mat('#b1b6ad'),teal=mat('#537c7e'),wood=mat('#795944'),gold=mat('#e8bb64'),leaf=mat('#92aa79'),dark=mat('#34474b'),paper=mat('#fff7df');
 const add=(geo,m,x,y,z)=>{const o=new T.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;g.add(o);return o;};
 const box=(w,h,d,m,x=0,y=.5,z=0)=>add(new T.BoxGeometry(w,h,d),m,x,y,z);
 const cyl=(r,h,m,x=0,y=.5,z=0,r2=r)=>add(new T.CylinderGeometry(r,r2,h,12),m,x,y,z);
 const ball=(r,m,x,y,z)=>add(new T.IcosahedronGeometry(r,1),m,x,y,z);
 function roof(w,d,y){const a=box(w,.16,d,brick,0,y,0);for(const side of [-1,1]){const o=box(w,.15,d*.57,brick,0,y+.33,side*d*.24);o.rotation.x=side*.35;}box(w+.25,.18,.18,cream,0,y+.58,0);for(const x of [-w/2,w/2]){const o=box(.5,.16,.18,brick,x,y+.72,0);o.rotation.z=-Math.sign(x)*.55;}return a;}
 function door(x,z,y=1.1){box(.54,1.25,.09,wood,x,y,z);box(.66,.13,.13,cream,x,y+.69,z);}
 function window(x,y,z){box(.48,.67,.1,dark,x,y,z);box(.39,.57,.13,gold,x,y,z+.025);box(.045,.6,.15,cream,x,y,z+.04);}
 function lion(x,y,z,s=1){const a=new T.Group();g.add(a);a.position.set(x,y,z);a.scale.setScalar(s);const old=g;function m(geo,mat,px,py,pz){const o=new T.Mesh(geo,mat);o.position.set(px,py,pz);o.castShadow=true;a.add(o);return o;}
 m(new T.BoxGeometry(.85,1.15,.65),teal,0,.65,0);m(new T.IcosahedronGeometry(.68,1),stone,0,1.6,0);m(new T.BoxGeometry(.75,.35,.5),cream,0,1.42,.48);for(const xx of [-.25,.25]){m(new T.SphereGeometry(.12,8,6),paper,xx,1.8,.5);m(new T.SphereGeometry(.065,8,6),dark,xx,1.8,.6);m(new T.ConeGeometry(.2,.4,6),stone,xx,2.15,0);}const scarf=m(new T.BoxGeometry(.95,.3,.75),brick,0,1.12,0);m(new T.BoxGeometry(.24,.68,.12),brick,.28,.72,.42);}
 box(3.8,.18,3.1,stone,0,.57,0);
 if(index===0){
   box(3.05,3.5,2.3,brick,0,2.4,0);box(3.3,.22,2.55,cream,0,4.15,0);box(3.1,.22,2.5,cream,0,2.6,0);
   for(const x of [-1.08,0,1.08]){box(.18,3.55,.22,cream,x,2.35,1.22);window(x,3.45,1.19);}door(0,1.22);roof(3.4,2.7,4.4);
   box(1.15,5.2,1.25,cream,-1.5,3.2,-.55);for(const y of [1.8,3,4.5])window(-1.5,y,.1);box(1.45,.2,1.55,brick,-1.5,5.85,-.55);box(1.35,.35,1.4,cream,-1.5,6.1,-.55);
 }else if(index===1){
   box(2.1,1.7,1.6,cream,.2,1.5,-.3);roof(2.5,2,2.5);door(.2,.54);cyl(.8,.3,stone,-.6,.85,1.0);lion(-.6,1.0,1.0,1.25);
 }else if(index===2){
   box(3.15,2.2,2.3,cream,0,1.75,0);for(const x of [-1.1,0,1.1])window(x,2,1.2);door(0,1.25);
   for(const side of [-1,1]){const b=box(1.8,.3,2.6,teal,side*.8,3.2,0);b.rotation.z=-side*.22;box(1.75,.15,2.5,paper,side*.8,3.04,0);}box(.14,.45,2.6,gold,0,3.16,0);
   for(let k=0;k<5;k++){const b=box(.22,1+(k%2)*.2,.7,k%2?brick:teal,-1+k*.5,3.95+(k%2)*.1,0);b.rotation.z=(k-2)*.06;}
 }else if(index===3){
   cyl(2,.25,wood,0,.8,0);for(const x of [-1.4,1.4]){box(.24,2.8,.24,wood,x,2,0);ball(.65,leaf,x,3.5,0);}box(3.4,.45,.3,cream,0,3.2,0);
   // 可愛寓言舞臺：虎與狐狸，均為原創幾何示意。
   ball(.62,gold,.65,1.7,.1);ball(.62,gold,.65,2.5,.1);for(const x of [.36,.94])ball(.14,dark,x,2.57,.63);box(.65,.2,.13,paper,.65,2.22,.68);
   for(const y of [1.35,1.75,2.85])box(.65,.1,.09,wood,.65,y,.65);
   ball(.42,brick,-.75,1.3,.3);ball(.4,brick,-.75,1.9,.3);for(const x of [-.98,-.52])add(new T.ConeGeometry(.18,.5,5),brick,x,2.3,.3);ball(.12,paper,-.75,1.85,.67);
 }else if(index===4){
   box(2.4,1.65,1.7,cream,0,1.5,-.4);roof(2.8,2.1,2.4);door(0,.5);cyl(.65,.45,wood,1.25,.98,1.0);cyl(.67,.06,cream,1.25,1.24,1.0);
   box(.1,3.7,.1,wood,-1.45,2.5,.25);box(1.15,.7,.06,brick,-.9,3.85,.25);box(.22,2.6,.24,stone,1.25,1.95,-.6);
   // 小馬雕像與旗鼓對應講古情節。
   box(1.1,.55,.4,wood,-.4,1.25,1.3);box(.3,.6,.32,wood,.16,1.6,1.3);for(const x of [-.8,0])for(const z of [1.15,1.45])box(.1,.55,.1,wood,x,.87,z);
 }else{
   box(3.2,1.7,2.2,cream,0,1.5,-.3);roof(3.65,2.65,2.5);door(0,.88);for(const x of [-1.1,1.1]){window(x,1.7,.86);cyl(.3,.5,brick,x,2.4,1.15);cyl(.04,.3,gold,x,2,1.15);}
   cyl(1.15,.15,wood,0,1.1,1.4);cyl(.45,.35,stone,0,1.37,1.4);cyl(.1,.55,stone,0,1.7,1.4);for(const x of [-.8,.8]){cyl(.22,.08,paper,x,1.22,1.4);ball(.12,leaf,x,1.3,1.4);}
   box(.35,1.2,.06,brick,-.51,1.5,.92);box(.35,1.2,.06,brick,.51,1.5,.92);
 }
 g.userData.kinmenLandmark=['水頭番仔樓','風獅爺','開卷書館','虎狐劇場','旗鼓講古埕','團圓古厝'][index];
}
