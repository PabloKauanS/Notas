//Form Login
document.querySelector(".formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value.toLowerCase();
  const senha = document.querySelector("#senha").value;
  const dados =
    JSON.parse(localStorage.getItem("dados")) ||
    popUp("Nenhum email cadastrado");
  if (dados) {
    const emailCadastrado =
      dados.find((item) => email === item.email) ||
      popUp("Email não cadastrado");
    if (emailCadastrado) {
      if (senha === emailCadastrado.senha) {
        window.location.href = "home.html";
      } else {
        popUp("Senha incorreta");
      }
    }
  }
});

//Form Cadastro
document
  .querySelector(".formulario.cadastro")
  .addEventListener("submit", cadastro);
function cadastro(e) {
  e.preventDefault();
  popUp("Cadastro indisponível");
}
//Animação formulario
function trocarForm(primeiroForm, proximoForm) {
  const atual = document.querySelector(primeiroForm);
  const proximo = document.querySelector(proximoForm);
  atual.classList.add("slide-out-left");
  setTimeout(() => {
    atual.classList.remove("slide-out-left");
    atual.style.display = "none";
    proximo.classList.add("slide-in-right");
    proximo.style.display = "grid";
  }, 300);
}
//popUp
function popUp(mensagem) {
  const avisoElement = document.querySelector(".alertaJs");
  if (!avisoElement) {
    const elementoAviso = `<div class='alertaJs slide-in-top'><h2 class='popupJs'>${mensagem}!!</h2></div>`;
    const gridCentral = document.querySelector(".grid-central");
    gridCentral.insertAdjacentHTML("beforebegin", elementoAviso);
    setTimeout(() => {
      const elementoNoDom = document.querySelector(".alertaJs");
      elementoNoDom.classList.replace("slide-in-top", "slide-out-top");
      elementoNoDom.addEventListener("animationend", () =>
        elementoNoDom.remove()
      );
    }, 2000);
  }
}
