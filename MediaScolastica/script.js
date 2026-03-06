function media(){
    let media=(Number(document.getElementById("inpNum1").value)+Number(document.getElementById("inpNum2").value)+Number(document.getElementById("inpNum3").value))/3;
    if (media < 5){document.getElementById("pRisultato").textContent="Media: "+media+" Lo studente è: BOCCIATO";}
    else if (media == 5){document.getElementById("pRisultato").textContent="Media: "+media+" Lo studente è: RIMANDATO";}
    else {document.getElementById("pRisultato").textContent="Media: "+media+" Lo studente è: PROMOSSO";}
}