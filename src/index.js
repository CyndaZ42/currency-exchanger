import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange-api.js';

function getExchange(response, amount) {
  if (response.result === "success") {
    $('#output').text(`Your ${amount}.00 USD has been exchaned for ${response.conversion_result} ${response.target_code}`);
    $('#error').text("");
  } else {
    $('#error').text(`error: ${response}`);
  }
}

function getRate(response) {
  if (response.result === "success") {
    $('#output').text(`1 USD is equal to ${response.conversion_result} ${response.target_code}`);
    $('#error').text("");
  } else {
    $('#error').text(`error: ${response}`);
  }
}

$(document).ready(function() {
  $('#exchange').click(function(event) {
    event.preventDefault();
    let country = $('#country').val();
    let amount = parseInt($('#amount').val());
    if (!isNaN(amount) && country != "Exchange to"){
      Exchange.getCurrency(amount,country)
        .then(function(response) {
          getExchange(response, amount);
        });
    } else {
      $('#error').text("Please select an ammount to exchange and a currency");
    }
  });
  $('#rate').click(function(event) {
    event.preventDefault();
    let country = $('#country').val();
    if (country != "Exchange to"){
      Exchange.getCurrency(1,country)
        .then(function(response) {
          getRate(response);
        });
    } else {
      $('#error').text("Please select a currency");
    }
  });
  const selectCountry = document.querySelector('#country');
  selectCountry.addEventListener('change', (event) => {
    const countryLabel = document.querySelector('#countryLabel');
    countryLabel.textContent = `${event.target.value}`;
  });
});