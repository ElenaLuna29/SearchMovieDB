var Search = function(){
  this.inputField;
};

Search.prototype.init = function(){
  this.inputField = this.getInputField();
};

Search.prototype.getInputField = function(){
  return document.getElementById('inputField');
};

Search.prototype.addEventListener = function(){
    this.inputField.addEventListener('input',onInputEventHandler,true);
};

var onInputEventHandler = function(event){
  console.log("ON INPUT ");
};


let search = new Search();
search.init();
search.addEventListener();
// search.init();

// module.exports = search;
