window.addEventListener("load", function () {
  new Glider(this.document.querySelector(".carousel_lista"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    gap: 30,
    rewind: true,
    dots: ".carousel_indicadores",
    arrows: {
      prev: ".carousel_anterior",
      next: ".carousel_siguiente",
    },
  });
});

const btnPlan = document.querySelector("#btnPlan");
const checkbox = document.querySelectorAll(".checkbox");
const arrCheck = [...checkbox];
btnPlan.addEventListener("click", (evt) => {
  evt.preventDefault();
  arrCheck.forEach((item) => {
    if (item.checked == true) {
      let chequeado = localStorage.getItem("sesion");
      chequeado = chequeado ? chequeado.split(",") : [];

      localStorage.setItem("sesion", chequeado);

      chequeado.push(item.name);
      console.log(chequeado);
      localStorage.setItem("sesion", chequeado.toString());
    }
  });
});
