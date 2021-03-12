// document.querySelector('#jerry').addEventListener('click', () => {
//   document.querySelector('#jerry').classList.add('active')
//   document.querySelector('#melvin').classList.remove('active')
//   document.querySelector('#patsy').classList.remove('active')
//   document.querySelector('#miriam').classList.remove('active')

//   document.querySelector('#jerry-info').classList.remove('hidden')
//   document.querySelector('#melvin-info').classList.add('hidden')
//   document.querySelector('#patsy-info').classList.add('hidden')
//   document.querySelector('#miriam-info').classList.add('hidden')
// })

// then you could repeat the above for each user-link


const allUserLinks = document.querySelectorAll('.user-link')

for (let i = 0; i < allUserLinks.length; i++) {
  allUserLinks[i].addEventListener('click', (event) => {
    for (let j = 0; j < allUserLinks.length; j++) {
      allUserLinks[j].classList.remove('active')
    }

    event.target.classList.add('active')

    const allUserInfos = document.querySelectorAll('.user-info')
    
    for (let j = 0; j < allUserInfos.length; j++) {
      allUserInfos[j].classList.add('hide')
    }

    const targetId = '#' + event.target.getAttribute('id') + '-info'

    document.querySelector(targetId).classList.remove('hide')
  })
}



