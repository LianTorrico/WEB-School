function calcolatrice() {
    let risultato=0;
    let num1a = parseFloat(document.getElementById("num1").value);
    let num2a = parseFloat(document.getElementById("num2").value);
    let tipoOperazione = document.getElementById("tipooperazione").value;
    if (tipoOperazione.toLowerCase() === "somma") {
        risultato = num1a+num2a;
    }
    else if (tipoOperazione.toLowerCase() === "sottrazione") {
        risultato = num1a-num2a;
    }
        else if (tipoOperazione.toLowerCase() === "moltiplicazione") {
        risultato = num1a*num2a;
    }
        else if (tipoOperazione.toLowerCase() === "divisione") {
        risultato = num1a / num2a;

    }
    document.getElementById("pRisultato").textContent = "Il risultato è: " + risultato;
}

function testo() {
    if (document.getElementById("testuale").hidden === false) {
        document.getElementById("testuale").hidden = true;
    }
    else{
        document.getElementById("testuale").hidden = false;
    }
}
function collegamenti() {
        if (document.getElementById("collegamenti").hidden === false) {
        document.getElementById("collegamenti").hidden = true;
    }
    else{
        document.getElementById("collegamenti").hidden = false;
    }
}
function calcolo() {
    if (document.getElementById("calcolatrice").hidden === false) {
        document.getElementById("calcolatrice").hidden = true;
    }
    else{
        document.getElementById("calcolatrice").hidden = false;
    }
}