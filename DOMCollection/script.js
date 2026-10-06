function chiamata(id){
    document.getElementById(id).remove();
}
document.getElementById("pStyle").remove();
document.body.innerHTML +='<div id="CreatoSuJS"></div>';
var p = document.createElement("p");
p.textContent="Creato su JS";
document.getElementById("CreatoSuJS"),appendChild(p);
var img = document.createElement("img");
img.setAttribute('src','https://orientamento.belluzzifioravanti.it/wp-content/uploads/2020/11/orientamento_belluzzi.jpg');
img.setAttribute('alt','Logo belluzzi fioravanti');
document.getElementById("CreatoSuJS").appendChild(img);
//Salto ul & il, table tr,td

var a = document.createElement("a");
a.setAttribute('href','https://belluzzifioravanti.edu.it/');
document.getElementById("CreatoSuJS").appendChild(a);

var form= document.createElement("form");
document.getElementById("CreatoSuJS").appendChild(form);
var input= document.createElement("input");
input.setAttribute('type', 'text');
document.getElementById("form").appendChild(input);

function gestoreclick(){
    alert("Click!");
}

var button = document.createElement("button");
button.setAttribute('onclick','gestoreclick()');
document.getElementById("CreatosuJS").appendChild(button);