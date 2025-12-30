document.querySelectorAll(".animate").forEach((el, i)=>{
  el.style.opacity = 0;
  el.style.animation = `fade 1s ease forwards ${i * 0.5}s`;
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fade{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}`;
document.head.appendChild(style);
