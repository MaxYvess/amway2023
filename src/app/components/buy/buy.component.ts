import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
            link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdsList&IC=4&C=PO&line=P&NavM=N'
        },
        {
            img: 'assets/imgs/Compras/IMG_2.png',
            link: 'https://www.amway.com.br/pt/naturalmente-irresistiveis'
        },
        {
            img: 'assets/imgs/Compras/IMG_3.png',
            link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdsList&IC=1&C=CV&line=C&NavM=N'
        }, 
        {
            img: 'assets/imgs/Compras/IMG_4.png',
            link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdsList&IC=5&C=BQ&line=B&NavM=N'
        },
        {
            img: 'assets/imgs/Compras/IMG_5.png',
            link: ''
        },
        {
            img: 'assets/imgs/Compras/IMG_6.png',
            link: ''
        },
        {
            img: 'assets/imgs/Compras/IMG_7.png',
            link: ''
        },
        {
            img: 'assets/imgs/Compras/IMG_8.png',
            link: ''
        },
        {
            img: 'assets/imgs/Compras/IMG_9.png',
            link: ''
        },
        {
            img: 'assets/imgs/Compras/IMG_10.png',
            link: ''
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

    openLink(link: string){
        window.open(link, '_blank');
    }

}
