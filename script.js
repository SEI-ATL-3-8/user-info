document.querySelector('#user1').addEventListener('click', () =>{
    document.querySelector('#user1').classList.add('checked')
    document.querySelector('#user2').classList.remove('checked')
    document.querySelector('#user3').classList.remove('checked')
    document.querySelector('#user4').classList.remove('checked')
}
)

document.querySelector('#user2').addEventListener('click', () =>{
    document.querySelector('#user1').classList.remove('checked')
    document.querySelector('#user2').classList.add('checked')
    document.querySelector('#user3').classList.remove('checked')
    document.querySelector('#user4').classList.remove('checked')
}
)

document.querySelector('#user3').addEventListener('click', () =>{
    document.querySelector('#user1').classList.remove('checked')
    document.querySelector('#user2').classList.remove('checked')
    document.querySelector('#user3').classList.add('checked')
    document.querySelector('#user4').classList.remove('checked')
}
)
document.querySelector('#user4').addEventListener('click', () =>{
    document.querySelector('#user1').classList.remove('checked')
    document.querySelector('#user2').classList.remove('checked')
    document.querySelector('#user3').classList.remove('checked')
    document.querySelector('#user4').classList.add('checked')
}
)
document.querySelector('#user1').addEventListener('click', () =>{
    document.querySelector('#detail1').classList.remove('hide')
    document.querySelector('#detail2').classList.add('hide')
    document.querySelector('#detail3').classList.add('hide')
    document.querySelector('#detail4').classList.add('hide')

}
)
document.querySelector('#user2').addEventListener('click', () =>{
    document.querySelector('#detail1').classList.add('hide')
    document.querySelector('#detail2').classList.remove('hide')
    document.querySelector('#detail3').classList.add('hide')
    document.querySelector('#detail4').classList.add('hide')

}
)
document.querySelector('#user3').addEventListener('click', () =>{
    document.querySelector('#detail1').classList.add('hide')
    document.querySelector('#detail2').classList.add('hide')
    document.querySelector('#detail3').classList.remove('hide')
    document.querySelector('#detail4').classList.add('hide')

}
)
document.querySelector('#user4').addEventListener('click', () =>{
    document.querySelector('#detail1').classList.add('hide')
    document.querySelector('#detail2').classList.add('hide')
    document.querySelector('#detail3').classList.add('hide')
    document.querySelector('#detail4').classList.remove('hide')

}
)