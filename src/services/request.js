class Request{
  constructor(relativeUrl,args){
    this.relativeUrl = relativeUrl;
    this.args = args;
    this.xhr;
    this.url = null;
  }

  makeRequest(relativeUrl,args){
    this.xhr = new XMLHttpRequest();
    this.buildUrl(relativeUrl,args);
  }

  buildUrl(relativeUrl,argsObj){
    let argsString = "";
    for (let [key, value] of Object.entries(argsObj)) {
      let arg = key + "=" + value;
      console.log("arg ", arg);
      argsString += arg;
    }
    this.url = BASE_URL + relativeUrl + "?" + argsString;
    console.log("THIS URL ", this.url);
  }

  processResult(){

  }
}

var request = new Request();

exports = request.makeRequest;
