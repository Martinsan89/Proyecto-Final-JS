// Reloj
let horas = 0,
  minutos = 0,
  segundos = 0;

// Variable Inputs (div) (para poder usarlos en ambos btns)
const btnInputs = document.querySelector("#btnInputs");
// DOM Btn Calcular (para poder usarlos en ambos btns)
const btnCalcular = document.createElement("div");
const btnReset = document.createElement("div");

// Variable btn Ritmo
const objetivoRitmo = document.querySelector("#btnRitmo");
// Variable btn Tiempo
const objetivoTiempo = document.querySelector("#btnTiempo");

// Proceso Btn Tiempo
objetivoTiempo.onclick = () => {
  btnInputs.innerHTML = "";
  // Remover verde del otro btn
  objetivoRitmo.classList.contains("validarSi") &&
    objetivoRitmo.classList.remove("validarSi");
  // Color Verde
  objetivoTiempo.classList.add("validarSi");
  // DOM Inputs Distancia y Ritmo con Create Element/Class Name/InnerHTML/appendchild
  const distancia = document.createElement(`div`);
  const ritmo = document.createElement(`div`);
  distancia.className = "distancia";
  ritmo.className = "ritmo";
  btnCalcular.className = "btnCalcular";
  // btnReset.className = "btnReset";
  distancia.innerHTML = `<label for= "distancia">Distancia en Km</label><input id="distanciaInput" type="text">`;
  ritmo.innerHTML = `<label for= "ritmo">Ritmo min/km</label> <input id="ritmoInput" type="text"> `;
  btnCalcular.innerHTML = `<input type="submit" value="Calcular">`;
  btnReset.innerHTML = `<button type="button" id="btnReset">Reset</button>`;
  btnInputs.appendChild(distancia);
  btnInputs.appendChild(ritmo);
  btnInputs.appendChild(btnCalcular);
  btnInputs.appendChild(btnReset);

  //Calculadora de los Inputs
  const formCalculadora = document.querySelector("#formCalculadora");
  formCalculadora.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const distanciaValue =
      document.querySelector("#distanciaInput").value * 1000;
    const ritmoValue = document.querySelector("#ritmoInput").value;
    const resultado = Math.ceil((distanciaValue / 1000) * ritmoValue);

    // Resultado de los Inputs a Reloj
    if (resultado >= 60) {
      horas = Math.floor(resultado / 60);
      let restante = horas * 60;
      minutos = resultado - restante;
      segundos = 0;

      // DOM Reloj
      const metas = document.querySelector("#metas");
      metas.innerHTML = `${distanciaValue / 1000}km en ${ritmoValue}min/km`;
      document.querySelector("#horas").value = `${horas}`;
      document.querySelector("#minutos").value = `${minutos}`;
      document.querySelector("#segundos").value = `${segundos}`;

      formCalculadora.reset();
      return resultado;
    }
  });
  const reset = document.querySelector("#btnReset");
  reset.addEventListener("click", (evt) => {
    evt.preventDefault();
    location.reload();
  });
};

// Proceso Btn Ritmo

objetivoRitmo.onclick = () => {
  btnInputs.innerHTML = "";
  // Remover verde del otro btn
  objetivoTiempo.classList.contains("validarSi") &&
    objetivoTiempo.classList.remove("validarSi");
  // Color Verde
  objetivoRitmo.classList.add("validarSi");
  // DOM Inputs Distancia y Ritmo con Create Element/Class Name/InnerHTML/appendchild
  const distancia = document.createElement(`div`);
  const tiempo = document.createElement(`div`);
  distancia.className = "distancia";
  tiempo.className = "tiempo";
  btnCalcular.className = "btnCalcular";
  distancia.innerHTML = `<label for= "distancia">Distancia en Km</label>
  <input id="distanciaInput" type="text">`;
  tiempo.innerHTML = `<label for= "tiempo">Tiempo en hs</label><input id="tiempoInput" type="text"> `;
  btnCalcular.innerHTML = `<input id="calcular" type="submit" value="Calcular">`;
  btnReset.innerHTML = `<button type="button" id="btnReset">Reset</button>`;
  btnInputs.appendChild(distancia);
  btnInputs.appendChild(tiempo);
  btnInputs.appendChild(btnCalcular);
  btnInputs.appendChild(btnReset);

  //Calculadora de los Inputs
  const formCalculadora = document.querySelector("#formCalculadora");
  formCalculadora.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const distanciaValue = document.querySelector("#distanciaInput").value;
    const tiempoValue = document.querySelector("#tiempoInput").value * 60;

    // Resultado de los Inputs a Reloj
    const resultado = tiempoValue / distanciaValue;
    minutos = Math.floor(resultado);
    segundos = Math.round((resultado - minutos) * 60);
    horas = 0;

    // DOM Reloj
    const metas = document.querySelector("#metas");
    metas.innerHTML = `${distanciaValue}km en ${tiempoValue / 60}hs.`;
    document.querySelector("#horas").value = `${horas}`;
    document.querySelector("#minutos").value = `${minutos}`;
    document.querySelector("#segundos").value = `${segundos}`;

    formCalculadora.reset();

    return resultado;
  });
  const reset = document.querySelector("#btnReset");
  reset.addEventListener("click", (evt) => {
    evt.preventDefault();
    location.reload();
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

  // Direccionamiento al html del plan
  let consultaValidar = document.querySelectorAll(".btnObjetivo");
  const arrayValidar = Array.from(consultaValidar);
  const validarNo = arrayValidar.find((item) => item.id == usuarioObj);
  console.log(validarNo);
  validarNo.classList.contains("validarNo")
    ? console.log("falta experiencia")
    : usuarioObj === "10km"
    ? location.assign("./10km.html")
    : usuarioObj === "15km"
    ? location.assign("./planes/15km.html")
    : usuarioObj === "21km"
    ? location.assign("./planes/21km.html")
    : usuarioObj === "30km"
    ? location.assign("./planes/30km.html")
    : usuarioObj === "42km" && location.assign("./planes/42km.html");
}

btnIniciacion.addEventListener("click", objetivo);

//Fetch Zapatillas
// UL
const listaZapatillas = document.querySelector("#listaZapatillas");
// Formulario Zapatillas
const formZapatillas = document.querySelector("#formZapatillas");
// BTN
const btnZapatillas = document.querySelector("#btnZapatillas");
btnZapatillas.addEventListener("click", (evt) => {
  evt.preventDefault();
  listaZapatillas.innerHTML = "";
  // Usuario Heavy o Light
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  let heavy = altura - peso;
  // Mostrar Zapatillas
  const zapatillas = (datos) => {
    datos.forEach((item) => {
      const { marca, modelo, peso, drop, img } = item;
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${marca}</h3>
        <em> ${modelo}</em>
        <p>Peso: ${peso}</p>
        <p>Drop: ${drop}</p>
        <img src="${img}" alt = "${modelo}">
      `;
      listaZapatillas.append(li);
    });
  };

  const pisada = document.querySelectorAll(".cbPisada");
  pisada.forEach((item) => {
    if (item.checked == true) {
      let userPisada = item.name;
      if (userPisada === "pronador" && heavy <= 100) {
        fetch("./zapatillas/pronadorHeavy/pronadorHeavy.json")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((datos) => {
            zapatillas(datos);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (userPisada === "pronador" && heavy > 100) {
        fetch("./zapatillas/pronadorlight/pronadorLight.json")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((datos) => {
            zapatillas(datos);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (userPisada === "neutro" && heavy <= 100) {
        fetch("./zapatillas/neutroHeavy/neutroHeavy.json")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((datos) => {
            zapatillas(datos);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (userPisada === "neutro" && heavy > 100) {
        fetch("./zapatillas/neutrolight/neutroLight.json")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((datos) => {
            zapatillas(datos);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (userPisada === "supinador" && heavy <= 100) {
        fetch("./zapatillas/supinadorHeavy/supinadorHeavy.json")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((datos) => {
            zapatillas(datos);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (userPisada === "supinador" && heavy > 100) {
        fetch("./zapatillas/supinadorlight/supinadorLight.json")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((datos) => {
            zapatillas(datos);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      formZapatillas.reset();
    }
  });
});
