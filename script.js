const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');

btnOpen.addEventListener('click', ()=> {
    const cover = document.querySelector('.cover')
    cover.classList.add('open-cover')

    setTimeout(() => {        
        cover.style.zIndex = -1

        const paper = document.querySelector('.paper')
        paper.classList.remove('close-paper')
        paper.classList.add('open-paper')
    }, 2500);
})

btnClose.addEventListener('click', ()=> {    
    const cover = document.querySelector('.cover') 
    const paper = document.querySelector('.paper')
    paper.classList.remove('open-paper')
    paper.classList.add('close-paper')

    setTimeout(() => {        
        cover.style.zIndex = 0
        cover.classList.remove('open-cover')
    }, 500);
})