var button = document.getElementById("submitdogname");
var input = document.getElementsByClassName('dogform');
var span = document.querySelector("span");

button.addEventListener("click", function () {
	input.textContent = document.getElementById("dogform").value;
	if (input.textContent.length > 0) {
	span.textContent = input.textContent;
}
});