
function calcolo(){
  const numero = document.getElementById("inpNum").value;
  let finale=0;
  let j,k;
  k=1;
  for (let i=1;i<numero;i++){
    j=numero-1;
    k=k*j;
  }
  finale=numero*k;
  document.getElementById("pRisultato").textContent="Risultato: "+finale;
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

  return element;
};