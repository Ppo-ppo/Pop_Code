// let loader=document.querySelector('.rond');
//             let logo=document.querySelector('.logo');
//             setTimeout(remplacertruc, 3000);
//             function remplacertruc(){
//                 loader.style.display="none"
//                 logo.style.display="block"
//             }
let toto ='...'
function typingText(text, speed) {
    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            document.getElementById("typed").innerHTML += text.charAt(i);
            i++;
        } else {
            i=0
            document.getElementById("typed").innerHTML=""
        }
    }, speed);
}
typingText(toto,800)
