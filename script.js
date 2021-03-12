// handling selection of user
document.querySelector('#user1').addEventListener('click', () => {
    document.querySelector('#user1').classList.add('selected')
    document.querySelector('#user2').classList.remove('selected')
    document.querySelector('#user3').classList.remove('selected')
    document.querySelector('#user4').classList.remove('selected')
})

document.querySelector('#user2').addEventListener('click', () => {
    document.querySelector('#user2').classList.add('selected')
    document.querySelector('#user1').classList.remove('selected')
    document.querySelector('#user3').classList.remove('selected')
    document.querySelector('#user4').classList.remove('selected')
})

document.querySelector('#user3').addEventListener('click', () => {
    document.querySelector('#user3').classList.add('selected')
    document.querySelector('#user1').classList.remove('selected')
    document.querySelector('#user2').classList.remove('selected')
    document.querySelector('#user4').classList.remove('selected')
})

document.querySelector('#user4').addEventListener('click', () => {
    document.querySelector('#user4').classList.add('selected')
    document.querySelector('#user1').classList.remove('selected')
    document.querySelector('#user2').classList.remove('selected')
    document.querySelector('#user3').classList.remove('selected')
})


// handling the hiding of user pane
document.querySelector('#user1').addEventListener('click', () => {
    document.querySelector('#user-pane-1').classList.remove('hidden')
    document.querySelector('#user-pane-2').classList.add('hidden')
    document.querySelector('#user-pane-3').classList.add('hidden')
    document.querySelector('#user-pane-4').classList.add('hidden')
})

document.querySelector('#user2').addEventListener('click', () => {
    document.querySelector('#user-pane-2').classList.remove('hidden')
    document.querySelector('#user-pane-1').classList.add('hidden')
    document.querySelector('#user-pane-3').classList.add('hidden')
    document.querySelector('#user-pane-4').classList.add('hidden')
})

document.querySelector('#user3').addEventListener('click', () => {
    document.querySelector('#user-pane-3').classList.remove('hidden')
    document.querySelector('#user-pane-2').classList.add('hidden')
    document.querySelector('#user-pane-1').classList.add('hidden')
    document.querySelector('#user-pane-4').classList.add('hidden')
})

document.querySelector('#user4').addEventListener('click', () => {
    document.querySelector('#user-pane-4').classList.remove('hidden')
    document.querySelector('#user-pane-2').classList.add('hidden')
    document.querySelector('#user-pane-3').classList.add('hidden')
    document.querySelector('#user-pane-1').classList.add('hidden')
})
