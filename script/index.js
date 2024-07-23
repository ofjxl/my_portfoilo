const web_s = new Swiper('.swiper',{
    autoplay: {delay:2000},
    loop:true,
    navigation:{
        nextEl: ".web .swiper-button-next",
        prevEl: ".web .swiper-button-prev",
    },
})
const sns_s = new Swiper('.sns-swiper',{
    autoplay: {delay:2000},
    loop:true,
})