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

farmer.style.display = "none";
boat.style.display = "none";

botao.addEventListener("click", chamafuncao);

function chamafuncao(e) {
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

    return 0;
  }

  reinicia();
}

function reinicia() {
  Esqr.appendChild(ovelha);
  Esqr.appendChild(lobo);
  Esqr.appendChild(alface);
  ovelha.style.position = "static";
  lobo.style.position = "static";
  alface.style.position = "static";

  vitoria.style.display = "none";
  derrota.style.display = "none";
}
