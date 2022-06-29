  let plusla =document.querySelector('#bobox1')
  let loader=document.querySelector('.box1');
              let acceuil=document.querySelector('.acceuil');
              setTimeout(remplacertruc, 7000);
              function remplacertruc(){
                  plusla.classList.add('box1')
                  acceuil.classList.remove('acceuil')
              }
            
              console.log(acceuil)
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
typingText(toto,800);


