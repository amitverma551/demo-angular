import { Component, OnInit, ElementRef } from '@angular/core';
import Swiper from '../../assets/js/swiper.js';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  swiper: any;
  slides:number;
  spaceBetween : number;
  nav: string;
  pagination: string;
  swiperSlides = [];
  swiperImages = [
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
    {src: 'https://www.fillmurray.com/640/360'},
  ]
  
  constructor(elm: ElementRef) {
    this.slides = elm.nativeElement.getAttribute('slide');
    this.spaceBetween = elm.nativeElement.getAttribute('spaceBetween');
    this.nav = elm.nativeElement.getAttribute('nav');
    this.pagination = elm.nativeElement.getAttribute('pagination');
  }

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: this.slides,
      spaceBetween: 10,
      navigation: (this.nav == "true") ? {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  } : false,
      pagination: (this.pagination == "true") ? {
        el: '.swiper-pagination',
        clickable: true,
      } : false,
     });
     
     this.swiperImages && this.swiperImages.map( x => this.swiperSlides.push(`<div class="swiper-slide"><img src=${x.src} /></div>`))
     this.swiper.appendSlide(this.swiperSlides)
  }
  
}
