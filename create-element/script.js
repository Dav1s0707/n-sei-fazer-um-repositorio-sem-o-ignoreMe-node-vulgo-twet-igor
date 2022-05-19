


function inicia() {
    document.getElementById("btnAdd").addEventListener("click", function () {
        var tweets = document.getElementById("tweets");
        var texto = document.getElementById("texto").value;
        var user = document.getElementById("user").value;
        var li = document.createElement("li");
        var li2 = document.createElement("li2");


        li.textContent = texto;
        li2.textContent = user;
        tweets.appendChild(li);//como adciona uma string antes do valor?
        tweets.appendChild(li2);

    });


}

window.addEventListener("load", inicia);//n sei qq faz

