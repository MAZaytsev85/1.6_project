import "../scss/style.scss";

// Функция инициализации свайпера с брейкпоинтом 769, после которого он должен ломаться, но пока не ломается
window.addEventListener('DOMContentLoaded', () => {

	const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
	  let swiper;
  
	  breakpoint = window.matchMedia(breakpoint);
  
	  const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);

	  }
  
	  const checker = function() {
		if (breakpoint.matches) {
		  return enableSwiper(swiperClass, swiperSettings);
		} else {
		  if (swiper !== undefined) swiper.destroy(true, true);
		  return;
		}
	  };
  
	  breakpoint.addEventListener('change', checker);
	  checker();
	}

	resizableSwiper(
	  '(max-width: 768px)',
	  '.slider-1',
	  {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1.4,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  },
	);
  
	resizableSwiper(
		'(max-width: 768px)',
		'.slider-2',
		{
		  loop: true,
		  spaceBetween: 30,
		  slidesPerView: 1.4,
		  pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
		},
	  );

	  resizableSwiper(
		'(max-width: 768px)',
		'.slider-3',
		{
		  loop: true,
		  spaceBetween: 30,
		  slidesPerView: 1.4,
		  pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
		},
	  );

  });



// ИзменениеAвысоты блока с логотипами, текста и картинки в кнопке развертывания по клику

let brend_list_button = document.querySelector('.button__link');
let brend_list =  document.querySelector('.content_slide');
let button_text = document.querySelector('.button__link > span');
let img  = document.querySelector('.button__link > img');


brend_list_button.addEventListener('click', function() {

	brend_list.classList.toggle('fullsize');
	img.classList.toggle('button_close');
	button_text.innerHTML = 
	(button_text.innerHTML === 'Скрыть')
	? button_text.innerHTML = 'Показать все' : button_text.innerHTML = 'Скрыть';
	
})

let brend_list_button_center = document.querySelector('.centerlink');
let repair_list =  document.querySelector('.center');
let button_text_center = document.querySelector('.centerlink > span');
let img_center  = document.querySelector('.centerlink> img');


brend_list_button_center.addEventListener('click', function() {

	repair_list.classList.toggle('fullsize');
	img_center.classList.toggle('button_close');
	button_text_center.innerHTML = 
	(button_text_center.innerHTML === 'Скрыть')
	? button_text_center.innerHTML = 'Показать все' : button_text_center.innerHTML = 'Скрыть';
	
})

let main_text_button = document.querySelector('.content_link');
let main_text =  document.querySelector('.content_top');
let main_text_content = document.querySelector('.content_link > span');
let img_text = document.querySelector('.content_link > img');


main_text_button.addEventListener('click', function() {

	main_text.classList.toggle('fullsize');
	img_text.classList.toggle('button_close');
	main_text_content.innerHTML = 
	(main_text_content.innerHTML === 'Скрыть')
	? main_text_content.innerHTML = 'Читать далее' : main_text_content.innerHTML = 'Скрыть';
	
})

let burger_button = document.querySelector('.icon_left');
let blure = document.querySelector('.blure')
let sidebar = document.querySelector('.sidebar')
let close_sidebar_button = document.querySelector('.icon_close');
let call_button_1 = document.querySelector('.icon_call');
let call_button_2 = document.querySelector('.icon_call_modal');
let chat_button_1 = document.querySelector('.icon_chat');
let chat_button_2 = document.querySelector('.icon_chat_modal');
let modal_1 = document.querySelector('.modal_call');
let modal_2 = document.querySelector('.modal_back');
let modal_close =document.querySelector('.modal_close');
let modal_close_caht =document.querySelector('.modal_close_caht');

burger_button.addEventListener('click', function() {
	sidebar.classList.add('sidebar_open');
	blure.classList.add('blure_use');
})

close_sidebar_button.addEventListener('click', function() {
		sidebar.classList.remove('sidebar_open'); 
		blure.classList.remove('blure_use');
})

blure.addEventListener('click', function() {
		modal_2.classList.remove('chat_open');
		modal_1.classList.remove('modal_open');
		sidebar.classList.remove('sidebar_open'); 
		blure.classList.remove('blure_use');
})

chat_button_1.addEventListener('click', function() {
	modal_2.classList.add('chat_open');
	blure.classList.add('blure_use');
})

chat_button_2.addEventListener('click', function() {
	modal_2.classList.add('chat_open');
	blure.classList.add('blure_use');
})

call_button_1.addEventListener('click', function() {
	modal_1.classList.add('modal_open');
	blure.classList.add('blure_use');
})

modal_close.addEventListener('click', function() {
	modal_1.classList.remove('modal_open');
	blure.classList.remove('blure_use');
})

call_button_2.addEventListener('click', function() {
	modal_1.classList.add('modal_open');
	blure.classList.add('blure_use');
})

modal_close_caht.addEventListener('click', function() {
	modal_2.classList.remove('chat_open');
	blure.classList.remove('blure_use');
})