import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange-api.js';

function getElements(response, amount) {
  if (response.result === "success") {
    console.log(response);
    $('#output').text(`Your ${amount} USD has been exchaned for ${response.conversion_result} ${response.target_code}`);
  } else {
    $('#output').text(`error: ${response}`);
  }
}

$(document).ready(function() {
  $('#exchange').click(function(event) {
    event.preventDefault();
    let country = $('#country').val();
    let amount = parseInt($('#amount').val());
    if (!isNaN(amount) && country != "Exchange for"){
      Exchange.getCurrency(amount,country)
        .then(function(response) {
          getElements(response, amount);
        });
    } else {
      $('#output').text("Please select an ammount to exchange and a currency");
    }
  });
  $('#rate').click(function(event) {
    event.preventDefault();
  });
  const selectCountry = document.querySelector('#country');
  selectCountry.addEventListener('change', (event) => {
    const countryLabel = document.querySelector('#countryLabel');
    countryLabel.textContent = `${event.target.value}`;
  });
});