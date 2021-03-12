document.querySelector('#Minfo').classList.add('hidden')
document.querySelector('#Rinfo').classList.add('hidden')
document.querySelector('#jinfo').classList.add('hidden')
document.querySelector('#Pinfo').classList.add('hidden')

document.querySelector('#user1-link').addEventListener('click', () => {

    document.querySelector('#Minfo').classList.remove('hidden')
    document.querySelector('#Rinfo').classList.add('hidden')
    document.querySelector('#jinfo').classList.add('hidden')
    document.querySelector('#Pinfo').classList.add('hidden')
  })
  
  document.querySelector('#user2-link').addEventListener('click', () => {
    
    document.querySelector('#Minfo').classList.add('hidden')
    document.querySelector('#Rinfo').classList.remove('hidden')
    document.querySelector('#jinfo').classList.add('hidden')
    document.querySelector('#Pinfo').classList.add('hidden')
  })

  document.querySelector('#user3-link').addEventListener('click', () => {
    
    document.querySelector('#Minfo').classList.add('hidden')
    document.querySelector('#Rinfo').classList.add('hidden')
    document.querySelector('#jinfo').classList.remove('hidden')
    document.querySelector('#Pinfo').classList.add('hidden')
  })
  
  document.querySelector('#user4-link').addEventListener('click', () => {
    
    document.querySelector('#Minfo').classList.add('hidden')
    document.querySelector('#Rinfo').classList.add('hidden')
    document.querySelector('#jinfo').classList.add('hidden')
    document.querySelector('#Pinfo').classList.remove('hidden')
  })
  
  