getRandomColor();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colorChange = '#';
    for (var i = 0; i < 6; i++) {
        colorChange += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("copyright").style.color = colorChange;
    if (document.getElementById("flex-container")) {
        document.getElementById("flex-container").style.borderColor = colorChange;
    }
    setTimeout(getRandomColor, 1000); // Change image every 2.5 se'conds
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
        document.getElementById("footerTitle").innerHTML = "Σας ευχαριστώ για το μύνημα. Θα απαντήσω οσο το δυνατόν πιο σύντομα! :)";
    } else {
        document.getElementById("footerTitle").style.textDecoration = "underline";
        document.getElementById("footerTitle").innerHTML = 'Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία!';
        document.getElementById("footerTitle").style.color = 'red';
    }
}


function changeImage() {
    var x = document.getElementById("img_me");
    if (x.src.split("/").pop().split(".")[0] == 'img_me') {
        x.src = 'img_me1.jpg';
    } else if (x.src.split("/").pop().split(".")[0] == 'img_me1') {
        x.src = 'img_me2.jpg';
    } else if (x.src.split("/").pop().split(".")[0] == 'img_me2') {
        x.src = 'img_me.jpg';
    }
}
