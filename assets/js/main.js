// Variabili
let btnPlay = document.getElementById("btnPlay");
let secNumRan = document.getElementById("secNumRan");
let nums = document.getElementById("nums");
let numRan = 0;
let numRanArray = [];

// Funzioni
function simonFunction(){
    secNumRan.classList.remove("d-none");
    for (i=0; i < 5; i++){
        numRan = Math.floor(Math.random()*99) + 1;
        numRanArray.push(numRan);
        nums.innerHTML += `<div class="col text-white text-center fs-5">${(numRan)}</div>`;
    }  
    return(numRanArray);
}

function simonFunction2 (){
    secNumRan.classList.add("d-none");
}

function simonFunction3 (){
    for (i = 0; i < 5; i++){
    var userNumArray = [];
    var userNum = parseInt(prompt(`Inserisci il ${(i)} numero:`));
    userNumArray.push(userNum);    
    }
    for (i2 = 0; i2 < 5; i2++){
        if (userNumArray[i2] === numRanArray[i2]){
            console.log(userNumArray[i2], numRanArray[i2])
            var chkArray = [];
            chkArray.push(numRanArray[i2]);
            numIndo = 0;
            numIndo++; 
        }else {
            numIndo = 0;
        }
    }
   if (numIndo === 5){
    alert(`Hai indovinato tutti i numeri: ${(chkArray)}`);
   }
   else {
    alert(`Hai indovinato ${(numIndo)} numeri: ${(chkArray)}`);
   }
}

// Eventi
btnPlay.addEventListener("click",
simonFunction, 
setTimeout(simonFunction2, 10000),
setTimeout(simonFunction3, 10050))    


// console.log(numRanArray); 



