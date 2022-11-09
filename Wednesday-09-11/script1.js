document.getElementById("firstBox-1").onmouseover = function () {
    document.getElementById("firstBox-1").style.backgroundColor = "red";
  }
  document.getElementById("firstBox-1").onmouseout = function () {
    document.getElementById("firstBox-1").style.backgroundColor = "yellow";
  }

var boxTwo = document.getElementById("firstBox-2");
function getRandomColor() {
    var letters = '0123456789';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}
  
function changeColor(){
  boxTwo.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,500);