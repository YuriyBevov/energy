import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const slider = document.querySelector(".reviews-slider");

if (slider) {
	new Swiper(slider, {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 30,

		breakpoints: {
			767: {
				slidesPerView: 2,
			},
			959: {
				slidesPerView: 1,
			},

			1023: {
				slidesPerView: 2,
			},
		},

		navigation: {
			nextEl: document.querySelector(".reviews .swiper-button-next"),
			prevEl: document.querySelector(".reviews .swiper-button-prev"),
		},
	});
}
