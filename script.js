document.querySelectorAll(".fade").forEach((el,i)=>{
  el.style.opacity=0;
  el.style.animation=`fadeIn 1s forwards ${i*0.4}s`;
});

const s=document.createElement("style");
s.innerHTML=`
@keyframes fadeIn{
  from{opacity:0;transform:translateY(20px);}
  to{opacity:1;transform:translateY(0);}
}`;
document.head.appendChild(s);

