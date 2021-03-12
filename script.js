const users = [
    {
        name: 'Melvin Fleming',
        email: 'melvin.fleming@example.com', 
        phone: '(628)-834-3511', 
        address: '4904 Rolling Green Rd'
    },
    {
        name: 'Jerry Diaz',
        email: 'jerry.diaz@example.com',
        phone: '(034)-061-7169',
        address: '406 Elgin St'
    },
    {
        name: 'Patsy Harper',
        email: 'patsy.harper@example.com',
        phone: '(500)-207-0486',
        address: '8281 Pecan Acres Ln'
    },
    {
        name: 'Miriam Ross',
        email: 'miriam.ross@example.com',
        phone: '(350)-551-0412',
        address: '4154 Forest Ln'
    }
]



const userNameBox = document.getElementsByClassName("username_box")

let userNameBoxArr = Array.prototype.forEach.call(userNameBox, (box, index) => {
    console.log(box)
    box.textContent = users[index].name
})


for (box of userNameBox) {
    box.addEventListener("click", event => {
        let target = event.target.id;
        console.log(target)
        let selectedElements = document.getElementsByClassName("selected")

        removeClass(selectedElements)
        document.getElementById(target).classList.add("selected")
        if (document.querySelector(".hide_info_box")) {
            document.querySelector(".hide_info_box").classList.remove("hide_info_box")
        }

        for(user of users) {
            let usersFullName = document.getElementById(target).textContent
            if(user.name === usersFullName) {
                document.querySelector(".information_email").textContent = user.email
                document.querySelector(".information_phone").textContent = user.phone
                document.querySelector(".information_address").textContent = user.address
            }
        }
    });
}

const removeClass = arr => {
    Array.prototype.forEach.call(arr, (itemId) => {
        let targetId = itemId.id
        document.getElementById(targetId).classList.remove("selected")
    })
}
