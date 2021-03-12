document.querySelector('#navJDiaz').addEventListener('click', () => {
    document.querySelector('#navJDiaz').classList.add('selected')
    document.querySelector('#navMFleming').classList.remove('selected')
    document.querySelector('#navMRoss').classList.remove('selected')
    document.querySelector('#navPHarper').classList.remove('selected')

    document.querySelector('#pageJDiaz').classList.remove('hidden')
    document.querySelector('#pageMFleming').classList.add('hidden')
    document.querySelector('#pageMRoss').classList.add('hidden')
    document.querySelector('#pagePHarper').classList.add('hidden')

})

document.querySelector('#navMFleming').addEventListener('click', () => {
    document.querySelector('#navJDiaz').classList.remove('selected')
    document.querySelector('#navMFleming').classList.add('selected')
    document.querySelector('#navMRoss').classList.remove('selected')
    document.querySelector('#navPHarper').classList.remove('selected')

    document.querySelector('#pageJDiaz').classList.add('hidden')
    document.querySelector('#pageMFleming').classList.remove('hidden')
    document.querySelector('#pageMRoss').classList.add('hidden')
    document.querySelector('#pagePHarper').classList.add('hidden')

})

document.querySelector('#navMRoss').addEventListener('click', () => {
    document.querySelector('#navJDiaz').classList.remove('selected')
    document.querySelector('#navMFleming').classList.remove('selected')
    document.querySelector('#navMRoss').classList.add('selected')
    document.querySelector('#navPHarper').classList.remove('selected')

    document.querySelector('#pageJDiaz').classList.add('hidden')
    document.querySelector('#pageMFleming').classList.add('hidden')
    document.querySelector('#pageMRoss').classList.remove('hidden')
    document.querySelector('#pagePHarper').classList.add('hidden')

})

document.querySelector('#navPHarper').addEventListener('click', () => {
    document.querySelector('#navJDiaz').classList.remove('selected')
    document.querySelector('#navMFleming').classList.remove('selected')
    document.querySelector('#navMRoss').classList.remove('selected')
    document.querySelector('#navPHarper').classList.add('selected')

    document.querySelector('#pageJDiaz').classList.add('hidden')
    document.querySelector('#pageMFleming').classList.add('hidden')
    document.querySelector('#pageMRoss').classList.add('hidden')
    document.querySelector('#pagePHarper').classList.remove('hidden')

})



