//Form Login
document.querySelector(".formulario-js").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value.toLowerCase();
  const senha = document.querySelector("#senha").value;
  const dados =
    JSON.parse(sessionStorage.getItem("dados")) ||
    popUp("Nenhum email cadastrado", 2000);
  if (dados) {
    const emailCadastrado =
      dados.find((item) => email === item.email) ||
      popUp("Email não cadastrado", 1700);
    if (emailCadastrado) {
      if (senha === emailCadastrado.senha) {
        window.location.href = "home.html";
      } else {
        popUp("Senha incorreta", 1700);
      }
    }
  }
});
//Form Cadastro
function initCadastro() {
  const formCadast = document.querySelector(".formularioCadastro-js");
  const dados = JSON.parse(sessionStorage.getItem("dados")) || [];

  formCadast.addEventListener("submit", (e) => {
    const inputEmail = document.querySelector("#emailCadastro").value;
    const inputNome = document.querySelector("#nomeCadastro").value;
    const inputSenha = document.querySelector("#senhaCadastro").value;
    const inputSenhaConfir = document.querySelector(
      "#senhaConfirmacaoCadastro"
    ).value;
    if (inputSenha === inputSenhaConfir) {
      const usuario = {
        nome: inputNome,
        email: inputEmail,
        senha: inputSenha,
      };
      const verificarDados = dados.find((item) => usuario.email === item.email);
      if (!verificarDados) {
        dados.push(usuario);
        sessionStorage.setItem("dados", JSON.stringify(dados));
      } else {
        e.preventDefault();
        popUp("Email já cadastrado", 1500);
      }
    } else {
      popUp("Senhas não coincidem", 1700);
    }
  });
}
initCadastro();

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
function popUp(mensagem, tempo) {
  const avisoElement = document.querySelector(".alerta-Js");
  if (!avisoElement) {
    const elementoAviso = `<div class='alerta-Js alerta slide-in-top'><h2 class='popup'>${mensagem}!!</h2></div>`;
    const gridCentral = document.querySelector(".gridCentral-js");
    gridCentral.insertAdjacentHTML("beforebegin", elementoAviso);
    setTimeout(() => {
      const elementoDom = document.querySelector(".alerta-Js");
      elementoDom.classList.replace("slide-in-top", "slide-out-top");
      elementoDom.addEventListener("animationend", () => elementoDom.remove());
    }, tempo);
  }
}
//Mostar Senha
document.querySelectorAll(".detalhe-js").forEach((item) => {
  item.addEventListener("click", (e) => mostarSenha(e));
});
function mostarSenha(event) {
  const elemento = event.target;
  const elementoPai = elemento.parentElement.parentElement;
  const inputs = elementoPai.querySelectorAll(
    "#senha, #senhaCadastro,#senhaConfirmacaoCadastro"
  );
  inputs.forEach((item) => {
    if (item.type === "password") {
      item.type = "text";
    } else {
      item.type = "password";
    }
  });
}
