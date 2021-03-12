import {users} from './users.js'

window.onload = () => {
    const firstUser = document.querySelector('.userDiv')
    console.log(firstUser)
    buildDetails(firstUser)
}

function buildUsers() {
    const userList = document.querySelector('.userList');

    for(let user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');
        userList.appendChild(userDiv);
    
        let userImg = document.createElement('img');
        userImg.classList.add('userImg')
        userImg.setAttribute('src', user.picture.large)
        userDiv.appendChild(userImg)
        
        const fullName = user.name.first + ' ' + user.name.last
        let userName = document.createElement('h4')
        userName.classList.add('userName')
        userName.innerHTML = fullName
        userDiv.appendChild(userName)
    }
}
buildUsers()

const allUsers = document.querySelectorAll('.userDiv')

let userIndex = 0
for(let user of allUsers) {
    user.setAttribute('id', userIndex)
    userIndex++

    user.addEventListener('click', () => {
        window.scroll(0, 0)
        clearSelected()
        user.classList.add('selected')
        console.log(user)
        buildDetails(user)
    })
}

function buildDetails(user) {
    clearDetails()

    const userDetails = document.querySelector('.userDetails')
    const userIndex = user.getAttribute('id')

    const userImg = document.createElement('img')
    userImg.classList.add('detailImg')
    userImg.setAttribute('src', users[userIndex].picture.large)
    userDetails.appendChild(userImg)

    const userName = document.createElement('h2')
    const fullName = users[userIndex].name.first + ' ' + users[userIndex].name.last
    userName.innerHTML = fullName
    userDetails.appendChild(userName)

    const userLoc = document.createElement('p')
    const fullLoc = users[userIndex].location.city + ', ' + users[userIndex].location.country
    userLoc.innerHTML = fullLoc
    userDetails.appendChild(userLoc)

    const userPhone = document.createElement('p')
    userPhone.innerHTML = users[userIndex].phone
    userDetails.appendChild(userPhone)

    const userEmail = document.createElement('p')
    userEmail.innerHTML = users[userIndex].email
    userDetails.appendChild(userEmail)

}

function clearSelected() {
    for(let user of allUsers) {
        user.classList.remove('selected')
    }
}

function clearDetails() {
    const userDetails = document.querySelector('.userDetails')
    while(userDetails.firstChild) {
        userDetails.removeChild(userDetails.firstChild)
    }
}

