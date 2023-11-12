let datavaga=document.getElementById("datavaga");
console.log(datavaga);
let newww=document.getElementById("newww");
console.log(newww);
newww.addEventListener("mouseover",(e)=>{
    console.log(e);
    e.stopImmediatePropagation();
    let res=newww.classList.toggle("true");
    if(res){
        datavaga.style.display="block";
        datavaga.style.transition="all 25s";
    }
    else{
        datavaga.style.display="none";
        datavaga.style.transition="all 25s";
    }

},false);
newww.addEventListener("mouseleave",(e)=>{
    console.log(e);
    e.stopImmediatePropagation();
    let res=newww.classList.toggle("true");
    if(res){
        datavaga.style.display="block";
        datavaga.style.transition="all 25s";
    }
    else{
        datavaga.style.display="none";
        datavaga.style.transition="all 25s";
    }

  

},false);
//more
let more=document.getElementById("more");
console.log(more);
let car24=document.getElementById("car24");
console.log(car24);
more.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
   let res1=more.classList.toggle("true");
   if(res1){
    car24.style.display="block";
   }
   else{
    car24.style.display="none";

   }


},false)
// let body=document.body();
// body.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation();
//    let res1=more.classList.toggle("true");
//    if(res1){
//     car24.style.display="block";
//    }
//    else{
//     car24.style.display="none";

//    }


// },false)

let saledv=document.getElementById("saledv");
console.log(saledv);
let  sallllllllll =document.getElementById("sallllllllll");
console.log(sallllllllll);
sallllllllll.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=sallllllllll.classList.toggle("true");
    if(res){
        saledv.style.display="block";
    }
    else{
        saledv.style.display="none"
    }

},false)
sallllllllll.addEventListener("mouseleave",(e)=>{
    console.log(e);
    e.stopImmediatePropagation();
    let res=sallllllllll.classList.toggle("true");
    if(res){
        saledv.style.display="block";
        saledv.style.transition="all 25s";
    }
    else{
        saledv.style.display="none";
        saledv.style.transition="all 25s";
    }

  

},false);
let classss=document.getElementById("classss");
console.log(classss);
let secnn=document.getElementById("secnn");
console.log(secnn);
classss.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=classss.classList.toggle("classss");
    if(res){
        secnn.style.display="block"; 
    }
    else{
        secnn.style.display="none";  
    }
},false)
classss.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=classss.classList.toggle("classss")
    if(res){
        secnn.style.display="block"; 
    }
    else{
        secnn.style.display="none";  
    }

},false)
let kidssss=document.getElementById("kidssss");
console.log(kidssss);
let kidddd=document.getElementById("kidddd");
console.log(kidddd);
kidddd.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=kidddd.classList.toggle("true");
    if(res){
        kidssss.style.display="block"; 
    }
    else{
        kidssss.style.display="none"; 
    }


},false)
kidddd.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=kidddd.classList.toggle("true");
    if(res){
        kidssss.style.display="block"; 
    }
    else{
        kidssss.style.display="none"; 
    }


},false)
//srggggcimg
//srgghjimg
//whitlistlitem;
let srggggcimg=document.getElementById("srggggcimg");
console.log(srggggcimg); 
let whitlistlitem=document.getElementById("whitlistlitem");
console.log(whitlistlitem);
let lilll=document.getElementById("lilll");
console.log(lilll);
let srgghjimg=document.getElementById("srgghjimg");
console.log(srgghjimg);
srgghjimg.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    let res=srgghjimg.classList.toggle("true");
 console.log(res);
 if(res){
    lilll.style.display="block"; 
 }
 else{
    lilll.style.display="none"; 
 }

},false)
srggggcimg.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    let res=srggggcimg.classList.toggle("true");
 console.log(res);
 if(res){
    lilll.style.display="block"; 
 }
 else{
    lilll.style.display="none"; 
 }

},false)
// let body=document.body();
 
// body.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation();
//     let res=body.classList.toggle("true");
//  console.log(res);
//  if(res){
//     lilll.style.display="block"; 
//  }
//  else{
//     lilll.style.display="none"; 
//  }

    
// },false)
let sopetssssj=document.getElementById("sopetssssj");
console.log(sopetssssj);
let spooooo=document.getElementById("spooooo");
console.log(spooooo);
spooooo.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=spooooo.classList.toggle("true");
    if(res){
        sopetssssj.style.display="block";
    }
    else{
        sopetssssj.style.display="none";
    }

},false)
spooooo.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=spooooo.classList.toggle("true");
    if(res){
        sopetssssj.style.display="block";
    }
    else{
        sopetssssj.style.display="none";
    }

},false)
let womennnnnn=document.getElementById("womennnnnn");
console.log(womennnnnn);
let WOMEN=document.getElementById("WOMEN");
console.log(WOMEN);
womennnnnn.addEventListener("mouseover",(e)=>{
    e.stopPropagation();
    let res=womennnnnn.classList.toggle("true");
    if(res){
        WOMEN.style.display="block"
    }
    else{
        WOMEN.style.display="none"
    }

},false)

womennnnnn.addEventListener("mouseleave",(e)=>{
    e.stopPropagation();
    let res=womennnnnn.classList.toggle("true");
    if(res){
        WOMEN.style.display="block"
    }
    else{
        WOMEN.style.display="none"
    }

},false);
let newarrial=document.getElementById("newarrial");
console.log(newarrial);
let menneww=document.getElementById("menneww");
console.log(menneww);
menneww.addEventListener("mouseover",(e)=>{
    e.stopPropagation();
    let res=menneww.classList.toggle("true");
    if(res){
        newarrial.style.display="block"
    }
    else{
        newarrial.style.display="none"
    }

},false)

menneww.addEventListener("mouseleave",(e)=>{
    e.stopPropagation();
    let res=menneww.classList.toggle("true");
    if(res){
        newarrial.style.display="block"
    }
    else{
        newarrial.style.display="none"
    }

},false);
let imh=document.getElementById("imh");
console.log(imh);
let expressesdelvitory=document.getElementById("expressesdelvitory");
console.log(expressesdelvitory);

imh.addEventListener("click",(e)=>{
    e.stopPropagation();
    let res=imh.classList.toggle("true");
    console.log(res);
    if(res){
        expressesdelvitory.style.display="block";

    }
    else{
        expressesdelvitory.style.display="none";  
    }

},false)