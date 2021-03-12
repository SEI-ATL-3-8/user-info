//user constructor
function User(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
}

//User 1 - Jerry Diaz
const user1 = new User('Jerry Diaz', 'jerry.diaz@example.com', '(034)-061-7169', '406 Elgin St');
//User 2 - Melvin Fleming
const user2 = new User('Melvin Fleming', 'melvin.fleming@example.com', '(628)-834-3511', '4904 Rolling Green Rd');
//User 3 - Miriam Ross
const user3 = new User('Miriam Ross', 'miriam.ross@example.com', '(350)-551-0412', '4154 Forest Ln');
//User 4 - Patsy Harper
const user4 = new User('Patsy Harper', 'patsy.harper@example.com', '(500)-207-0486', '8281 Pecan Acres Ln');

//grab reference to user blocks
const users = document.querySelectorAll('.user');

//initialize home page
users[0].classList.add('selected');
document.querySelector('#userName').textContent = user1.name;
document.querySelector('#email').textContent = user1.email;
document.querySelector('#phone').textContent = user1.phone;
document.querySelector('#address').textContent = user1.address;

//give each user block an event listener
for (let user of users)
{
    //click event
    user.addEventListener('click', () => 
    {
        //deselect all users
        for (let user of users)
        {
            user.classList.remove('selected');
        }
        //select clicked user
        user.classList.add('selected');

        //grab ref to user (defined above) using html id
        let currentUser = eval(user.id);
        //display current users info
        document.querySelector('#userName').textContent = currentUser.name;
        document.querySelector('#email').textContent = currentUser.email;
        document.querySelector('#phone').textContent = currentUser.phone;
        document.querySelector('#address').textContent = currentUser.address;
    })
}