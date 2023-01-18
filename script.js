const hamburgerOpenBtn = document.querySelector('.hamburger-container')
const navButtonsPanel = document.querySelector('.nav-buttons-container')
const hamburgerCloseBtn = document.querySelector('.close-hamburger-btn')
hamburgerOpenBtn.addEventListener('click', () => {
    navButtonsPanel.classList.toggle('closed')
})
hamburgerCloseBtn.addEventListener('click', () => {
    navButtonsPanel.classList.toggle('closed')
})
