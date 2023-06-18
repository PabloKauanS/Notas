if (sessionStorage.getItem("user")) {
  const dadosUser = JSON.parse(sessionStorage.getItem("user"));
  const nome = dadosUser.nome;
  const email = dadosUser.email;
  const senha = dadosUser.senha;
  const notas = dadosUser.notas;
  document.head.querySelector("title").innerText =
    nome[0].toUpperCase() + nome.substring(1).split(" ")[0];

  document.querySelector(".configuracao").addEventListener("click", () => {
    localStorage.clear();
    window.history.back()
  });
} else {
  alert("Você não está logado");
  document.querySelector(".principal").style.display = "none";
}
