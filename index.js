var counterElement = document.getElementById('counterText');

var decrementBtn = document.getElementById('decrementItem');
var incrementBtn = document.getElementById('incrementItem');
var resetBtn = document.getElementById('clearStuff');

var counter = counterElement.innerText;

function incrementItem() {
   

  counter++;
  console.log(counter);
  counterElement.innerText = counter;
}

function decrementItem() {
    if(counter<=0){
        console.log('Error:cannot go below 0');
     texterror.innerHTML = "<span style='color:red;'>Error : Cannot go below 0</span>"
}
   else{
  counter--;
}
  console.log(counter);
  counterElement.innerText = counter;
}

function clearStuff() {
  counter = 0;
  if(counter=0){
    clearStuff.innerText= None;
  }
  console.log(counter);
  counterElement.innerText = counter;
}

incrementBtn.onclick = incrementItem;
decrementBtn.onclick = decrementItem
resetBtn.onclick = clearStuff;
