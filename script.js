// Dom Elements
const usersInfoContainer = document.querySelector('.users-info-container');
const userLabels = document.querySelectorAll('.user-label');

// Fetches the data using get request and then updates the dom and relevant event listeners to each label.
const grabUserData = () => {
    fetch('https://randomuser.me/api/?results=4')
    .then(res=> {
       if (res.ok && res.status === 200) return res.json();
       throw new Error('Data Error From Server');
    })
    .then(data => {
      let {results} = data;
      renderLabels(userLabels,results);
      changeUserInfo(results[0]);
    })
    .catch(error => {
        console.log(error.message);
    })
}


// Updates Labels to latest elements. Each label will be added an event listener 
//  To track it's relevant user info.
const renderLabels = (elements,results) => {
    elements.forEach((ele,i) => {
        ele.children[0].src  = results[i].picture.large;
        ele.children[1].innerText = results[i].name.first + " " + results[i].name.last;    
        ele.addEventListener('click', (event) => {
            elements.forEach(ele => ele.classList.remove('selected'));
            ele.classList.add('selected');
            changeUserInfo(results[i]);
        })
    })
}

// Actually changes the User Info DOm using UserInfoContainer Dom Element.

const changeUserInfo = ({name,email,location,phone,picture}) => {
    const userChildren = usersInfoContainer.children;
    userChildren[0].src = picture.large;
    userChildren[1].innerText = name.first + " " + name.last;
    userChildren[2].innerText = email;
    userChildren[3].innerText = location.street.number + " " + location.street.name + "\n" +location.city + " ," + location.country; 
    userChildren[4].innerText = phone;
} 

// Start the USers!!
grabUserData();