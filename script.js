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
//Animação formulario
function formularioEntradaBtn() {
  formularioEntrada.classList.add("slide-out-left");
  setTimeout((i) => {
    formularioEntrada.style.display = "none";
    formularioEntrada.classList.remove("slide-out-left");
    formularioCadastro.style.display = "grid";
    formularioCadastro.classList.add("slide-in-right");
  }, 300);
}
function formularioCadastroBtn() {
  formularioCadastro.classList.add("slide-out-left");
  setTimeout((i) => {
    formularioCadastro.style.display = "none";
    formularioCadastro.classList.remove("slide-out-left");
    formularioEntrada.style.display = "grid";
    formularioEntrada.classList.add("slide-in-right");
  }, 300);
}

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
  const avisoElement = document.querySelector(".alertaJs");
  setTimeout(() => {
    avisoElement.classList.replace("slide-in-top", "slide-out-top");
  }, 2000);
  setTimeout(() => {
    avisoElement.remove();
  }, 2300);
}
