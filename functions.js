console.log("bonjour");

function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }
    key = String.fromCharCode(keynum);

    chat = document.getElementById("chat");
    chat.style.position='relative'; 
    if (key === 'z') {
        chat.style.top = parseFloat(chat.style.top || 0) - 15 + 'px';
    }
    else if (key === 'q') {
        chat.style.left = parseFloat(chat.style.left || 0) - 15 + 'px';
    }
    else if (key === 'd') {
        chat.style.left = parseFloat(chat.style.left || 0) + 15 + 'px';
    }
    else if (key === 's') {
        chat.style.top = parseFloat(chat.style.top || 0) + 15 + 'px';
    }

    if (key === 'b') {
        bomb = document.createElement("img");
        bomb.src = "http://3.bp.blogspot.com/-_ruDpsB2ZzE/Us9hDvzaFmI/AAAAAAAAF5Y/JJn1qee5Rxk/s1600/Bombe.png";
        var body = document.getElementById("body");
        body.appendChild(bomb);
        bomb.style.position = "absolute";
        bomb.style.left = parseFloat(chat.style.left || 0) + 'px';
        bomb.style.top = parseFloat(chat.style.top || 0) + 'px';
        bomb.style.width = "75px";
        
    } 

    const name = getElementByClassName("name");
    function changeColor() {
    name.style.color = "blue";
}
}