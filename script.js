console.log('hello')

document.querySelector('#MF').classList.add('hidden')
document.querySelector('#MR').classList.add('hidden')
document.querySelector('#PH').classList.add('hidden')

document.querySelector('#MRleft').addEventListener('click', () => {
    document.querySelector('#MR').classList.remove('hidden')
    document.querySelector('#MF').classList.add('hidden')
    document.querySelector('#JD').classList.add('hidden')
    document.querySelector('#PH').classList.add('hidden')
  })

document.querySelector('#MFleft').addEventListener('click', () => {
    document.querySelector('#MF').classList.remove('hidden')
    document.querySelector('#MR').classList.add('hidden')
    document.querySelector('#JD').classList.add('hidden')
    document.querySelector('#PH').classList.add('hidden')
  })

document.querySelector('#PHleft').addEventListener('click', () => {
    document.querySelector('#PH').classList.remove('hidden')
    document.querySelector('#MR').classList.add('hidden')
    document.querySelector('#JD').classList.add('hidden')
    document.querySelector('#MF').classList.add('hidden')
  })

document.querySelector('#JDleft').addEventListener('click', () => {
    document.querySelector('#JD').classList.remove('hidden')
    document.querySelector('#MR').classList.add('hidden')
    document.querySelector('#PH').classList.add('hidden')
    document.querySelector('#MF').classList.add('hidden')
  }) 