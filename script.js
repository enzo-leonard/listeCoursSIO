const btns = document.querySelectorAll('.more-btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const more = document.querySelector(`#more-${btn.id}`)
        console.log(btn.id)

        more.classList.toggle('hidden')
    })
    
});