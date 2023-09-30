import './style.css'
import './assets/fonts/stylesheet.css'
import './blocks/common.sass'


import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    // Navigation arrows
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        360: { 
            slidesPerView: 1,
            pagination:{
                el: ".swiper-pagination",
                type: "fraction",
            },
        },
        768: { 
            slidesPerView: 3,
            spaceBetween: 24,
            pagination:{
                el: ".swiper-pagination",
                type: 'bullets',
                clickable: true,
                fractionDigits: 2
            },
        },
        1352: { 
            slidesPerView: 4,
            spaceBetween: 24,
            pagination:{
                el: ".swiper-pagination",
            },
        }
    } 
})


