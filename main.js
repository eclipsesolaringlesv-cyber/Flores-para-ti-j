onload = () =>{
    document.body.classList.remove("container");
};
setTimeout(() => {
  const boton = document.querySelector(".btn-pdf");
  if (boton) {
    boton.style.opacity = 1;
    boton.style.transform = "translateX(-50%) translateY(0)";
  }
}, 28000);
