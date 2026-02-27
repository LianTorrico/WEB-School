  function calcolo(){
      const base1=document.getElementById("base").value;
      const altezza1=document.getElementById("altezza").value;
      var area1=(base1*altezza1);
      area1=area1/2;
      document.getElementById("risultato").textContent=area1;
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