const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas() {
  return select.options[select.selectedIndex].value;
}

function getData(value) {
  const valueDate = value + 'T03:00:00.000Z';
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}

function criarLista() {
  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    let novaLi = document.createElement('li');
    novaLi.innerText = 'Reserva para o dia ' + getData(checkin.value) + ' até o dia ' + getData(checkout.value) + ' Quarto ' + getQuarto() + ' - Para '+ getPessoas() + ' Pessoas - Obs: ' + textArea.value
    ol.appendChild(novaLi);
  });
}
criarLista();

function clear() {
  btnClear.addEventListener('click', function () {
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild)
    }
  });
}
clear();