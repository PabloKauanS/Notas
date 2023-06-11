const formularioEntrada = document.querySelector(".formulario");
const formularioCadastro = document.querySelector(".formulario.cadastro");
document.addEventListener("submit", registrado);
function registrado(e) {
  if (e.target === formularioEntrada) {
    e.preventDefault();
    const email = document.querySelector("#email").value.toLowerCase();
    const senha = document.querySelector("#senha").value;
    const dados = JSON.parse(localStorage.getItem("dados"));
    if (dados) {
      verificarDados(dados);
    } else {
      alert("Dados não encontrado");
    }
  } else {
    e.preventDefault();
    alert("Cadastro indisponível");
  }
}
function verificarDados(a) {
  const resultado = dados.find((item) => {
    return email === item.email;
  });
  if (resultado) {
    verificarSenha(resultado, senha);
  } else {
    alert("Senha incorreta");
  }
}
function verificarSenha(item, senha) {
  if (senha === item.senha) {
    document.location.href = "home.html";
  } else {
    alert("Senha incorreta");
  }
}

//Trocar Formulário
const botao = document.querySelectorAll(".cadastroDetalhe");
botao.forEach((item) => {
  item.addEventListener("click", () => {
    formularioEntrada.classList.toggle("displayNone");
    formularioCadastro.classList.toggle("displayblock");
  });
});
