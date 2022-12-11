$(function(){
      $("#includedContent").load("sidebar.html"); 
});



function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}







const cursorTag = document.querySelector("div.cursors")
const balls = cursorTag.querySelectorAll("div")
const ballMessage = cursorTag.querySelector("div span")
const articles = document.querySelectorAll("article[data-hover]")

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
  let currentX = 0
	let currentY = 0

	let speed = 0.3 - index * 0.015
  
  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
  }

  animate()
})


document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})

articles.forEach(article => {
  article.addEventListener("mouseover", function () {
    ballMessage.classList.add("visible")
    ballMessage.innerHTML = article.getAttribute("data-hover")
  })
  
  article.addEventListener("mouseout", function () {
    ballMessage.classList.remove("visible")
  })
})


