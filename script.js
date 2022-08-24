

const history = document.querySelector(".historySpan");
const answer = document.querySelector(".answerSpan");

const bAc = document.querySelector("#bAc");
const bBs = document.querySelector("#bBs");

const boperations = document.querySelectorAll("button[target='operationButton']")
const boper = document.querySelectorAll("#boper");
const bequal = document.querySelector("#bE");

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
    data.operand1 = undefined; 
    data.operand2 = undefined; 
    data.operation = undefined; 
    data.stage=0;
});

//BACKSPACE
bBs.addEventListener("click", ()=>{
    answer.innerText = answer.innerText.slice(0,-1); 
});

//LOGIC

//VARIABLES
let data = {
    operand1: 32,
    operation: '',
    operand2: 31,
    stage: 0
};
let oper = undefined;

function operate(){
    switch(data.operation){
        case '+':   data.operand1 += data.operand2;
                    break;
        case '-':   data.operand1 -= data.operand2;
                    break;
        case '*':   data.operand1 *= data.operand2;
                    break;
        case '/':   data.operand1 /= data.operand2;
                    break;
    };
    data.operand2 = undefined;
}


//OPERATION
boperations.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(answer.innerText != ""){
            oper = button.innerText;
            if(data.stage === 0){
                data.stage = 1;
                data.operand1 = parseInt(answer.innerText);
                answer.innerText = "";
                history.innerText = `${data.operand1} ${oper} `;  
            }
            else if(data.stage === 1 || data.stage === 2){
                data.stage = 2; 
                data.operand2 = parseInt(answer.innerText);
                answer.innerText = "";
                operate();
                history.innerText = `${data.operand1} ${oper} `;        
            }
            data.operation = oper;
        }
        else{
            oper = button.innerText;
            data.operation = oper;
            history.innerText = `${data.operand1} ${oper} `;  
        }
    })
})

bequal.addEventListener("click",()=>{
        if(data.stage === 1 || data.stage === 2){
            data.operand2 = parseInt(answer.innerText);
            operate();
            answer.innerText = `${data.operand1}`;
            history.innerText = "";  
        }
        else if(data.stage === 0){
            if(answer.innerText != "")
                data.operand1 = parseInt(answer.innerText);
            answer.innerText = `${data.operand1}`;
            history.innerText = "";        
        }

    data.operand1 = undefined; 
    data.operand2 = undefined; 
    data.operation = undefined; 
    data.stage=0;
})