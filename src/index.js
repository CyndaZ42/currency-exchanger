import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange-api.js';

function getElements(response) {
  if (response.result === "success") {
    console.log(response);
  } else {
    console.log(response);
  }
}

$(document).ready(function() {
  $('#exchange').click(function() {
    Exchange.getCurrency(2,"RUB")
      .then(function(response) {
        getElements(response);
      });
  });
});