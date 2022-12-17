const button = document.querySelector('#button');
const content = document.querySelector('#content');
const HIDDEN_CLASS = 'xs-hide-menu';

button.addEventListener("click", function () {
content.classList.toggle(HIDDEN_CLASS);
 if (content.classList.includes(HIDDEN_CLASS)) {
  button.textContent = ' ☰';
 } else {
  button.textContent = ' X ';
 }


});
const input = document.querySelector('#search');
const HIDDEN_INPUT = 'xs-hide-input';

button.addEventListener("click", function () {
input.classList.toggle(HIDDEN_INPUT)
 if (content.classList.includes(HIDDEN_INPUT)) {
 	button.textContent = ' ☰';
} else {
	button.textContent = ' X ';
}

});