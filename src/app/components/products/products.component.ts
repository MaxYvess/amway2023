import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { SwiperComponent, SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import { environment } from 'src/environments/environment';
// install Swiper modules
SwiperCore.use([Navigation]);

declare var $: any;
declare var utag: any;
declare var window: any;

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
        { id: 4, name: 'Ômega 3', img: 'assets/imgs/Productos/IMG_4.jpg' },
        { id: 5, name: 'Acerola C', img: 'assets/imgs/Productos/IMG_13.jpg' },
        //{ id: 6, name: 'Vitamina B', img: 'assets/imgs/Productos/IMG_6.jpg' },
        //{ id: 7, name: 'HSN', img: 'assets/imgs/Productos/IMG_7.jpg' },
        { id: 6, name: 'Água Micelar', img: 'assets/imgs/Productos/IMG_8.jpg' },
        { id: 7, name: 'Glister Creme Dental', img: 'assets/imgs/Productos/IMG_12.png' },
        { id: 8, name: 'LOC™ Limpador Multiusos', img: 'assets/imgs/Productos/IMG_10.jpg' }
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
        let hostname = window.location.hostname;
        let hostSplit = hostname.split('.');
        let code = hostSplit[hostSplit.length - 1];

        let utag_data = environment.utagInfo.products;
        utag_data.site_webProperty_mod = hostname + ' | ecommerce';
        utag_data.site_country = code;
        utag_data.site_currencyCode = this.getCurrencyCode(code);
        
        window.utag_data = Object.assign(window.utag_data, utag_data);
        setTimeout(() => { utag.view(window.utag_data);  }, 1000)
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


    slideNext(){
        this.swiper.swiperRef.slideNext(600);
    }
      
    slidePrev(){
        this.swiper.swiperRef.slidePrev(600);
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
