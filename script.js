//Form Login
function initLogin() {
  const formLogin = document.querySelector(".form-js");
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginData = new GetData();
      const dataStorage = JSON.parse(localStorage.getItem("data"));
      if (dataStorage) {
        checkEmail(loginData, dataStorage);
      } else {
        popUp("Nenhum email cadastrado", 1700);
      }
    });
  }
  function GetData() {
    this.email = document.querySelector("#email").value.toLowerCase();
    this.pass = document.querySelector("#pass").value;
  }
  function checkEmail(loginData, dataStorage) {
    const emailSearch = dataStorage.find(
      (item) => item.email === loginData.email
    );
    if (emailSearch) {
      confirmPass(emailSearch, loginData.pass);
    } else {
      popUp("Email não cadastrado", 1500);
    }
  }
  function confirmPass(emailSearch, loginDataPass) {
    if (emailSearch.pass === loginDataPass) {
      sessionStorage.setItem("user", JSON.stringify(emailSearch));
      location.href = "user/home.html";
    } else {
      popUp("Senha incorreta", 1300);
    }
  }
}
initLogin();
//Form Register
function initRegister() {
  const formRegister = document.querySelector(".formRegister-js");
  formRegister.addEventListener("submit", (event) => {
    const inputAll = formRegister.querySelectorAll("input");
    const inputsData = assembleData(inputAll);
    const loginData = JSON.parse(localStorage.getItem("data")) || [];
    if (inputsData.pass === inputsData.passConfirm) {
      checkData(loginData, inputsData, event);
    } else {
      event.preventDefault();
      popUp("Senhas não coincidem", 1500);
    }
  });
  function assembleData(inputAll) {
    const dataRegister = Array.prototype.reduce.call(
      inputAll,
      (acc, item) => {
        const inputName = item.name;
        const inputValue = item.value;
        acc[inputName] = inputValue;
        return acc;
      },
      {}
    );
    return dataRegister;
  }
  function checkData(loginData, inputsData, event) {
    const findData = loginData.find((item) => item.email === inputsData.email);
    if (findData) {
      event.preventDefault();
      return popUp("Email já cadastrado", 1500);
    } else {
      delete inputsData.passConfirm;
      loginData.push(inputsData);
      localStorage.setItem("data", JSON.stringify(loginData));
    }
  }
}
initRegister();
//Switch Form
function switchForm(currentForm, nextForm) {
  const currentFormElement = document.querySelector(currentForm);
  const nextFormElement = document.querySelector(nextForm);
  currentFormElement.classList.add("slide-out-left");
  setTimeout(animatioForm, 400);
  function animatioForm() {
    currentFormElement.classList.remove("slide-out-left");
    currentFormElement.style.display = "none";
    nextFormElement.classList.add("slide-in-right");
    nextFormElement.style.display = "grid";
  }
}
//PopUp
function popUp(messageAlert, timepopUp) {
  let elementAlertDom = document.querySelector(".alert-js");
  if (!elementAlertDom) {
    const elementDom = createElement(messageAlert);
    const grindMain = document.querySelector(".gridMain-js");
    grindMain.insertAdjacentHTML("beforebegin", elementDom);
    setTimeout(removeElement, timepopUp);
  }
  function createElement(messageAlert) {
    return `<div class='alert-js slide-in-top'><h2 class='popup'>${messageAlert}!!</h2></div>`;
  }
  function removeElement() {
    elementAlertDom = document.querySelector(".alert-js");
    elementAlertDom.classList.replace("slide-in-top", "slide-out-top");
    elementAlertDom.addEventListener("animationend", () =>
      elementAlertDom.remove()
    );
  }
}
//Show pass
function initShowPass() {
  const detailsButton = document.querySelectorAll(".detail-js");
  detailsButton.forEach((item) => {
    item.addEventListener("click", (event) => {
      showPass(event);
    });
  });
  function showPass(event) {
    const element = event.target;
    const parentElement = element.parentElement.parentElement;
    const inputsElement = parentElement.querySelectorAll(
      "#pass,#passRegister,#passConfirmRegister"
    );
    inputsElement.forEach((item)=>{
      if(item.type === 'password'){
        item.type = 'text'
      }else{
        item.type = 'password'
      }
    })
  }
}
initShowPass();