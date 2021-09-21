/* 
1.when hamburger clicked, side menu appears.

2.when times incon clicked side menu disappers.

create variables to select elements by #id.

I will use EventListeners so therefore - event handlers(callback functions need to be written to control open close actions)
 */


// element selection variables
const hamburgerMenu = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu-icon');
const getSideNav = document.getElementById('side-navbar');

function openMenu() {
  getSideNav.style.width = '250px';
}
hamburgerMenu.addEventListener('click', openMenu);

function closeSideMenu() {
  getSideNav.style.width = '0';
}
closeMenu.addEventListener('click', closeSideMenu);