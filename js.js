  let plusla =document.querySelector('#bobox1')
  let loader=document.querySelector('.box1');
  let acceuil=document.querySelector('.acceuil');
  var modal=document.querySelector('.modal');
  var score=0;
  let reponce=['JavaScript','Html','css','Sql','Python','Java','Bash','PowerShell','C#','Php','C++','TypeScript','C','Ruby','Go','Assembly','Swift','Kotlin','R','Vba','Objective-C','Scala','Rust','Dart','Elixir','Clojure','WebAssembly'];
  var pagejeu= document.querySelector('.pagejeu');
  var afterGame= document.querySelector('.afterGame');
  var result=document.querySelector('.result');
  var relaunch = document.querySelector('.relaunch');
  var input='';
  var countFound=document.querySelector('#score');
  var error=0;
  var checkCountRotate=0;
  let errorClass=['error1','error2','error3'];
  var langageTrouves = document.querySelector('.petiteboite');
  var modal2=document.querySelector('.modal2');
  var modalContent2= document.querySelector('.modalContent2');
  var resultatTrouves=[];
  var modal3=document.querySelector('.modal3');
  
  zoom({
    active: "zoom-active", // Class added to container when it is zoomed
    transition: "zoom-transition", // Class added to images when they are being animated, class is removed after animation is finished
    visible: "visible", // Class added to images after they are loaded,
    zoom: "zoom" // Image container class
  }, {
    scaleDefault: 2, // Used on doubleclick, doubletap and resize
    scaleDifference: 0.5, // Used on wheel zoom
    scaleMax: 10, // Maximum zoom
    scaleMin: 1, // Minimum zoom
    scrollDisable: true, // Disable page scrolling when zooming an image
    transitionDuration: 200, // This should correspond with zoom-transition transition duration
    doubleclickDelay: 300 // // Delay between clicks - used when scripts decides if user performed doubleclick or not
  }, (function ($container, zoomed) {
 // Callback, gets triggered whenever active class is added/removed from container, value of zoomed is true or false
  }));

setTimeout(remplacertruc, 4000);
    function remplacertruc(){
        plusla.classList.add('box1')
        acceuil.classList.remove('acceuil')
    } 
         // ca c'est pour mes trois point du loader
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
document.querySelector('#commencon').addEventListener('click',function(){
    acceuil.classList.add('none')
    pagejeu.classList.remove('none')
})
function check() {
    for (let index = 0; index < resultatTrouves.length; index++) {
        if (input.toLowerCase()=== resultatTrouves[index].toLowerCase()) {
            return true
        }
    } 
    return false 
}
window.addEventListener('keydown', function(event){
if(pagejeu.classList.contains('none')){
    return;
}
    checkCountRotate = 0;
    event.stopPropagation()
    modal.classList.remove('none')
    document.querySelector(".text").focus();
if (document.querySelector('.text').value !== ''){
    if (event.code === 'Enter') {
        input=document.querySelector('.text').value;
        document.querySelector('.modal').classList.toggle('none')
        document.querySelector('.text').value = ""
        for (let i = 0; i < reponce.length; i++) {
           if (check() === true) {
               modal3.classList.toggle('none')
               break
           }
            if (input.toLowerCase() === reponce[i].toLowerCase()) {
                score++ 
                if(score===reponce.length){
                    result.textContent='You Win!';
                    pagejeu.classList.add('none');
                    afterGame.classList.remove('none');
                }
                countFound.textContent = score
                    resultatTrouves.push(reponce[i])
                    modalContent2.innerHTML+= '<p>'+reponce[i]+'</p>'
                return;
            } 
            checkCountRotate++;
        }
        if (checkCountRotate===reponce.length) {
            switch (error) {
                case 0:
                    document.querySelector('.text').value = "";
                    error++;
                    document.querySelector('.error1').classList.add('lightBlue');
                    break;
                case 1:
                    document.querySelector('.text').value="";
                    error++;
                    document.querySelector('.error2').classList.add('lightBlue');
                    break;
                case 2:
                    document.querySelector('.text').value="";
                    error++;
                    document.querySelector('.error3').classList.add('lightBlue');
                    result.textContent='You Lose!';
                    pagejeu.classList.add('none');
                    afterGame.classList.remove('none');
                    break;
            }
        }
        
    }}
})
  relaunch.addEventListener('click', function(){
      score =0;
      countFound.textContent = score;
      afterGame.classList.add('none');
      acceuil.classList.remove('none');
      error=0;
      for (let index = 0; index < errorClass.length; index++) {
            document.querySelector('.'+errorClass[index]).classList.remove('lightBlue');  
      }
  })
document.querySelector('.modal_content').addEventListener('click',function(event){
    event.stopPropagation()
    document.querySelector('.modal').classList.toggle('none')
})
langageTrouves.addEventListener('click',function(){
    modal2.classList.toggle('none');
})
modal2.addEventListener('click',function(){
    modal2.classList.toggle('none');
})

modal3.addEventListener('click',function(){
    modal3.classList.toggle('none');
})
pagejeu.addEventListener('wheel',function(){
    document.querySelector('.fill').style.height= 100 - document.querySelector('.media').dataset.scale*10+'%';
})





