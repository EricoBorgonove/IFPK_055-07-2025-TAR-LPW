import { estados } from '../../json/brasil.js';
import { paises } from '../../json/mundo.js';

function verEstados() {
  const selectNaci = document.getElementById("select-naci");
  const selectNatu = document.getElementById("select-natu");
  const labelNatu = document.getElementById("label-natu");

  // limpa antes de preencher
  selectNatu.innerHTML = "";

  if (selectNaci.value === 'BR') {
    selectNatu.hidden = false;
    labelNatu.hidden = false;

    // adiciona uma linha vazia no select antes de carregar os estados
    let option = document.createElement("option");
    option.textContent = "";
    option.value = "";
    selectNatu.appendChild(option);

    estados.forEach((estado) => {
      let option = document.createElement("option");
      option.textContent = estado.nome;
      option.value = estado.sigla;
      selectNatu.appendChild(option);
    });
  } else {
    selectNatu.hidden = true;
    labelNatu.hidden = true
  }
}

function verPaises(){
  const selectNaci = document.getElementById("select-naci")

  selectNaci.innerHTML = "";

  // adiciona uma linha vazia no select antes de carregar os estados
  let option = document.createElement("option");
  option.textContent = "";
  option.value = "";
  selectNaci.appendChild(option);

  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.textContent = pais.nome;
    option.value = pais.sigla;
    selectNaci.appendChild(option);
  });

}

function abrirOutros() {
  const outros = document.getElementById("outros");
  const generos = document.getElementsByName("genero");

  if (generos[2].checked) {
    outros.disabled = false;
    outros.placeholder = "Digite o seu gênero";
  } else {
    outros.disabled = true;
    outros.value = "";
    outros.placeholder = "";
  }
}

function togglePass() {
  const senha1 = document.getElementById("senha1");
  const senha2 = document.getElementById("senha2");
  const btnVer = document.getElementById("btnVer");

  if (senha1.type === "password" || senha2.type === "password") {
    senha1.type = "text";
    senha2.type = "text";
    btnVer.innerHTML = "Desver";
  } else {
    senha1.type = "password";
    senha2.type = "password";
    btnVer.innerHTML = "Ver";
  }
}

function checkPassword() {
  const senha1 = document.getElementById("senha1");
  const senha2 = document.getElementById("senha2");
  const errorPass = document.getElementById("errorPass");

  if (senha2.value !== "") {
    if (senha1.value !== senha2.value) {
      errorPass.innerHTML = "As senhas não conferem.";
      errorPass.classList.remove("success");
      errorPass.classList.add("error");
      senha1.classList.add("errorInput");
      senha2.classList.add("errorInput");
    } else {
      errorPass.innerHTML = "As senhas coincidem.";
      senha1.classList.remove("errorInput");
      senha2.classList.remove("errorInput");
      errorPass.classList.remove("error");
      errorPass.classList.add("success");
    }
  } else {
    errorPass.innerHTML = "";
  }
}
function validarCep(){
  const cep = (document.getElementById("cep").value).trim();

  if (cep.length != 8 || isNaN(cep)) {
    alert("O Cep Digitado está incorreto");
    document.getElementById("cep").classList.add("errorInput")
  }else{
    document.getElementById("cep").classList.remove("errorInput")
    viaCep(cep);
  }
}

function viaCep(cepValido){
  fetch(`https://viacep.com.br/ws/${cepValido}/json/`)
  .then(response => response.json())
  .then(response => {
    document.getElementById("logradouro").value = response.logradouro 
    document.getElementById("bairro").value = response.bairro
    document.getElementById("cidade").value = response.localidade
    document.getElementById("estado").value = response.estado 
  })
}

// Eventos
verPaises()
document.getElementById("select-naci").addEventListener("change", verEstados);
document.getElementById("btn-search").addEventListener("click", validarCep);
document.getElementById("btnVer").addEventListener("click", togglePass);
document.querySelectorAll('input[name="genero"]').forEach(radio => {
  radio.addEventListener("change", abrirOutros);
});
document.getElementById("senha1").addEventListener("input", checkPassword);
document.getElementById("senha2").addEventListener("input", checkPassword);
