var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',  /* точки переключения */
      clickable:true,    /*нажимаешь на слайд - он переключается */ 
      hideOnClick:true,  /* переключение слайда при нажатии на точку*/ 
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    loop:true,
  })

document.querySelector('.burger-box').onclick =function(){
  document.querySelector('.burger-menu').classList.toggle('burger-menu-active')
}; 

