import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  standalone: true,
  imports: [CommonModule],
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

    constructor() { }

    ngOnInit(): void {

    }

    goToSection(section: string){
        $('html, body').animate({
            scrollTop: $("#" + section).offset().top
        }, 500);
    }

   
}
