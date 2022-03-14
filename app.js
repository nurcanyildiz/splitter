const button = document.querySelectorAll('.tip-percent-button');
const costInput = document.querySelector('#cost');

let cost = 0;
let percentage = 0;
let totalPersona = 0;

let tipAmount = 0;
let total = 0;

for(let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(event) {
    let button = event.target;
    percentage = button.getAttribute('data-value');

    console.log(cost * percentage/100);

  });
}

costInput.addEventListener('input', function(event) {
  cost = costInput.value;
})