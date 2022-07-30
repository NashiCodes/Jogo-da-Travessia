let telaInicial = document.querySelector("#telaInicial");
let vitoria = document.querySelector("#vitoria");
let derrota = document.querySelector("#derrota");

let Esqr = document.querySelector(".Esqr");
let Rio = document.querySelector(".Rio");
let Dir = document.querySelector(".Dir");

let ovelha = document.querySelector("#ovelha");
let lobo = document.querySelector("#lobo");
let alface = document.querySelector("#alface");

let farmer = document.querySelector("#farmer");
let boat = document.querySelector("#boat");

const botao = document.querySelector(".botao");

vitoria.style.display = "none";
derrota.style.display = "none";

ovelha.style.display = "none";
lobo.style.display = "none";
alface.style.display = "none";

farmer.style.display = "none";
boat.style.display = "none";

botao.addEventListener("click", chamafuncao);

function chamafuncao(e) {
  if (telaInicial.style.display == "") {
    telaInicial.style.display = "none";
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
  leftSide.appendChild(ovelha);
  leftSide.appendChild(lobo);
  leftSide.appendChild(alface);
  ovelha.style.position = "static";
  lobo.style.position = "static";
  alface.style.position = "static";

  vitoria.style.display = "none";
  derrota.style.display = "none";
}
