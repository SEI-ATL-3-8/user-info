document.querySelector('#jerry-link').addEventListener('click', () => {
    document.querySelector('#jerry-link').classList.remove('hidden')
    document.querySelector('#melvin-link').classList.remove('notHidden')
    document.querySelector('#patsy-link').classList.add('hidden')
    document.querySelector('#miriam-link').classList.add('hidden')
})

document.querySelector('#patsy-link').addEventListener('click', () => {
    document.querySelector('#patsy-link').classList.remove('hidden')
    document.querySelector('#melvin-link').classList.remove('notHidden')
    document.querySelector('#jerry-link').classList.add('hidden')
    document.querySelector('#miriam-link').classList.add('hidden')
})

document.querySelector('#miriam-link').addEventListener('click', () => {
    document.querySelector('#miriam-link').classList.remove('hidden')
    document.querySelector('#melvin-link').classList.remove('notHidden')
    document.querySelector('#patsy-link').classList.add('hidden')
    document.querySelector('#jerry-link').classList.add('hidden')
})

document.querySelector('#melvin-link').addEventListener('click', () => {
    document.querySelector('#melvin-link').classList.add('notHidden')
    document.querySelector('#miriam-link').classList.remove('hidden')
    document.querySelector('#patsy-link').classList.add('hidden')
    document.querySelector('#jerry-link').classList.add('hidden')
})