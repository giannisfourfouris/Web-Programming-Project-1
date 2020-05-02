
document.getElementById("menu").addEventListener("click", function () {

  if (document.getElementById("menuText1").style.fontSize == '30px') {
    document.getElementById("menuText1").style.fontSize = '70px';
    document.getElementById("menuText2").style.fontSize = '70px';
    document.getElementById("menuText3").style.fontSize = '70px';
  } else {
    document.getElementById("menuText1").style.fontSize = '30px';
    document.getElementById("menuText2").style.fontSize = '30px';
    document.getElementById("menuText3").style.fontSize = '30px';
  }

}, false);

changeColorDate();

function changeColorDate() {
  var d = new Date();
  var n = d.getDay();
  if (n == 1) {
    document.getElementById("item1").style.backgroundColor = 'red';
    document.getElementById("title").style.color = 'black';
  } else if (n == 2) {
    document.getElementById("item1").style.backgroundColor = 'brown';
  } else if (n == 3) {
    document.getElementById("item1").style.backgroundColor = 'orange';
  } else if (n == 4) {
    document.getElementById("item1").style.backgroundColor = 'pink';
    document.getElementById("title").style.color = 'black';
  } else if (n == 5) {
    document.getElementById("item1").style.backgroundColor = 'yellow';
    document.getElementById("title").style.color = 'black';
  } else if (n == 6) {
    document.getElementById("item1").style.backgroundColor = 'green';
  } else if (n == 0) {
    document.getElementById("item1").style.backgroundColor = 'blue';
  }

}


getRandomColor();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var colorChange = '#';
  for (var i = 0; i < 6; i++) {
    colorChange += letters[Math.floor(Math.random() * 16)];
  }
  document.getElementById("copyright").style.color = colorChange;
  setTimeout(getRandomColor, 1000); // Change image every 2.5 se'conds
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1; }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500); // Change image every 2.5 seconds
}

function myFunctionUpper() {
  var y = document.getElementById("Name");
  var z = document.getElementById("Subject");
  y.value = y.value.toUpperCase();
  z.value = z.value.toUpperCase();
}

function myFunctionChangeForm(x) {
  x.style.background = "yellow";
}

function changeFooterTitle() {
  if (document.getElementById("Name").value && document.getElementById("Email").value && document.getElementById("Subject").value && document.getElementById("Message").value) {
    document.getElementById("footerTitle").style.textDecoration = "underline";
    document.getElementById("footerTitle").style.color = 'black';
    document.getElementById("footerTitle").innerHTML = "Thank you for your response. I will answer as soon as possible! :)";
  } else {
    document.getElementById("footerTitle").style.textDecoration = "underline";
    document.getElementById("footerTitle").innerHTML = 'Please fill all the required fields!';
    document.getElementById("footerTitle").style.color = 'red';
  }
}

