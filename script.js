let users = [{
        name: "Melvin Fleming",
        photo: "melvin_fleming.jpg",
        email: "melvin.fleming@example.com",
        address: "4904 Rolling Green Rd",
        phone: "(628)-834-3511",
    },
    {
        name: "Jerry Diaz",
        photo: "jerry_diaz.jpg",
        email: "jerry.diaz@example.com",
        address: "406 Elgin St",
        phone: "(034)-061-7169",
    },
    {
        name: "Patsy Harper",
        photo: "patsy_harper.jpg",
        email: "patsy.harper@example.com",
        address: "8281 Pecan Acres Ln",
        phone: "(500)-207-0486",
    },
    {
        name: "Miriam Ross",
        photo: "miriam_ross.jpg",
        email: "miriam.ross@example.com",
        address: "4154 Forest Ln",
        phone: "(350)-551-0412",
    },
];

function displayUsers(array) {
    const list = document.getElementsByClassName('userinfo');
}

for (const i = 0; i < array.length; i++) {
    const item = document.createElement('li');
    item.className = "userinfo1";

    const img = document.createElement('img)');
    img.className = 'photo';
    img.src = 'assets/' + array[1. photo];
    item.appendChild(img);

    const name = document.createElement('span)'; name.innerText = arrau[i].name; name.className = 'name'
        item / appendChild(name);

        list.appendChild(item);
    }
    return list;
}
displayUsers(users);


var lis = document.querySelectorAll('li');


for (var i = 0; i < lis.length; i++) {
    const user = users[i];
    lis[i].onclick = function() {

        [].forEach.call(lis, function(el) {
            el.classList.remove("selected");
        });

        this.classList.add("selected");


        document.getElementById("name").innerText = user.name;

        document.getElementById("phone").innerText = user.phone;

        document.getElementById("email").innerText = user.email;

        document.getElementById("address").innerText = user.address;
    };
}


lis[0].click();

lis[0].classList.add('selected');