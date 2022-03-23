// Marchar los checks guardados en el Local Storage
document.addEventListener("DOMContentLoaded", () => {
  let totalChecks = localStorage.getItem("sesion");
  const mapChecks = totalChecks.split(",").map((item) => {
    return parseInt(item, 10);
  });
  const checked = document.querySelectorAll(".checkbox");
  checked.forEach((item) => {
    let cbname = item.name;

    for (let i in mapChecks) {
      mapChecks[i] == cbname && item.setAttribute("checked", true);
    }
  });
  const progress = document.querySelector("#progress");
  const result = parseFloat(mapChecks.length * 3.5);
  cargar(result);
  function cargar() {
    if (result < 130) {
      progress.style.width = result + "%";
      progress.innerHTML = result + "%";
    }
  }
});
// Carousel
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

// Guardar sesiones en Local Storage
const checkbox = document.querySelectorAll(".checkbox");
const arrCheck = [...checkbox];
const btnGuardar = document.querySelector("#btnGuardar");
btnGuardar.addEventListener("click", (evt) => {
  evt.preventDefault();
  arrCheck.forEach((item) => {
    if (item.checked == true) {
      let sesion = item.name;
      let arrSesion = [];
      if (sesion == "1") {
        arrSesion.push(sesion);
        localStorage.setItem("sesion", arrSesion);
      } else {
        let chequeado = localStorage.getItem("sesion");
        arrSesion.push(chequeado);
        arrSesion.push(sesion);
        // arrSesion.join(", ");
        localStorage.setItem("sesion", arrSesion);
      }
    }
  });
  // Loading Bar
  const progress = document.querySelector("#progress");

  let totalChecks = localStorage.getItem("sesion");
  let mapChecks = totalChecks.split(",").map((item) => {
    return parseInt(item, 10);
  });

  const result = parseFloat(mapChecks.length * 3.5);
  cargar(result);
  function cargar() {
    if (result < 100) {
      progress.style.width = result + "%";
      progress.innerHTML = result + "%";
    }
  }
});

// Reset Sesion
const btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", (evt) => {
  evt.preventDefault();
  localStorage.removeItem("sesion");
  location.reload();
});
