import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

declare var $: any;

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
            link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdsList&IC=5&C=OU&line=O&NavM=N&utm_source=site&utm_medium=home&utm_campaign=sv_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_13.png',
            link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdsList&IC=5&C=CU&line=C&NavM=N&utm_source=site&utm_medium=home&utm_campaign=gt_es&utm_content=cta_compra&utm_term=boton_comprar'
        },
        {
            img: 'assets/imgs/Compras/IMG_6.png',
            link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdsList&IC=5&C=CT&line=C&NavM=N&utm_source=site&utm_medium=home&utm_campaign=hn_es&utm_content=cta_compra&utm_term=boton_comprar'
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
            link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdsList&IC=2&C=AZ&line=A&NavM=N&utm_source=site&utm_medium=home&utm_campaign=ve_es&utm_content=cta_compra&utm_term=boton_comprar'
        }
        
    ]

    constructor() { }

    ngOnInit(): void {
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
