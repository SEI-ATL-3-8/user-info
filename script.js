
  
  // handling the hiding of sections
  document.querySelector('#Jerry').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.remove('hidden')
    document.querySelector('.MelvinBox').classList.add('hidden')
    document.querySelector('.MiriamBox').classList.add('hidden')
    document.querySelector('.PatsyBox').classList.add('hidden')
  })
  
  document.querySelector('#Melvin').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.add('hidden')
    document.querySelector('.MelvinBox').classList.remove('hidden')
    document.querySelector('.MiriamBox').classList.add('hidden')
    document.querySelector('.PatsyBox').classList.add('hidden')
  })
  
  document.querySelector('#Miriam').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.add('hidden')
    document.querySelector('.MelvinBox').classList.add('hidden')
    document.querySelector('.MiriamBox').classList.remove('hidden')
    document.querySelector('.PatsyBox').classList.add('hidden')
  })
  document.querySelector('#Patsy').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.add('hidden')
    document.querySelector('.MelvinBox').classList.add('hidden')
    document.querySelector('.MiriamBox').classList.add('hidden')
    document.querySelector('.PatsyBox').classList.remove('hidden')
  })