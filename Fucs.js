var btn = document.querySelector('btn');
var currency = document.querySelector('input[name=genderS]:checked').value
var amountInput = document.getElementById('amount');
function callApi(currency) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://free.currconv.com/api/v7/convert?q=' + currency + '_VND&compact=ultra&apiKey=78230d6afb1ce19439ff');
  xhr.onload = function() {
      if (xhr.status === 200) {
          updateResults(JSON.parse(xhr.responseText));
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}

function updateResults(response) {
  console.log(response);
}

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = VND;
  var result = 0;

  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * crrncy[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / crrncy[to][from]);
  }

  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result;
}

btn.addEventListener('click', convertCurrency);
