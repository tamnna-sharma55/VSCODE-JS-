let count = 0;
function increment() {
  count++;
  document.getElementById("count").innerText = count;
  document.getElementById("count").style.color = "green";
}

function decrement() {
  count--;
  document.getElementById("count").innerText = count;
   document.getElementById("count").style.color = "red";
}

function reset() {
  count = 0;
  document.getElementById("count").innerText = count;
   document.getElementById("count").style.color="black";
}