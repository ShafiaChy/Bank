function getInput(input1,input2){
    const inputField = document.getElementById(input1);
    const newInput = inputField.value;
    inputField.value = '';
    const prevInput = document.getElementById(input2);
    const totalInput = parseFloat(prevInput.innerText) + parseFloat(newInput);
    if(totalInput>0){
        prevInput.innerText = totalInput;
    }
    
    return newInput;

}

function totalSum(input1,input2){
    const balanceTotal = document.getElementById(input1);
    const prevBalance = balanceTotal.innerText;
   
        const total = parseFloat(prevBalance) + parseFloat(input2);
        balanceTotal.innerText = total;
   
}



document.getElementById('deposit-btn').addEventListener('click', function (){
  
     const newDeposit = getInput('deposit-input','deposit-amount');
     
     if(newDeposit > 0){
        totalSum('balance-total',newDeposit);
    
     }
   
})

document.getElementById('withdraw-btn').addEventListener('click', function (){
    
    const newWithdraw = getInput('withdraw-input','withdraw-amount');
   
    if(newWithdraw > 0){
     
        totalSum('balance-total',-newWithdraw); 
    }
    
})