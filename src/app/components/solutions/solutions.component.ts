import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Router, RouterModule } from '@angular/router';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
  standalone: true,
  imports: [ CommonModule, SwiperModule, RouterModule ],
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

    public solutions: Array<any> = [
        {
            img: 'assets/imgs/Soluciones/IMG_1.png',
            name: 'MOVIMIENTO CONSTANTE',
            icon: 'icon1',
            id: 1
        },
        {
            img: 'assets/imgs/Soluciones/IMG_2.png',
            name: 'DESAFÍA TUS IDEAS',
            icon: 'icon2',
            id: 2
        },
        {
            img: 'assets/imgs/Soluciones/IMG_3.jpeg',
            name: 'SONRISA IDEAL',
            icon: 'icon3',
            id: 3
        },
        {
            img: 'assets/imgs/solution1.png',
            name: 'OTRA SOLUCIÓN',
            icon: 'icon1',
            id: 4
        },
        {
            img: 'assets/imgs/solution2.png',
            name: 'ÚLTIMA SOLUCIÓN',
            icon: 'icon2',
            id: 5
        }
    ]

    public breakpoints: any = {
        '300': { slidesPerView: 1, spaceBetween: 20 },
        '375': { slidesPerView: 1, spaceBetween: 20 },
        '500': { slidesPerView: 1, spaceBetween: 20 },
        '700': { slidesPerView: 2, spaceBetween: 20 },
        '1024': { slidesPerView: 3, spaceBetween: 20 },
        '1200': { slidesPerView: 3, spaceBetween: 20 },
    };

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }

}