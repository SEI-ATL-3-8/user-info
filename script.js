
// document.addEventListener("DOMContentLoaded", function(event) { 
//     const homeSection = document.querySelector('.user1')
//     homeSection.addEventListener('click', () => {
//         console.log('You clicked on home!');
//     })
//   });

document.querySelector('.user1').addEventListener('click', () => {
    document.querySelector('#info1').classList.remove('hidden')
    document.querySelector('#info2').classList.add('hidden')
    document.querySelector('#info3').classList.add('hidden')
    document.querySelector('#info4').classList.add('hidden')
  })

  document.querySelector('.user2').addEventListener('click', () => {
    document.querySelector('#info2').classList.remove('hidden')
    document.querySelector('#info1').classList.add('hidden')
    document.querySelector('#info3').classList.add('hidden')
    document.querySelector('#info4').classList.add('hidden')
  })

  document.querySelector('.user3').addEventListener('click', () => {
    document.querySelector('#info3').classList.remove('hidden')
    document.querySelector('#info1').classList.add('hidden')
    document.querySelector('#info2').classList.add('hidden')
    document.querySelector('#info4').classList.add('hidden')
  })

  document.querySelector('.user4').addEventListener('click', () => {
    document.querySelector('#info4').classList.remove('hidden')
    document.querySelector('#info1').classList.add('hidden')
    document.querySelector('#info2').classList.add('hidden')
    document.querySelector('#info3').classList.add('hidden')
  })
  
  
  document.querySelector('.user1').addEventListener('click', () => {
    document.querySelector('.user1').classList.add('selected1')
    document.querySelector('.user2').classList.remove('selected2')
    document.querySelector('.user3').classList.remove('selected3')
    document.querySelector('.user4').classList.remove('selected4')
  })

  document.querySelector('.user2').addEventListener('click', () => {
    document.querySelector('.user2').classList.add('selected2')
    document.querySelector('.user1').classList.remove('selected1')
    document.querySelector('.user3').classList.remove('selected3')
    document.querySelector('.user4').classList.remove('selected4')
  })

  document.querySelector('.user3').addEventListener('click', () => {
    document.querySelector('.user3').classList.add('selected3')
    document.querySelector('.user1').classList.remove('selected1')
    document.querySelector('.user2').classList.remove('selected2')
    document.querySelector('.user4').classList.remove('selected4')
  })

  document.querySelector('.user4').addEventListener('click', () => {
    document.querySelector('.user4').classList.add('selected4')
    document.querySelector('.user1').classList.remove('selected1')
    document.querySelector('.user2').classList.remove('selected2')
    document.querySelector('.user3').classList.remove('selected3')
  })
