const formularioEntrada = document.querySelector(".formulario");
formularioEntrada.addEventListener("submit", (e) => {
  const email = document.querySelector("#email").value.toLowerCase();
  const senha = document.querySelector("#senha").value;
  const dados = JSON.parse(localStorage.getItem("dados"));

  if (dados) {
    verificarDados(dados, email, senha);
  } else {
    popUp("Nenhum email cadastrado", ".grid-central");
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
    popUp("Email não encontrado", ".grid-central");
  }
}
function verificarSenha(item, senha) {
  if (senha === item.senha) {
    document.location.href = "home.html";
  } else {
    popUp("Senha incorreta", ".grid-central");
  }
}
const formularioCadastro = document.querySelector(".formulario.cadastro");
formularioCadastro.addEventListener("submit", cadastro);
function cadastro(e) {
  e.preventDefault();
  popUp("Cadastro indisponível", ".grid-central");
}
//Trocar Formulário
const botao = document.querySelectorAll(".cadastroDetalhe");
botao.forEach((item) => {
  item.addEventListener("click", () => {
    formularioEntrada.classList.toggle("displayNonejs");
    formularioCadastro.classList.toggle("displayblockjs");
  });
});
//Pop up
function popUp(mensagem, objetofilho) {
  const aviso = document.querySelector(".aviso").cloneNode(true);
  const titulo = aviso.querySelector(".titulo");
  aviso.classList = "alertaJs slide-in-top";
  titulo.classList = "popupJs";
  titulo.innerText = mensagem;
  document
    .querySelector(objetofilho)
    .parentNode.insertBefore(aviso, document.querySelector(objetofilho));
  setTimeout(() => {
    document
      .querySelector(".alertaJs")
      .classList.replace("slide-in-top", "slide-out-top");
  }, 2000);
  setTimeout(() => {
    document.querySelector(".alertaJs").remove();
  }, 2300);
}
