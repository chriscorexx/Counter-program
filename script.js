const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const labelBtn = document.getElementById("myLabel");

 let count = 0;

increaseBtn.onclick = function(){
    count++;
    labelBtn.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    labelBtn.textContent = count;
}

resetBtn.onclick = function(){
    count = 0 ;
    labelBtn.textContent = count;
}