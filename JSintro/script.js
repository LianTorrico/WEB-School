function allerta(){
    alert("Questa è la funzione allerta");
}
function bottone(){
    alert("Hai utilizzato un bottone");
}
var stringaNuova="Lorem Ipsidium"

function checkPalindromo(stringaNuova){
let i= 0;
let palindromo=false;

while ( i < stringaNuova.length/2 && palindroma){
    if(stringaNuova[i] !== stringaNuova[stringaNuova.length-i-1]){
        palindroma=false;
    }
}
i++;
}


  document.addEventListener("click", chiamata);
var chiamataupdater=false;
function chiamata(){
    if (chiamataupdater==true){
        document.getElementById("event1").textContent="3";
        chiamataupdater=false;
    }else{
    document.getElementById("event1").textContent="TTT";
    chiamataupdater=true;
    checkPalindromo(stringaNuova);
    }
}