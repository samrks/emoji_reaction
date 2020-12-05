// 文字循环
let box = document.querySelector(".angry .txt-wrap")
let txt = document.querySelectorAll(".angry .txt")
let start = 0
setInterval(() => {
  if (start === -box.offsetWidth) {
    start = 0
  }
  txt[0].style.left = --start + "px"
  txt[1].style.left = --start + 80 + "px"
}, 13)


// 入场动画
let emoji = document.querySelectorAll(".emoji")
let main = document.querySelector(".main")
let main_bg = document.querySelector(".main_bg")
let circle_line = document.querySelector(".circle_line")
let isReady = false

let globalWidth = document.body.offsetWidth
window.onresize = () => {
  globalWidth = document.body.offsetWidth
}

window.onload = () => {
  if (globalWidth >= 992) {
    setTimeout(() => {
      main.style.animation = "main_in 2.5s 1 forwards"
      main_bg.style.animation = "main_bg_in 1.6s cubic-bezier(.215, .61, .355, 1) 1 forwards"
      for (let i = 0; i < emoji.length; i++) {
        emoji[i].style.animation = `emoji_in 1s cubic-bezier(.215, .61, .355, 1) 1 forwards ${0.3 * i}s`
      }
      setTimeout(() => {
        // circle_line.style.animation = "circle_line 2s ease infinite"
        isReady = true  // 入场完毕
      }, 800)
    }, 1000)
  } else if (globalWidth >= 768) {
    main.style.opacity = "1"
    main_bg.style.opacity = "1"
    main_bg.style.width = "600px"
    main_bg.style.height = "400px"
    for (let i = 0; i < emoji.length; i++) {
      emoji[i].style.opacity = "1"
    }
  } else {
    main.style.opacity = "1"
    main_bg.style.opacity = "1"
    main_bg.style.width = "400px"
    main_bg.style.height = "520px"
    for (let i = 0; i < emoji.length; i++) {
      emoji[i].style.opacity = "1"
    }
  }
}


// emoji 缩放动画
let timer
main.addEventListener("mouseenter", () => {
  clearTimeout(timer)
  if (isReady) {
    timer = setTimeout(() => {
      main.style.backgroundColor = "#fff"
      main.style.width = "100vw"
      main.style.height = "100vh"
      for (let i = 0; i < emoji.length; i++) {emoji[i].style.opacity = "1"}
      emoji[0].style.animation = "fear_big .2s linear 1 forwards"
      emoji[1].style.animation = "heart_big .2s linear 1 forwards"
      emoji[2].style.animation = "cry_big .2s linear 1 forwards"
      emoji[3].style.animation = "cool_big .2s linear 1 forwards"
      emoji[4].style.animation = "angry_big .2s linear 1 forwards"
      emoji[5].style.animation = "wink_big .2s linear 1 forwards"
      
      setTimeout(() => {
        main.style.borderRadius = "0"
      }, 250)
      
      setTimeout(() => {
        main.style.width = "950px"
        main.style.height = "170px"
        main.style.borderRadius = "85px"
        emoji[0].style.animation = "fear_small .5s ease 1 forwards"
        emoji[1].style.animation = "heart_small .5s ease 1 forwards"
        emoji[2].style.animation = "cry_small .5s ease 1 forwards"
        emoji[3].style.animation = "cool_small .5s ease 1 forwards"
        emoji[4].style.animation = "angry_small .5s ease 1 forwards"
        emoji[5].style.animation = "wink_small .5s ease 1 forwards"
      }, 3000)
      
    }, 200)
  }
})
main.addEventListener("mouseleave", () => {
  clearTimeout(timer)
})

