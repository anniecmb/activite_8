document.querySelector('#button').addEventListener('click', logMessage);

function logDebug(){
    logMessage()
}
  
function logMessage() {
    console.log(m);
    var m = 'Message';
    console.warn(m);
    var m = 'Attention!';
    console.error(m);
    var m = 'ERREUR';