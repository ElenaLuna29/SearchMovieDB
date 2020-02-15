var search = function(){
  var inputField;

  var onInputEventHandler = function(event){
    console.log("ON INPUT ", event);
    if(event && event.key === 'Enter'){
      console.log("make search request");
    }
  };

  var init = function(){
    inputField = getInputField();
    addEventListener();
  };

  var getInputField = function(){
    console.log("getInputField");
    return document.getElementById('inputField');
  };

  var addEventListener = function(){
    inputField.addEventListener('keyup', onInputEventHandler,true);

    console.log("addEventListener ", inputField);
  };

  init();

}();


console.log("NEW SEARCH");

// module.exports = search;
