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
            smallTitle: 'Productos en',
            bigTitle: 'Tendencia',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_8.png',
            description: 'El mercado de salud y bienestar ha crecido en toda la región y nuestros productos responden de manera efectiva a ese crecimiento.',
            goTo: ''
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_4.png',
            smallTitle: 'Promueven bienestar y una vida',
            bigTitle: 'Saludable',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_6.png',
            description: 'Nutrilite cuenta con la certificación orgánica de vitaminas y suplementos. Artistry innova en el cuidado de la piel con el poder de los fitonutrientes.',
            goTo: ''
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_2.png',
            smallTitle: 'Ingredientes',
            bigTitle: 'Naturales',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_7.png',
            description: 'El poder de la naturaleza está en cada uno de nuestros productos. <br><br>Con el proceso único de trazabilidad garantizamos que los ingredientes sean puros, seguros y efectivos.',
            goTo: ''
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_3.png',
            smallTitle: 'Calidad',
            bigTitle: 'Certificada',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_5.png',
            description: 'Desde la semilla hasta el producto, nos aseguramos de darte lo mejor de la naturaleza y lo mejor de la ciencia.',
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
