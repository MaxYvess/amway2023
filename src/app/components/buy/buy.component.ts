import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var utag: any;
declare var window: any;

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

    public countries: Array<any> = [
        {
            img: 'assets/imgs/Compras/IMG_1.png',
            link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdsList&IC=4&C=PO&line=P&NavM=N&utm_source=site&utm_medium=home&utm_campaign=ar_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_3.png',
            link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdsList&IC=1&C=CV&line=C&NavM=N&utm_source=site&utm_medium=home&utm_campaign=cl_es&utm_content=cta_compra&utm_term=boton_comprar'
        }, 
        {
            img: 'assets/imgs/Compras/IMG_12.png',
            link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdsList&IC=5&C=CA&line=C&NavM=N&utm_source=site&utm_medium=home&utm_campaign=co_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_4.png',
            link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdsList&IC=5&C=BQ&line=B&NavM=N&utm_source=site&utm_medium=home&utm_campaign=cr_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_5.png',
            link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=Top&line=O&utm_source=site&utm_medium=home&utm_campaign=sv_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_13.png',
            link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdsList&IC=5&C=CU&line=C&NavM=N&utm_source=site&utm_medium=home&utm_campaign=gt_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_6.png',
            link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=Top&line=C&utm_source=site&utm_medium=home&utm_campaign=hn_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_7.png',
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdsList&IC=5&C=KQ&line=K&NavM=N&utm_source=site&utm_medium=home&utm_campaign=mx_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_8.png',
            link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdsList&IC=5&C=BO&line=B&NavM=N&utm_source=site&utm_medium=home&utm_campaign=pa_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_9.png',
            link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdsList&IC=2&C=FV&line=F&NavM=N&utm_source=site&utm_medium=home&utm_campaign=uy_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_10.png',
            link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=Top&line=A&utm_source=site&utm_medium=home&utm_campaign=ve_es&utm_content=cta_compra&utm_term=boton_comprar'
        }
        
    ]

    constructor() { }

    ngOnInit(): void {
        let hostname = window.location.hostname;
        let hostSplit = hostname.split('.');
        let code = hostSplit[hostSplit.length - 1];

        let utag_data = environment.utagInfo.buy;
        utag_data.site_webProperty_mod = hostname + ' | ecommerce';
        utag_data.site_country = code;
        utag_data.site_currencyCode = this.getCurrencyCode(code);
        
        window.utag_data = Object.assign(window.utag_data, utag_data);
        utag.view(window.utag_data);
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

    openLink(link: string){
        window.open(link, '_blank');
    }

    goTo(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }

}
