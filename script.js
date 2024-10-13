
var timer  = 60;
var score = 0;
//   var hitrn;
// var  hitrn = Math.floor(Math.random()*10)




function increaScore(){

score += 10;

document.querySelector("#scoreval").textContent = score;
}


function makeBubble()
{var clutter = "";


for( let i = 1; i<153;  i++)
   { let hitrnB = Math.floor(Math.random()*10)


   clutter += `<div class="bubble"> ${ hitrnB}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;

    Math.floor(Math.random()*10)
}


function runTimer(){
   timerint=setInterval(function(){
if(timer>0){
timer--;
document.querySelector("#timerval").textContent = timer;
}
else{
  clearInterval(timerint);
  document.querySelector("#pbtm").innerHTML = `<h1> game over</h1>`;
}
   }, 1000);
}



function getnewhit(){
       hitrn =  Math.floor(Math.random()*10)
   document.querySelector('#hitval').textContent = hitrn
}
  document.querySelector("#pbtm")
 .addEventListener("click", function(dets){
  var clickednumber =Number((dets.target.textContent));
 if(clickednumber === hitrn){
 increaScore();
 makeBubble()
 getnewhit()
}
else{ console.log('wrong')}
})


  runTimer();
 makeBubble()
 getnewhit()
//  increaScore()
 