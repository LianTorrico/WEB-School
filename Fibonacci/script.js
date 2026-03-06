function calcolo(){
    document.getElementById("pRisultato").textContent="Qui verra mostrato il risultato!";
    if (document.getElementById("inpNum").value<3){
        document.getElementById("pRisultato").textContent="Valore invalido! inserire almeno 3";
    }
    else{
    let a=0,b=1,c=0;
    for (let i = 0; i < document.getElementById("inpNum").value ; i++){
        if (i==0){
            document.getElementById("pRisultato").textContent="0";
            i++;
        }
        c=a+b;
        a=b;
        b=c;
        document.getElementById("pRisultato").textContent=document.getElementById("pRisultato").textContent+","+c;
        }         
    }
}