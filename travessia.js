let telaInicial = document.querySelector("#telaInicial");
let vitoria = document.querySelector("#vitoria");
let derrota = document.querySelector("#derrota");

let Esqr = document.querySelector(".Esqr");
let Rio = document.querySelector(".Rio");
let Dir = document.querySelector(".Dir");

let ovelha = document.createElement("img");
let lobo = document.createElement("img");
let alface = document.createElement("img");

let farmer = document.querySelector("#farmer");
let boat = document.querySelector("#boat");

const botao = document.querySelector(".botao");
let i = 0;
ovelha.id = "ovelha";
ovelha.className = "animal";
ovelha.src = "./imgs/ovelha.png";

lobo.id = "lobo";
lobo.className = "animal";
lobo.src = "./imgs/lobo.png";

alface.id = "alface";
alface.className = "animal";
alface.src = "./imgs/lettuce.png";

vitoria.style.display = "none";
derrota.style.display = "none";

Rio.style.justifyContent = "flex-start";
farmer.style.display = "none";
boat.style.display = "none";

botao.addEventListener("click", formata);

ovelha.addEventListener("click", mover);
lobo.addEventListener("click", mover);
alface.addEventListener("click", mover);

farmer.addEventListener("click", travessia);
boat.addEventListener("click", travessia);

function formata(e) {
  if (telaInicial.style.display == "") {
    telaInicial.style.display = "none";
    Esqr.appendChild(ovelha);
    Esqr.appendChild(lobo);
    Esqr.appendChild(alface);
    ovelha.style.display = "";
    lobo.style.display = "";
    alface.style.display = "";
    farmer.style.display = "";
    boat.style.display = "";
  } else reinicia();
}

function removeElementos() {
  ovelha.style.display = "none";
  lobo.style.display = "none";
  alface.style.display = "none";
  farmer.style.display = "none";
  boat.style.display = "none";
}

function reinicia() {
  Esqr.appendChild(ovelha);
  Esqr.appendChild(lobo);
  Esqr.appendChild(alface);
  ovelha.style.position = "static";
  lobo.style.position = "static";
  alface.style.position = "static";
  Rio.style.justifyContent = "flex-start";
  vitoria.style.display = "none";
  derrota.style.display = "none";
}

function mover() {
  if (Rio.style.justifyContent == "flex-start") {
    if (i == 0) {
      Esqr.removeChild(this);
      Rio.appendChild(this);
      organizaBarco(this);
      i++;
    } else {
      Rio.removeChild(this);
      Esqr.appendChild(this);
      organizaMargem(this);
      i--;
    }
  } else {
    if (i == 0) {
      Dir.removeChild(this);
      Rio.appendChild(this);
      organizaBarco(this);
      i++;
    } else {
      Rio.removeChild(this);
      Dir.appendChild(this);
      organizaMargem(this);
      i--;
    }
  }
}

function organizaBarco(objeto) {
  objeto.style.position = "relative";
  objeto.style.paddingLeft = "150px";
  objeto.style.paddingBottom = "90px";
}
function organizaMargem(objeto) {
  objeto.style.position = "static";
  objeto.style.paddingLeft = "0px";
  objeto.style.paddingBottom = "0px";
}

function travessia() {
  if (Rio.style.justifyContent == "flex-start") {
    Rio.style.justifyContent = "flex-end";
    farmer.style.paddingRight = "180px";
  } else Rio.style.justifyContent = "flex-start";

  confere();
}

function confere() {
  confereDireta();
  confereEsquerda();
}

function confereDireta() {
  if (
    Dir.querySelector("#ovelha") != null &&
    Dir.querySelector("#lobo") != null &&
    Dir.querySelector("#alface") == null
  ) {
    derrota.style.display = "block";
    removeElementos();
  } else if (
    Dir.querySelector("#alface") != null &&
    Dir.querySelector("#ovelha") != null &&
    Dir.querySelector("#lobo") == null
  ) {
    derrota.style.display = "block";
    removeElementos();
  }
}

function confereEsquerda() {
  if (
    Esqr.querySelector("#ovelha") != null &&
    Esqr.querySelector("#lobo") != null &&
    Esqr.querySelector("#alface") == null
  ) {
    derrota.style.display = "block";
    removeElementos();
  } else if (
    Esqr.querySelector("#ovelha") != null &&
    Esqr.querySelector("#alface") != null &&
    Esqr.querySelector("#lobo") == null
  ) {
    derrota.style.display = "block";
    removeElementos();
  }
}
