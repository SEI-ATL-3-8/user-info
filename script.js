
const allSections = document.querySelectorAll('section')
console.log(allSections);


document.querySelector('#jerry-link').addEventListener('click', () => {
    document.querySelector('#jerry-link').classList.add('nav-icon.selected')
    document.querySelector('#melvin-link').classList.remove('nav-icon.selected')
    document.querySelector('#miriam-link').classList.remove('nav-icon.selected')
    document.querySelector('#patsy-link').classList.remove('nav-icon.selected')
})

document.querySelector('#melvin-link').addEventListener('click', () => {
    document.querySelector('#melvin-link').classList.add('selected')
    document.querySelector('#jerry-link').classList.remove('selected')
    document.querySelector('#miriam-link').classList.remove('selected')
    document.querySelector('#patsy-link').classList.remove('selected')
})

document.querySelector('#miriam-link').addEventListener('click', () => {
    document.querySelector('#miriam-link').classList.add('selected')
    document.querySelector('#melvin-link').classList.remove('selected')
    document.querySelector('#jerry-link').classList.remove('selected')
    document.querySelector('#patsy-link').classList.remove('selected')
})

document.querySelector('#patsy-link').addEventListener('click', () => {
    document.querySelector('#patsy-link').classList.add('selected')
    document.querySelector('#melvin-link').classList.remove('selected')
    document.querySelector('#miriam-link').classList.remove('selected')
    document.querySelector('#jerry-link').classList.remove('selected')
})


document.querySelector('#jerry-link').addEventListener('click', () => {
    document.querySelector('#jerry-content').classList.remove('hidden')
    document.querySelector('#melvin-content').classList.add('hidden')
    document.querySelector('#miriam-content').classList.add('hidden')
    document.querySelector('#patsy-content').classList.add('hidden')
})

document.querySelector('#melvin-link').addEventListener('click', () => {
    document.querySelector('#melvin-content').classList.remove('hidden')
    document.querySelector('#jerry-content').classList.add('hidden')
    document.querySelector('#miriam-content').classList.add('hidden')
    document.querySelector('#patsy-content').classList.add('hidden')
})

document.querySelector('#miriam-link').addEventListener('click', () => {
    document.querySelector('#miriam-content').classList.remove('hidden')
    document.querySelector('#melvin-content').classList.add('hidden')
    document.querySelector('#jerry-content').classList.add('hidden')
    document.querySelector('#patsy-content').classList.add('hidden')
})

document.querySelector('#patsy-content').addEventListener('click', () => {
    document.querySelector('#patsy-content').classList.remove('hidden')
    document.querySelector('#melvin-content').classList.add('hidden')
    document.querySelector('#miriam-content').classList.add('hidden')
    document.querySelector('#jerry-content').classList.add('hidden')
})