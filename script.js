/* Adam Perkins
adam.perkins@gmail.com
(176)-389-8957
5167 College St */

/* Tammy Cunningham
tammy.cunningham@gmail.com
(948)-841-8915
7924 Washington Ave */

/* Lorraine Lawson
lorraine.lawson@gmail.com
(768)-950-8340
8005 Cackson St */

/* Lesa Gonazales
lesa.gonazales@gmail.com
(016)-022-4440
1486 Green Rd */


const profileNotPicked = document.querySelector('.userSelection2');

const firstProfile = document.querySelector('#firstUser');

firstProfile.addEventListener('click', () => {
    document.querySelector('.userSelection').classList.add('userSelection2')
})