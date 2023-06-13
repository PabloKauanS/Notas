const formularioEntrada = document.querySelector(".formulario");
formularioEntrada.addEventListener("submit", (e) => {
  const email = document.querySelector("#email").value.toLowerCase();
  const senha = document.querySelector("#senha").value;
  const dados = JSON.parse(localStorage.getItem("dados"));

  if (dados) {
    verificarDados(dados, email, senha);
  } else {
    popUp("Nenhum email cadastrado");
  }

  e.preventDefault();
});
function verificarDados(dados, email, senha) {
  const resultado = dados.find((item) => {
    return email === item.email;
  });
  if (resultado) {
    verificarSenha(resultado, senha);
  } else {
    popUp("Email não encontrado");
  }
}
function verificarSenha(item, senha) {
  if (senha === item.senha) {
    document.location.href = "home.html";
  } else {
    popUp("Senha incorreta");
  }
}
const formularioCadastro = document.querySelector(".formulario.cadastro");
formularioCadastro.addEventListener("submit", cadastro);
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
    }, 1000);
  }
}
