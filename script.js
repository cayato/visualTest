let gameAreaWidth = window.innerWidth
let gameAreaHeigth = window.innerHeight
let shuc = document.querySelector(".shuc")
let scoreTag = document.querySelector(".score")
let bugCounter = 0


function randomNum(max,min){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function color(color){
  document.body.style.backgroundColor = color
}
shuc.addEventListener("click",function(){
  shuc.style.opacity = "0";
  color("yellow")
  bugCounter+=1
  scoreTag.innerHTML = "Score: "+bugCounter
  shuc.style.top = randomNum(80,10)+"%"
  shuc.style.left = randomNum(80,10)+"%"
  shuc.style.opacity = "1"
  setTimeout(()=>{
    color("white")

  },200);
})
