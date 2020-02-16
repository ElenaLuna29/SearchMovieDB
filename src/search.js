var search = function(){

  console.log("NEW SEARCH");
  let inputField = null;
  let request = null;
  let publicSearchMethods = {};

  var onInputEventHandler = function(event){
    console.log("ON INPUT ", event);
    if(event && event.key === 'Enter'){
      let keyword = inputField.value;
      console.log("SENDING REQUEST ", keyword);
      request = new Request(SEARCH_URL, {'keyword': keyword});
    }
  };

  var addEventListener = function(){
    inputField.addEventListener('keyup', onInputEventHandler,true);
    console.log("addEventListener ", inputField);
  };

  publicSearchMethods.init = function(){
    inputField = document.getElementById('inputField');
    addEventListener();
  };

  return publicSearchMethods;

};
