// Define users info as an array of object
var users = [
  {
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

// Function that manipulates DOM for the users list from users array
function displayUsers(array) {
    // Access to "ul" element with "users" id. Also can access using querySelector()
    var list = document.getElementById("users");
    
    // Iterate uses array to create "li" element that corresponds to each user data
    for (var i=0; i< array.length; i++) {
        // Create "li" element which will work as an user item
        var item = document.createElement('li');
        item.className="user-item"; // Set className

        // Create "img" element
        var img =document.createElement('img');
        img.className="photo"; // Set className
        img.src="assets/" + array[i].photo; // Set src path
        item.appendChild(img); // Add "img" elemnt to "li" element

        // Create "span" element
        var name = document.createElement("span");
        name.innerText = array[i].name; // Set the text of span element
        name.className="name" // Set className
        item.appendChild(name); // Add "span" element to "li" element

        // Add "li" element to "ul" parent element
        list.appendChild(item);
    }

    return list;
}

// Call displayUsers function to manipulate DOM for the users list
displayUsers(users);

// Select all "li" elements
var lis = document.querySelectorAll('li');

// Iterate lis variable to display the selected user info data in the right pane
for (var i=0; i<lis.length; i++) {
    const user = users[i]; // Get user info at "i" index of users array

    // Register onclick even handler of each user item
    lis[i].onclick = function () {
      // Remove "selected" class name from every user item
      [].forEach.call(lis, function (el) {
        el.classList.remove("selected");
      });
      // Add "selected" class name to the selected user item
      this.classList.add("selected");

      // Selecte the element with "name" id and assign the name of the selected user
      document.getElementById("name").innerText = user.name;
      // Select the element with "phone" id and assign the phone of the selected user
      document.getElementById("phone").innerText = user.phone;
      // Select the element with "email" id and assign the email of the selected user
      document.getElementById("email").innerText = user.email;
      // Select the element with "address" id and assign the address of the selected user
      document.getElementById("address").innerText = user.address;
    };
}

// Initially select the first user item when the page is loaded
lis[0].click();
// Add "selected" class name to the first user item to show the border color
lis[0].classList.add('selected');
