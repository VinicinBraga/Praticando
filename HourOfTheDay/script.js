carregar = () => {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let hora = new Date().getHours();
  let min = new Date().getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;
  if (hora >= 5 && hora < 12) {
    img.src = "/images/bomDia.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    img.src = "/images/boaTarde.jpg";
    document.body.style.background = "#39768B";
  } else {
    img.src = "/images/boaNoite.jpg";
    document.body.style.background = "#112025";
  }
};
