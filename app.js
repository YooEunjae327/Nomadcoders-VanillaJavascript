const h1 = document.querySelector("div.hello:first-child h1")

const handleTitleClick = () => {
  h1.style.color = "blue"
}

const handleMouseEnter = () => {
  h1.innerText = "Mouse is here!"
}
const handleMouseLeave = () => {
  h1.innerText = "Mouse is gone!"
}

const handleWindowResize = () => {
  document.body.style.backgroundColor = "tomato"
}

const handleWindowCopy = () => {
  alert("copier!")
}

const handleWindowOffline = () => {
  alert("SOS no WIFI")
}

const handleWindowOnline = () => {
  alert("All Goood")
}

h1.addEventListener("click", handleTitleClick)
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)
