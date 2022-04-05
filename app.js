const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')

const onLoginSubmit = (event) => {
  event.preventDefault()
  console.log(loginInput.value)
}
loginForm.addEventListener('submit', onLoginSubmit)

// const h1 = document.querySelector("div.hello:first-child h1")

// const handleTitleClick = () => {
//     const clickedClass = "clicked"
//     if(h1.className === clickedClass) h1.className = ""
//     else h1.className  = clickedClass
// }

// h1.addEventListener("click", handleTitleClick)

// const handleTitleClick = () => {
//   h1.style.color = "blue"
// }

// const handleMouseEnter = () => {
//   h1.innerText = "Mouse is here!"
// }
// const handleMouseLeave = () => {
//   h1.innerText = "Mouse is gone!"
// }

// const handleWindowResize = () => {
//   document.body.style.backgroundColor = "tomato"
// }

// const handleWindowCopy = (ß) => {
//   alert("copier!")
// }

// const handleWindowOffline = () => {
//   alert("SOS no WIFI")
// }

// const handleWindowOnline = () => {
//   alert("All Goood")
// }

// h1.addEventListener("click", handleTitleClick)
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.addEventListener("mouseleave", handleMouseLeave)

// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline)
