const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('#logo_link');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	logo.classList.toggle('open');
});