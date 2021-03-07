var output = document.getElementById("output")
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "welcome");
input.setAttribute("oninput", "text()")
document.body.appendChild(input);


function text() {
  output.innerHTML = input.value  
}