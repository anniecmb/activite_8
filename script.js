document.querySelector('#button').addEventListener('click', logMessage);

function logDebug(){
    logMessage()
}
  
function logMessage() {
    var m = 'Message';
    console.log(m);
    m = 'Attention!';
    console.warn(m);
    m = 'ERREUR';
    console.error(m);
}