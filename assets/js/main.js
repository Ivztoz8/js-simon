// Variabili
let btnPlay = document.getElementById("btnPlay");
let secNumRan = document.getElementById("secNumRan");
let nums = document.getElementById("nums");
let numRan = 0;
var numRanArray = [];
var userNumArray = []; 
var chkArray = [];
var numIndo = 0; 

// Funzioni
function gen5RandNum(){
    secNumRan.classList.remove("d-none");
    for (i=0; i < 5; i++){
        numRan = Math.floor(Math.random()*100);
        numRanArray.push(numRan);
        nums.innerHTML += `<div class="col text-white text-center fs-5">${(numRan)}</div>`;
    }  
    return numRanArray;
}

function hideNums (){
    secNumRan.classList.add("d-none");
}

function inputUserNums (){
    for (i = 0; i < 5; i++){
        let userNum = parseInt(prompt(`Inserisci in sequenza i 5 numeri che hai visto:`));
        userNumArray.push(userNum);    
    }
    return userNumArray;
}

function checkArrays(){
    for (j = 0; j < 5; j++){
        if (numRanArray.includes(userNumArray[j])){
            chkArray.push(numRanArray[j]);
            numIndo++; 
        }
    }
    return numIndo;
}
function checknumIndo () {
    if (numIndo === 5){
        alert(`Hai indovinato tutti i numeri: ${(chkArray)}`);
       }
       else {
        alert(`Hai indovinato ${(numIndo)} numeri: ${(chkArray)}`);
       }    
}

// Eventi
btnPlay.addEventListener("click",
gen5RandNum, 
setTimeout(hideNums, 10000),
setTimeout(inputUserNums, 10000),
setTimeout(checkArrays, 11000),
setTimeout(checknumIndo, 11050),
)    

