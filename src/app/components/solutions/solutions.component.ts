import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

declare var $: any;
declare var utag: any;
declare var window: any;

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
            id: 1,
            img: 'assets/imgs/Soluciones/IMG_5.png',
            /*name: 'MOVIMIENTO CONSTANTE',
            icon: 'icon1',*/
        },
        {
            id: 2,
            img: 'assets/imgs/Soluciones/IMG_7.png',
            /*name: 'DESAFÍA TUS IDEAS',
            icon: 'icon2',*/
        },
        {
            id: 3,
            img: 'assets/imgs/Soluciones/IMG_9.png',
            /*name: 'SONRISA IDEAL',
            icon: 'icon3',*/
        },
        {
            id: 4,
            img: 'assets/imgs/Soluciones/IMG_17.png',
            /*name: 'OTRA SOLUCIÓN',
            icon: 'icon1',*/
        },
        {
            id: 5,
            img: 'assets/imgs/Soluciones/IMG_11.png',
            /*name: 'ÚLTIMA SOLUCIÓN',
            icon: 'icon2',*/
        },
        {
            id: 6,
            img: 'assets/imgs/Soluciones/IMG_13.png',
            /*name: 'ÚLTIMA SOLUCIÓN',
            icon: 'icon2',*/
        },
        {
            id: 7,
            img: 'assets/imgs/Soluciones/IMG_15.png',
            /*name: 'ÚLTIMA SOLUCIÓN',
            icon: 'icon2',*/
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
        let hostname = window.location.hostname;
        let hostSplit = hostname.split('.');
        let code = hostSplit[hostSplit.length - 1];

        let utag_data = environment.utagInfo.solutions;
        utag_data.site_webProperty_mod = hostname + ' | ecommerce';
        utag_data.site_country = code;
        utag_data.site_currencyCode = this.getCurrencyCode(code);
        
        window.utag_data = Object.assign(window.utag_data, utag_data);
        //utag.view(utag_data);
    }

    getCurrencyCode(code: string){
        if(code == 'mx') return 'mxn';
        else if(code == 'gt') return 'gtq';
        else if(code == 'sv') return 'svc';
        else if(code == 'hn') return 'hnl';
        else if(code == 'pa') return 'pab';
        else if(code == 'cr') return 'crc';
        else if(code == 'ar') return 'ars';
        else if(code == 'cl') return 'clp';
        else if(code == 'uy') return 'uyu';
        else if(code == 'co') return 'cop';
        else if(code == 've') return 'vef';
        else return '';
    }

    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }

    goTo(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }

}
