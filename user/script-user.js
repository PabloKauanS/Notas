const dataUser = JSON.parse(sessionStorage.getItem("user"));
if (dataUser) {
  //Show Name
  function initNameTitle() {
    const htmlHead = document.head.querySelector("title");
    const userName = dataUser.name;
    htmlHead.innerText = assembleName(userName);
    function assembleName(userName) {
      return userName[0].toUpperCase() + userName.substring(1).split(" ")[0];
    }
  }
  initNameTitle();

  //Open Setting
  function initSettingOpen() {
    const settingDom = document.querySelector(".setting");
    const mainDom = document.querySelector(".main");
    settingDom.addEventListener("click", openSetting);
    function openSetting() {
      let settingDomElement = document.querySelector(".setting-user-js");
      if (!settingDomElement) {
        const settingElement = createElement(dataUser);
        settingDom.classList.add("rotate-in-center");
        mainDom.insertAdjacentHTML("afterend", settingElement);
      } else {
        settingDom.classList.remove("rotate-in-center");
        removeElement();
      }
    }
    function removeElement() {
      settingDomElement = document.querySelector(".setting-user-js");
      settingDomElement.classList.replace(
        "slide-in-bottom",
        "slide-out-bottom"
      );
      settingDomElement.addEventListener("animationend", () =>
        settingDomElement.remove()
      );
    }
    function createElement(dataUser) {
      return `<div class='setting-user-js slide-in-bottom'><img src='icons/rafiki.svg'><ul class='listData-js'><li class='listData-item-js'><p class='text-info-js'>Apelido</p><span class='name-js'>${dataUser.name}</span></li><li class='listData-item-js'><p class='text-info-js'>Email</p><span class='email-js'>${dataUser.email}</span></li><li class='listData-item-js'><p class='text-info-js'>Senha</p><span class='pass-js'>Trocar Senha</span></li></ul><button class='button-js'>Sair</button></div>`;
    }
  }
  initSettingOpen();
 
} else {
  document.querySelector(".main").style.display = "none";
  alert("Você não está logado");
}