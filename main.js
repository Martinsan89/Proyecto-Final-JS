// Reloj
let horas = 0,
  minutos = 0,
  segundos = 0;

// Variable Inputs (div) (para poder usarlos en ambos btns)
const btnInputs = document.querySelector("#btnInputs");
// DOM Btn Calcular (para poder usarlos en ambos btns)
const btnCalcular = document.createElement("div");

// Proceso Btn Tiempo

// Variable btn Tiempo
const objetivoTiempo = document.querySelector("#btnTiempo");
// Evento del btn TIempo
objetivoTiempo.onclick = () => {
  // Color Verde
  objetivoTiempo.classList.add("validarSi");
  // DOM Inputs Distancia y Ritmo con Create Element/Class Name/InnerHTML/appendchild
  const distancia = document.createElement(`div`);
  const ritmo = document.createElement(`div`);
  distancia.className = "distancia";
  ritmo.className = "ritmo";
  btnCalcular.className = "btnCalcular";
  distancia.innerHTML = `<label for= "distancia">Distancia en Km</label><input id="distanciaInput" type="text">`;
  ritmo.innerHTML = `<label for= "ritmo">Ritmo min/km</label> <input id="ritmoInput" type="text"> `;
  btnCalcular.innerHTML = `<input type="submit" value="Calcular">`;
  btnInputs.appendChild(distancia);
  btnInputs.appendChild(ritmo);
  btnInputs.appendChild(btnCalcular);

  //Calculadora de los Inputs
  const formCalculadora = document.querySelector("#formCalculadora");
  formCalculadora.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const distanciaValue =
      document.querySelector("#distanciaInput").value * 1000;
    const ritmoValue = document.querySelector("#ritmoInput").value;
    const resultado = Math.ceil((distanciaValue / 1000) * ritmoValue);
    formCalculadora.reset();

    // Resultado de los Inputs a Reloj
    if (resultado >= 60) {
      horas = Math.floor(resultado / 60);
      console.log(horas);
      let restante = horas * 60;
      minutos = resultado - restante;
      segundos = 0;

      // DOM Reloj
      const metas = document.querySelector("#metas");
      metas.innerHTML = `${distanciaValue / 1000}km en ${ritmoValue}min/km`;
      document.querySelector("#horas").value = `${horas}`;
      document.querySelector("#minutos").value = `${minutos}`;
      document.querySelector("#segundos").value = `${segundos}`;

      return resultado;
    }
  });
};

// Proceso Btn Ritmo

// Variable btn Ritmo
const objetivoRitmo = document.querySelector("#btnRitmo");
objetivoRitmo.onclick = (evt) => {
  evt.preventDefault();
  // Color Verde
  objetivoRitmo.classList.add("validarSi");
  // DOM Inputs Distancia y Ritmo con Create Element/Class Name/InnerHTML/appendchild
  const distancia = document.createElement(`div`);
  const tiempo = document.createElement(`div`);
  distancia.className = "distancia";
  tiempo.className = "tiempo";
  btnCalcular.className = "btnCalcular";
  distancia.innerHTML = `<label for= "distancia">Distancia en Km</label>
  <input id="distancia" type="text">`;
  tiempo.innerHTML = `<label for= "tiempo">Tiempo en hs</label><input id="tiempo" type="text"> `;
  btnCalcular.innerHTML = `<input id="calcular" type="submit" value="Calcular">`;
  btnInputs.appendChild(distancia);
  btnInputs.appendChild(tiempo);
  btnInputs.appendChild(btnCalcular);

  //Calculadora de los Inputs
  const formCalculadora = document.querySelector("#formCalculadora");
  formCalculadora.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const distanciaValue = document.querySelector(`#distancia`).value;
    const tiempoValue = document.querySelector(`#tiempo`).value * 60;
    formCalculadora.reset();

    // Resultado de los Inputs a Reloj
    const resultado = tiempoValue / distanciaValue;
    console.log(resultado);
    minutos = Math.floor(resultado);
    segundos = Math.round((resultado - minutos) * 60);
    horas = 0;

    // DOM Reloj
    const metas = document.querySelector("#metas");
    metas.innerHTML = `${distanciaValue}km en ${tiempoValue / 60}hs.`;
    document.querySelector("#horas").value = `${horas}`;
    document.querySelector("#minutos").value = `${minutos}`;
    document.querySelector("#segundos").value = `${segundos}`;

    return resultado;
  });
};
// Usuario
class Corredores {
  constructor(nombre, edad, experiencia) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.experiencia = experiencia);
  }
}

const usuario = new Corredores(
  document.querySelector("#nombre").value,
  document.querySelector("#edad").value,
  document.querySelector("#experiencia").value
);

// Formulario Iniciacion
const formIniciacion = document.getElementById("formIniciacion");
formIniciacion.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // DOM Btns Objetivo
  document.querySelector("#btnIniciacion").style.display = "block";
  // Validar experiencia SI
  let btnObjetivo = document.querySelectorAll(".btnObjetivo");
  if (experiencia.value === "si") {
    for (let i = 0; i < btnObjetivo.length; i += 1) {
      btnObjetivo[i].classList.add("validarSi");
    }
    // Validar experiencia NO
  } else {
    if (edad.value <= 30) {
      for (let i = 0; i < 3; i += 1) {
        btnObjetivo[i].classList.add("validarSi");
        btnObjetivo[3].classList.add("validarNo");
        btnObjetivo[4].classList.add("validarNo");
      }
    } else {
      for (let i = 0; i < 2; i += 1) {
        btnObjetivo[i].classList.add("validarSi");
        btnObjetivo[2].classList.add("validarNo");
        btnObjetivo[3].classList.add("validarNo");
        btnObjetivo[4].classList.add("validarNo");
      }
    }
  }
  // Local Storage
  const usuarioDatos = new FormData(formIniciacion);
  localStorage.setItem("nombre", usuarioDatos.get("nombre"));
  localStorage.setItem("edad", usuarioDatos.get("edad"));
  localStorage.setItem("experiencia", usuarioDatos.get("experiencia"));
});
// Eleccion del objetivo a Plan de Entrenamiento
const btnIniciacion = document.querySelector("#btnIniciacion");
function objetivo(evt) {
  evt.preventDefault();
  const usuarioObj = evt.target.id;
  // Local Storage
  localStorage.setItem("objetivo", usuarioObj);
  console.log(usuarioObj);

  // Intento para que validarNO devuelva un "falta experiencia"
  let consultaValidar = document.querySelectorAll(".btnObjetivo");
  const arrayValidar = Array.from(consultaValidar);
  const validarNo = arrayValidar.filter((node) => {
    if (node.classList[1] === "validarNo") {
      return true;
    }
    return false;
  });
  console.log(validarNo);
  if (usuarioObj == validarNo) {
    console.log("falta experiencia");
  } else {
    window.location.href = "./10km.html";
  }
}

btnIniciacion.addEventListener("click", objetivo);

// incorporar un array
