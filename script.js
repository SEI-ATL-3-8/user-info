// const users = [
//     {
//         name: 'Melvin Fleming',
//         email: 'melvin.fleming@example.com', 
//         phone: '(628)-834-3511', 
//         address: '4904 Rolling Green Rd'
//     },
//     {
//         name: 'Jerry Diaz',
//         email: 'jerry.diaz@example.com',
//         phone: '(034)-061-7169',
//         address: '406 Elgin St'
//     },
//     {
//         name: 'Patsy Harper',
//         email: 'patsy.harper@example.com',
//         phone: '(500)-207-0486',
//         address: '8281 Pecan Acres Ln'
//     },
//     {
//         name: 'Miriam Ross',
//         email: 'miriam.ross@example.com',
//         phone: '(350)-551-0412',
//         address: '4154 Forest Ln'
//     }
// ]



// const userNameBox = document.getElementsByClassName("username_box")

// // Create an array call for each on said array
// let userNameBoxArr = Array.prototype.forEach.call(userNameBox, (box, index) => {
//     console.log(box)
//     box.textContent = users[index].name
// })


// for (box of userNameBox) {
//     box.addEventListener("click", event => {
//         let target = event.target.id;
//         console.log(target)
//         let selectedElements = document.getElementsByClassName("selected")

//         removeClass(selectedElements)
//         document.getElementById(target).classList.add("selected")
//         if (document.querySelector(".hide_info_box")) {
//             document.querySelector(".hide_info_box").classList.remove("hide_info_box")
//         }
//         // my eyes burn
//         for(user of users) {
//             let usersFullName = document.getElementById(target).textContent
//             if(user.name === usersFullName) {
//                 document.querySelector(".information_email").textContent = user.email
//                 document.querySelector(".information_phone").textContent = user.phone
//                 document.querySelector(".information_address").textContent = user.address
//             }
//         }
//     });
// }

// // This works but I barely know why..
// const removeClass = arr => {
//     Array.prototype.forEach.call(arr, (itemId) => {
//         let targetId = itemId.id
//         document.getElementById(targetId).classList.remove("selected")
//     })
// }

const users = [
    {
        name: 'Melvin Fleming',
        email: 'melvin.fleming@example.com', 
        phone: '(628)-834-3511', 
        address: '4904 Rolling Green Rd',
        profilePic: './assets/melvin_fleming.jpg'
    },
    {
        name: 'Jerry Diaz',
        email: 'jerry.diaz@example.com',
        phone: '(034)-061-7169',
        address: '406 Elgin St',
        profilePic: './assets/jerry_diaz.jpg'
    },
    {
        name: 'Patsy Harper',
        email: 'patsy.harper@example.com',
        phone: '(500)-207-0486',
        address: '8281 Pecan Acres Ln',
        profilePic: './assets/patsy_harper.jpg'
    },
    {
        name: 'Miriam Ross',
        email: 'miriam.ross@example.com',
        phone: '(350)-551-0412',
        address: '4154 Forest Ln',
        profilePic: './assets/miriam_ross.jpg'
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
                document.getElementById("profile_pic").src = user.profilePic // This dosent work ??
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

