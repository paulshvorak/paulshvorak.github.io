var header = document.querySelector('.header');
var banner = document.querySelector('.banner');
var modal  = document.querySelector('.modal');
var contactUsButton = document.querySelector('.actions__contact');
var modalOverlay = document.querySelector('.modal__overlay');

var bannerHeight = banner.offsetHeight;

function toggleClassToHeader() {
	if (!header.classList.contains('active')) {
		header.classList.toggle('active');
	}
}
//
// modalOverlay.onclick = function () {
// 	// toggleClassToHeader();
// 	// event.stopPropagation();
// 	header.classList.remove('active');
// }
//
// contactUsButton.onclick = function () {
// 	toggleClassToHeader();
// }


window.onscroll = function () {
	if (!modal.classList.contains('is-open')) {
		if (window.pageYOffset > bannerHeight) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	}
}
