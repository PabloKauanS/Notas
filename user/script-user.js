if (sessionStorage.getItem("user")) {
  const dadosUser = JSON.parse(sessionStorage.getItem("user"));
  const nome = dadosUser.nome;
  const email = dadosUser.email;
  const senha = dadosUser.senha;
  const notas = dadosUser.notas;
  document.head.querySelector("title").innerText =
    nome[0].toUpperCase() + nome.substring(1).split(" ")[0];

  function abrirConfig() {
    const configuracao = document.querySelector(".configuracao");
    configuracao.addEventListener("click", () => {
      const configDom = document.querySelector(".config-user-js");
      if (!configDom) {
        configuracao.classList.add("rotate-in-center");
        const configDomElemnt = `<div class='config-user-js slide-in-bottom'><img src='icons/rafiki.svg'><ul class='lista-dados-js'><li class='lista-dados-items-js'><p class='texto-info-js'>Apelido</p><span class='nome-js'>${nome}</span></li><li class='lista-dados-items-js'><p class='texto-info-js'>Email</p><span class='email-js'>${email}</span></li><li class='lista-dados-items-js'><p class='texto-info-js'>Senha</p><span class='senha-js'>Trocar Senha</span></li></ul><button class='botaoSair-js'>Sair</button></div>`;
        document
          .querySelector(".principal")
          .insertAdjacentHTML("afterend", configDomElemnt);
        //apagar depois
        document
          .querySelector(".botaoSair-js")
          .addEventListener("click", () => {
            sessionStorage.clear();
            localStorage.clear();
            window.history.back();
          });
      } else {
        configuracao.classList.remove("rotate-in-center");
        configDom.classList.replace("slide-in-bottom", "slide-out-bottom");
        configDom.addEventListener("animationend", () => configDom.remove());
      }
    });
  }
  abrirConfig();
} else {
  alert("Você não está logado");
  document.querySelector(".principal").style.display = "none";
}
