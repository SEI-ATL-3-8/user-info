/*const Jerry = document.querySelector('#Jerry')
Jerry.addEventListener('click', () => {
    console.log('itworked')
})

const Melvin = document.querySelector('#Melvin')
Melvin.addEventListener('click', () => {
    console.log('itworked')
})

const Miriam = document.querySelector('#Miriam')
Miriam.addEventListener('click', () => {
    console.log('itworked')
})

const Patsy = document.querySelector('#Patsy')
Patsy.addEventListener('click', () => {
    console.log('itworked')
})
*/

function jerrysfunk () {
    document.getElementById('Jerry').classList.add("select");
}

Jerry.addEventListener('click', () => {
    document.getElementById('jerrys-data').style.display = 'block';

    document.getElementById('Jerry').classList.add("select");
    document.getElementById('Miriam').classList.remove("select");
    document.getElementById('Patsy').classList.remove("select");
    document.getElementById('Melvin').classList.remove("select");

    document.getElementById('miriams-data').style.display = 'none';
    document.getElementById('patsys-data').style.display = 'none';
    document.getElementById('melvins-data').style.display = 'none';
})

Miriam.addEventListener('click', () => {
    document.getElementById('miriams-data').style.display = 'block';

    document.getElementById('Miriam').classList.add("select");
    document.getElementById('Jerry').classList.remove("select");
    document.getElementById('Patsy').classList.remove("select");
    document.getElementById('Melvin').classList.remove("select");

    document.getElementById('melvins-data').style.display = 'none';
    document.getElementById('jerrys-data').style.display = 'none';
    document.getElementById('patsys-data').style.display = 'none';
})

Melvin.addEventListener('click', () => {
    document.getElementById('melvins-data').style.display = 'block';

    document.getElementById('Melvin').classList.add("select");
    document.getElementById('Miriam').classList.remove("select");
    document.getElementById('Patsy').classList.remove("select");
    document.getElementById('Jerry').classList.remove("select");

    document.getElementById('patsys-data').style.display = 'none';
    document.getElementById('jerrys-data').style.display = 'none';
    document.getElementById('miriams-data').style.display = 'none';
})

Patsy.addEventListener('click', () => {
    document.getElementById('patsys-data').style.display = 'block';

    document.getElementById('Patsy').classList.add("select");
    document.getElementById('Miriam').classList.remove("select");
    document.getElementById('Jerry').classList.remove("select");
    document.getElementById('Melvin').classList.remove("select");

    document.getElementById('melvins-data').style.display = 'none';
    document.getElementById('jerrys-data').style.display = 'none';
    document.getElementById('miriams-data').style.display = 'none';
})
