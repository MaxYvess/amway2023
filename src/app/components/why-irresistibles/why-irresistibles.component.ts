import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var utag: any;

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  selector: 'app-why-irresistibles',
  templateUrl: './why-irresistibles.component.html',
  styleUrls: ['./why-irresistibles.component.scss']
})
export class WhyIrresistiblesComponent implements OnInit {

    public whyIrresistibles: Array<any> = [
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_1.png',
            smallTitle: 'Produtos que são',
            bigTitle: 'Tendência',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_8.png',
            description: 'O mercado de saúde e bem-estar vem crescendo em toda a região e os nossos produtos respondem de forma eficaz a esse crescimento.',
            goTo: ''
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_4.png',
            smallTitle: 'Promovem bem-estar e uma vida ',
            bigTitle: 'Saudável',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_6.png',
            description: 'A Nutrilite conta com a certificação orgânica de vitaminas e suplementos. A Artistry inova nos cuidados com a pele com o poder dos fitonutrientes.',
            goTo: ''
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_2.png',
            smallTitle: 'Ingredientes',
            bigTitle: 'Naturais',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_7.png',
            description: 'O poder da natureza está em cada um dos nossos produtos. Com o processo único de rastreabilidade, asseguramos que os ingredientes sejam puros, seguros e eficazes.',
            goTo: ''
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_3.png',
            smallTitle: 'Qualidade ',
            bigTitle: 'Certificada',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_5.png',
            description: 'Da semente até o produto, nos certificamos de oferecer o melhor da natureza e o melhor da ciência.',
            goTo: ''
        },
        
    ]

    constructor(private router: Router) { }

    ngOnInit(): void {
        let hostname = window.location.hostname;
        let hostSplit = hostname.split('.');
        let code = hostSplit[hostSplit.length - 1];
        
        let utag_data = environment.utagInfo.whyIrresistibles;
        utag_data.site_webProperty_mod = hostname + ' | ecommerce';
        utag_data.site_country = code;
        utag_data.site_currencyCode = this.getCurrencyCode(code);

        utag.view(utag_data);
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

    goToSection(section: string){
        $('html, body').animate({
            scrollTop: $("#" + section).offset().top
        }, 500);
    }

    navigateTo(route: Array<string>){
        this.router.navigate(route);
      }

    goTo(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }

   
}
