
  
  // handling the hiding of sections
  document.querySelector('#Jerry').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.remove('hidden')
    document.querySelector('.MelvinBox').classList.add('hidden')
    document.querySelector('.MiriamBox').classList.add('hidden')
    document.querySelector('.PatsyBox').classList.add('hidden')
    document.querySelector('.JerryUserBox').classList.add("highlight")
    document.querySelector('.MelvinUserBox').classList.remove('highlight')
    document.querySelector('.MiriamUserBox').classList.remove('highlight')
    document.querySelector('.PatsyUserBox').classList.remove('highlight')
  })
  
  document.querySelector('#Melvin').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.add('hidden')
    document.querySelector('.MelvinBox').classList.remove('hidden')
    document.querySelector('.MiriamBox').classList.add('hidden')
    document.querySelector('.PatsyBox').classList.add('hidden')
    document.querySelector('.JerryUserBox').classList.remove("highlight")
    document.querySelector('.MelvinUserBox').classList.add('highlight')
    document.querySelector('.MiriamUserBox').classList.remove('highlight')
    document.querySelector('.PatsyUserBox').classList.remove('highlight')
  })
  
  document.querySelector('#Miriam').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.add('hidden')
    document.querySelector('.MelvinBox').classList.add('hidden')
    document.querySelector('.MiriamBox').classList.remove('hidden')
    document.querySelector('.PatsyBox').classList.add('hidden')
    document.querySelector('.JerryUserBox').classList.remove("highlight")
    document.querySelector('.MelvinUserBox').classList.remove('highlight')
    document.querySelector('.MiriamUserBox').classList.add('highlight')
    document.querySelector('.PatsyUserBox').classList.remove('highlight')
  })

  document.querySelector('#Patsy').addEventListener('click', () => {
    document.querySelector('.JerryBox').classList.add('hidden')
    document.querySelector('.MelvinBox').classList.add('hidden')
    document.querySelector('.MiriamBox').classList.add('hidden')
    document.querySelector('.PatsyBox').classList.remove('hidden')
    document.querySelector('.JerryUserBox').classList.remove("highlight")
    document.querySelector('.MelvinUserBox').classList.remove('highlight')
    document.querySelector('.MiriamUserBox').classList.remove('highlight')
    document.querySelector('.PatsyUserBox').classList.add('highlight')
  })