const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;
const usoJSONPorque = JSON.parse(jsonInfo);
const corporationList = document.querySelector( '#corporations-used-by'); 
const advantagesList = document.querySelector( '#advantages');
const languagesList = document.querySelector('#languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = empresa;
  corporationList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = vantagens;
  advantagesList.appendChild(newLi);
})

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = linguagens;
  languagesList.appendChild(newLi);
});
