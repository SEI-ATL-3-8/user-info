

document.querySelector('#marvin').classList.add('hidden')
document.querySelector('#mariam').classList.add('hidden')
document.querySelector('#patsy').classList.add('hidden')

document.querySelector('#marvinDisappears').addEventListener('click', () => {
    document.querySelector('#marvin').classList.remove('hidden')
    document.querySelector('##mariam').classList.add('hidden')
    document.querySelector('#jerry').classList.add('hidden')
    document.querySelector('#patsy').classList.add('hidden')
  })

document.querySelector('##mariamDisappears').addEventListener('click', () => {
    document.querySelector('#mariam').classList.remove('hidden')
    document.querySelector('#marvin').classList.add('hidden')
    document.querySelector('#jerry').classList.add('hidden')
    document.querySelector('#patsy').classList.add('hidden')
  })

document.querySelector('#patsyDisappears').addEventListener('click', () => {
    document.querySelector('#patsy').classList.remove('hidden')
    document.querySelector('#marvin').classList.add('hidden')
    document.querySelector('#jerry').classList.add('hidden')
    document.querySelector('#mariam').classList.add('hidden')
  })

document.querySelector('#jerryDisappears').addEventListener('click', () => {
    document.querySelector('#jerry').classList.remove('hidden')
    document.querySelector('#mariam').classList.add('hidden')
    document.querySelector('#patsy').classList.add('hidden')
    document.querySelector('#marvin').classList.add('hidden')
  })
