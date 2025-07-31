
/* function displayGreetings(){
    alert("bro i need help");
}

function getPromptData(event){
    event.preventDefault();
    const msg= prompt ("Enter your name >:c");
    alert(msg);
    document.getElementById("field1").value = msg;
}

const mybtn = document.getElementById("btnSubmit");
mybtn.addEventListener("click", displayGreetings); 

//store the id
const btnPrompt= document.getElementById("btnInfo");
//attach the id
btnPrompt.addEventListener('click', getPromptData); */

function getMessage(event) {
    event.preventDefault();
    const fNum= parseInt(document.getElementById("txtFirst").value); 
    const sNum= parseInt(document.getElementById("txtSecond").value);
    const sum= fNum + sNum;

    //alert(fNum + "+" + sNum + "=" + sum);
    document.getElementById("result").value=sum;
}

myButton = document.getElementById("btnSmt");
myButton.addEventListener("click",getMessage);