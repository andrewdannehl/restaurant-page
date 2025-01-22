import './styles.css';
import displayHome from './home.js';
import displayMenu from './menu.js';
import displayAbout from './about.js';

const nav = document.getElementById('nav');
const btnHome = document.getElementById('home');
const btnMenu = document.getElementById('menu');
const btnAbout = document.getElementById('about');

//storing functions containing the contents of each page
const home = displayHome;
const menu = displayMenu;
const about = displayAbout;
//default to home
let activePage = home;
let activeButton = btnHome;

//initial display
displayPage(activePage);

//event listener for page switching
nav.addEventListener('click', (event) => {

    activeButton.classList.toggle('active');
    //changing the active page
    if (event.target.id === 'home') {
        activePage = home;
        activeButton = btnHome;
    } else if (event.target.id === 'menu') {
        activePage = menu;
        activeButton = btnMenu;
    } else if (event.target.id === 'about') {
        activePage = about;
        activeButton = btnAbout;
    }
    activeButton.classList.toggle('active');
    //apply active to new tab
    displayPage(activePage);

});

function displayPage(activePage) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML = activePage;
}