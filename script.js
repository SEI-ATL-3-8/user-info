document.querySelector('#pJerry').addEventListener('click', () => {
    document.querySelector('#pJerry').classList.add('selected')
    document.querySelector('#pMelvin').classList.remove('selected')
    document.querySelector('#pMiriam').classList.remove('selected')
    document.querySelector('#pPatsy').classList.remove('selected')

    document.querySelector('#iJerry').classList.remove('hidden')
    document.querySelector('#iMelvin').classList.add('hidden')
    document.querySelector('#iMiriam').classList.add('hidden')
    document.querySelector('#iPatsy').classList.add('hidden')

})

document.querySelector('#pMelvin').addEventListener('click', () => {
    document.querySelector('#pJerry').classList.remove('selected')
    document.querySelector('#pMelvin').classList.add('selected')
    document.querySelector('#pMiriam').classList.remove('selected')
    document.querySelector('#pPatsy').classList.remove('selected')

    document.querySelector('#iJerry').classList.add('hidden')
    document.querySelector('#iMelvin').classList.remove('hidden')
    document.querySelector('#iMiriam').classList.add('hidden')
    document.querySelector('#iPatsy').classList.add('hidden')

})

document.querySelector('#pMiriam').addEventListener('click', () => {
    document.querySelector('#pJerry').classList.remove('selected')
    document.querySelector('#pMelvin').classList.remove('selected')
    document.querySelector('#pMiriam').classList.add('selected')
    document.querySelector('#pPatsy').classList.remove('selected')

    document.querySelector('#iJerry').classList.add('hidden')
    document.querySelector('#iMelvin').classList.add('hidden')
    document.querySelector('#iMiriam').classList.remove('hidden')
    document.querySelector('#iPatsy').classList.add('hidden')

})

document.querySelector('#pPatsy').addEventListener('click', () => {
    document.querySelector('#pJerry').classList.remove('selected')
    document.querySelector('#pMelvin').classList.remove('selected')
    document.querySelector('#pMiriam').classList.remove('selected')
    document.querySelector('#pPatsy').classList.add('selected')

    document.querySelector('#iJerry').classList.add('hidden')
    document.querySelector('#iMelvin').classList.add('hidden')
    document.querySelector('#iMiriam').classList.add('hidden')
    document.querySelector('#iPatsy').classList.remove('hidden')

})