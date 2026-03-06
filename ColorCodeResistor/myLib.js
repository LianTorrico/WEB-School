function calcolo(){
  const colore1 = Number(document.getElementById("sel1").value);
  console.log(colore1);
  const colore2 = Number(document.getElementById("sel2").value);
  const colori = toString(colore1)+toString(colore2);
  let convertcolori=Number(colori);
  const moltiplicatore = Number(document.getElementById("sel3").value);
  let moltiplicatorelavorato=1;
  for (let i=1; i <= moltiplicatore;i++){
    moltiplicatorelavorato=moltiplicatorelavorato*10;
  }
  const percen= Number(document.getElementById("sel4").value);

  let resistenza=convertcolori*moltiplicatorelavorato;
  let percentuale= (resistenza/100)*percen;
  
  document.getElementById("pRisultato").textContent="Resistenza: "+resistenza+" +/-"+percentuale;
}



const $ = (selector) => {
  // 1. recupera elementi per ID
  const element = document.getElementById(selector);

  // 2. metodi
  element.click = function(callback) {
    this.addEventListener('click', callback);
    return this; // Per il chaining
  };

  element.keydown = function(callback) {
    this.addEventListener('keydown', callback);
    return this; // Per il chaining
  };

  element.keyup = function(callback) {
    this.addEventListener('keyup', callback);
    return this; // Per il chaining
  };

  element.change = function(callback) {
    this.addEventListener('change', callback);
    return this; // Per il chaining
  };

  element.load = function(callback) {
    this.addEventListener('load', callback);
    return this; // Per il chaining
  };

  element.hide = function() {
    this.style.display = 'none';
    return this;
  };

  element.isValid = function() {
    const valid = this.checkValidity();
    if (!valid) {
      this.reportValidity();
    }
    return valid;
  };
  
  return element;
};