if (sessionStorage.getItem("user")) {
  const dadosUser = JSON.parse(sessionStorage.getItem("user"));
  document.head.querySelector("title").innerText =
    dadosUser.nome[0].toUpperCase() + dadosUser.nome.substring(1).split(" ")[0];
  abrirConfig();
  function abrirConfig() {
    const configuracao = document.querySelector(".configuracao");
    const domPrincipal = document.querySelector(".principal");
    configuracao.addEventListener("click", () => {
      const configDom = document.querySelector(".config-user-js");
      if (!configDom) {
        const configDomElemnt = `<div class='config-user-js slide-in-bottom'><img src='icons/rafiki.svg'><ul class='lista-dados-js'><li class='lista-dados-items-js'><p class='texto-info-js'>Apelido</p><span class='nome-js'>${dadosUser.nome}</span></li><li class='lista-dados-items-js'><p class='texto-info-js'>Email</p><span class='email-js'>${dadosUser.email}</span></li><li class='lista-dados-items-js'><p class='texto-info-js'>Senha</p><span class='senha-js'>Trocar Senha</span></li></ul><button class='botaoSair-js'>Sair</button></div>`;
        configuracao.classList.add("rotate-in-center");
        domPrincipal.insertAdjacentHTML("afterend", configDomElemnt);
        //apagar depois
        document
          .querySelector(".botaoSair-js")
          .addEventListener("click", () => {
            sessionStorage.clear();
            localStorage.clear();
            window.history.back();
          });
        //
      } else {
        configuracao.classList.remove("rotate-in-center");
        configDom.classList.replace("slide-in-bottom", "slide-out-bottom");
        configDom.addEventListener("animationend", () => configDom.remove());
      }
    });
  }

  adicionarNotas();
  function adicionarNotas() {
    const botaoAdicionar = document.querySelector(".detalheCirculo");
    botaoAdicionar.addEventListener("click", () => {});
  }
} else {
  alert("Você não está logado");
  document.querySelector(".principal").style.display = "none";
}
