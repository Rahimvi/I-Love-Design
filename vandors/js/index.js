/**
 * DaisyJS Demo Script
 * by Waren Gonzaga
 */

// in vanilla javascript

document.addEventListener('DOMContentLoaded', function () {
  daisyjs(document.getElementById('header'), {
    dotColor: '#fff',
    lineColor: '#ddd'
  });
},);

// as jquery plugin

$(document).ready(function() {
  $('header').daisyjs({
    dotColor: '#fff',
    lineColor: '#222'
  });
});
