var icon = document.getElementById("icons");
var card = document.getElementById("card");
var send = document.getElementById("sends");

icon.addEventListener("click", function () {
    var input = document.getElementById("app");
    var output = input.value;

  

    var div1=document.createElement("div");
    div1.classList.add("color");
    div1.innerHTML=output;

    var send = document.getElementById("sends");
    send.appendChild(div1);


})