//VARIABLES
let data = {
    operand1: undefined,
    operation1: undefined,
    operand2: undefined
};
let stage=undefined;

const history = document.querySelector(".historySpan");
const answer = document.querySelector(".answerSpan");

const bAc = document.querySelector("#bAc");
const bBs = document.querySelector("#bBs");
const bD = document.querySelector("#bD");
const bM = document.querySelector("#bM");
const bS = document.querySelector("#bS");
const bA = document.querySelector("#bA");
const bE = document.querySelector("#bE");

const boper = document.querySelectorAll("#boper");
    
//BUTTONS
boper.forEach((button) => {
     button.addEventListener("click",()=>{
        answer.innerText = answer.innerText + button.innerText;
    });
});

//CLEAR
bAc.addEventListener("click", ()=>{
    answer.innerText=""; 
    history.innerText="";
});

//BACKSPACE
bBs.addEventListener("click", ()=>{
    answer.innerText = answer.innerText.slice(0,-1); 
});

