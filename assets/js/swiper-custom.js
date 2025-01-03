// Shop Tab Slider
/* Single Product Thumbnail Carousel */
const singleProductThumbCarousel = new Swiper(".single-product-thumb-carousel", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".single-product-thumb-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".single-product-thumb-carousel .swiper-button-next",
    prevEl: ".single-product-thumb-carousel .swiper-button-prev",
  },
});

/* Single Product Image Slider */
const singleProductImageSlider = new Swiper(".single-product-image-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".single-product-image-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".single-product-image-slider .swiper-button-next",
    prevEl: ".single-product-image-slider .swiper-button-prev",
  },
  thumbs: {
    swiper: singleProductThumbCarousel,
  },
});
