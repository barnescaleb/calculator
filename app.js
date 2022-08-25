let previousAction = null,
    previousAnswer = null



const allClear = () => {
    let history = document.getElementById('history'),
    input = document.getElementById('input')

    history.textContent = ''
    input.textContent = ''
    previousAction = 'clear'
}

let buttons = Array.from(document.querySelectorAll('.buttons>button'))
buttons.forEach(button => {
    if (button.id == 'delete') {
        button.addEventListener('click', () => {
            let history = document.getElementById('history')
            history.textContent = history.textContent.slice(0, -1);

            if (previousAction == 'equals') {
            
            }
        })
    }
})
