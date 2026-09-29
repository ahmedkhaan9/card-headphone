function changeinfo() {
    document.getElementById("name").innerHTML = "Muhammad Ahmed Khan";
    document.getElementById("role").innerHTML = "Full Stack Developer 2026";
    document.getElementById("cardtittle").innerHTML = "My Profile Updated";    
}


function changeimage() {
    document.getElementById("profileimg").src = "image/girls.jpg";
}

// mouseover

function hoverImg() {
    document.getElementById("profileimg").style.transform = "scale(1.2)";
}

//  mouseoute

function outImg() {
    document.getElementById("profileimg").style.transform = "scale(1)";
}

function updateName() {
            var newName = document.getElementById("userInput").value;
            if (newName  !== "") {
                document.getElementById("name").innerText = newName;
            }
        }

        function changeColor() {
            document.getElementById("mycard").style.backgroundColor = "#cfa8bf"; 
        }