const toggleButton = document.getElementsByClassName('togglebutton')[0]
const navbarLinks = document.getElementsByClassName('navbarlinks')[0]

toggleButton.addEventListener('click', function handleClick() {
    navbarLinks.classList.toggle('active')
    console.log("clicked")
})
