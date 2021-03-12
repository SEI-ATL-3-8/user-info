let users = 1;
$.ajax({
    url: 'https://randomuser.me/api/?results=10&inc=name,location,phone,email,picture',
    dataType: 'json',
    async: false,
    success: function(data) {
        // console.log(data);
        // users = data;
        users = data.results
    }
    });

// let users;
console.log(users)

export {users}