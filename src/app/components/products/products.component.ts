import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { SwiperComponent, SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SwiperModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    @ViewChild('swiper', { static: false }) swiper?: any;
    
    public products: Array<any> = [
        { id: 1, name: 'Daily Plus', img: 'assets/imgs/Productos/IMG_1.jpg' },
        { id: 2, name: 'Cal Mag D', img: 'assets/imgs/Productos/IMG_2.jpg' },
        { id: 3, name: 'Proteína Vegetal', img: 'assets/imgs/Productos/IMG_3.jpg' },
        { id: 4, name: 'Omega 3 Plus', img: 'assets/imgs/Productos/IMG_4.jpg' },
        { id: 5, name: 'C Plus', img: 'assets/imgs/Productos/IMG_5.jpg' },
        { id: 6, name: 'B Plus', img: 'assets/imgs/Productos/IMG_6.jpg' },
        { id: 7, name: 'HSN', img: 'assets/imgs/Productos/IMG_7.jpg' },
        { id: 8, name: 'Agua Micelar', img: 'assets/imgs/Productos/IMG_8.jpg' },
        { id: 9, name: 'Pasta de Dientes', img: 'assets/imgs/Productos/IMG_9.jpg' },
        { id: 10, name: 'L.O.C. Limpiador Multiusos', img: 'assets/imgs/Productos/IMG_10.jpg' }
    ];
    
    public breakpoints: any = {
        '300': { slidesPerView: 1, spaceBetween: 20 },
        '375': { slidesPerView: 1, spaceBetween: 20 },
        '500': { slidesPerView: 1, spaceBetween: 20 },
        '700': { slidesPerView: 3, spaceBetween: 20 },
        '1024': { slidesPerView: 4, spaceBetween: 20 },
        '1200': { slidesPerView: 5, spaceBetween: 20 },
    };

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    slideNext(){
        this.swiper.swiperRef.slideNext(600);
    }
      
    slidePrev(){
        this.swiper.swiperRef.slidePrev(600);
    }
    
    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }

}
