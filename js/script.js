
let navbar = document.queryselector('.header .navbar');

document.queryselector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
}