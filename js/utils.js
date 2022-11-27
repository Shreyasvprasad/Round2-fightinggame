function Collision({ rectangle1, rectangle2}){
    return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
   rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && 
   rectangle1.attackBox.height + rectangle1.attackBox.position.y >= rectangle2.position.y &&
   rectangle1.attackBox.position.y <= rectangle2.position.y+rectangle2.height
    )
}
function determineWinner({player,enemy,timerId})
    {   clearTimeout(timerId)
        document.querySelector('#result').style.display= 'flex'
        if (player.health===enemy.health){
   document.querySelector('#result').innerHTML ='Tie'
   decreasetimer3()
}
if (player.health>enemy.health){
   document.querySelector('#result').innerHTML ='Player 1 Wins'
   decreasetimer3()
}
if (player.health<enemy.health){
   document.querySelector('#result').innerHTML ='Player 2 Wins'
   decreasetimer3()
}
    }
let timer=30
let timerId
function decreasetimer(){
   if(timer>0) {
       timerId=setTimeout(decreasetimer,1000)
       timer--
       document.querySelector('#timer').innerHTML = timer
}
if(timer===0){
determineWinner({player,enemy,timerId})
}
}
let i=0
let timer3=300
let timerId3
function decreasetimer3(){
   if(timer3>0) {
       timerId3=setTimeout(decreasetimer2,1000)
       timer3--
       document.querySelector('#timer').innerHTML =timer3
}
if(timer3===0){
	document.querySelector('#result').style.display= 'flex'
   document.querySelector('#timer').innerHTML ='next'
	document.querySelector('#result').innerHTML ='Loading Round 3'
   setTimeout(function() {
      if(i===0){
      window.open('https://sldassignmentround3.netlify.app/')
      }
      i=1;
   }, 5000)
}
}