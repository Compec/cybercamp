const hamburgerOpenBtn = document.querySelector('.hamburger-container')
const navButtonsPanel = document.querySelector('.nav-buttons-container')
const hamburgerCloseBtn = document.querySelector('.close-hamburger-btn')
hamburgerOpenBtn.addEventListener('click', () => {
    navButtonsPanel.classList.toggle('closed')
})
hamburgerCloseBtn.addEventListener('click', () => {
    navButtonsPanel.classList.toggle('closed')
})

document.body.addEventListener('click', (event) => {

    const cardsList=event.target.parentElement.parentElement.children;
        for(card of cardsList){
            if(card.lastElementChild.classList.contains("answer-open") && card.lastElementChild!=event.target.parentElement.lastElementChild){
                card.lastElementChild.classList.toggle("answer-open")
            }
            if (event.target.parentElement.classList.contains('faq-card')) {
                event.target.parentElement.lastElementChild.classList.toggle("answer-open")
            }
        }
    
    
});