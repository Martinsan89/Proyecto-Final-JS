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
    // formCalculadora.reset();

    // Resultado de los Inputs a Reloj
    if (resultado >= 60) {
      horas = Math.floor(resultado / 60);
      console.log(horas);
      let restante = horas * 60;
      minutos = resultado - restante;
      segundos = 0;

      // DOM Reloj
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
objetivoRitmo.onclick = () => {
  // Color Verde
  objetivoRitmo.classList.add("valivalidarSi");
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
    // formCalculadora.reset();

    // Resultado de los Inputs a Reloj
    const resultado = tiempoValue / distanciaValue;
    console.log(resultado);
    minutos = Math.floor(resultado);
    segundos = Math.round((resultado - minutos) * 60);
    horas = 0;

    // DOM Reloj
    document.querySelector("#horas").value = `${horas}`;
    document.querySelector("#minutos").value = `${minutos}`;
    document.querySelector("#segundos").value = `${segundos}`;

    return resultado;
  });
};
// Usuario
class Corredores {
  constructor(nombre, edad, experiencia, altura, peso, objetivo, meta) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.experiencia = experiencia),
      (this.altura = altura),
      (this.peso = peso),
      (this.objetivo = objetivo),
      (this.meta = meta);
  }
}

const usuario = new Corredores(
  document.querySelector("#nombre").value,
  document.querySelector("#edad").value,
  document.querySelector("#experiencia").value,
  document.querySelector("#altura").value,
  document.querySelector("#peso").value
);

// Formulario Iniciacion
const formIniciacion = document.getElementById("formIniciacion");
formIniciacion.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // DOM Btns Objetivo
  document.querySelector("#btnIniciacion").style.display = "block";
  // Validar experiencia SI
  const btnObjetivo = document.querySelectorAll(".btnObjetivo");
  if (experiencia.value === "si") {
    for (let i = 0; i < btnObjetivo.length; i += 1) {
      btnObjetivo[i].classList.add("validarSi");
    }
    // Validar experiencia NO
  } else {
    if (edad.value <= 30) {
      for (let i = 0; i < 3; i++) {
        btnObjetivo[i].classList.add("validarSi");
        btnObjetivo[3].classList.add("validarNo");
        btnObjetivo[4].classList.add("validarNo");
      }
    } else {
      for (let i = 0; i < 2; i++) {
        btnObjetivo[i].classList.add("validarSi");
        btnObjetivo[2].classList.add("validarNo");
        btnObjetivo[3].classList.add("validarNo");
        btnObjetivo[4].classList.add("validarNo");
      }
    }
  }
});
// Eleccion del objetivo a Plan de Entrenamiento
const btnIniciacion = document.querySelector("#btnIniciacion");
const objetivo = (evt) => {
  evt.preventDefault();
  console.log(evt.target);
};
btnIniciacion.addEventListener("click", objetivo);
console.log(btnIniciacion);

// const distancias = [
//   { km: 10, semana: 8 },
//   { km: 15, semana: 12 },
//   { km: 21, semana: 16 },
//   { km: 30, semana: 20 },
//   { km: 42, semana: 24 },
// ];

// const plan = parseInt(
//   prompt("Elige un plan de entrenamiento de 10, 15, 21, 30 o 42 kilomentos")
// );

// const planElegido = distancias.find((item) => item.km === plan);

// document.write(
//   `Tu plan de entrenamiento es ${planElegido.km} km - ${planElegido.semana} semanas<br>`
// );

// if (plan === 10) {
//   document.write(`Comienza tu entrenamiento!`);
// } else {
//   const planMetas = distancias.filter((item) => item.km < plan);
//   document.write(`Tus objetivos a cumplir son:<br>`);
//   for (const item of planMetas) {
//     document.write(`-  ${item.km} km - ${item.semana} semanas<br>`);
//   }

//   const acumular = (acumulador, item) => acumulador + item.km;
//   const objetivoKm = planMetas.reduce(acumular, 0);

//   document.write(
//     `El total de km antes de cumplir tu plan es de ${objetivoKm} km. <br>`
//   );
// }
