import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
            description: '5 de cada 10 personas están bastante preocupados por su condición física y salud. <br><br> Nuestros productos responden de manera efectiva a la necesidad del consumidor actual.'
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_2.png',
            smallTitle: 'Ingredientes',
            bigTitle: 'Naturales',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_7.png',
            description: 'El poder de la naturaleza está en cada uno de nuestros productos. <br><br>Con el proceso único de trazabilidad garantizamos que los ingredientes sean puros, seguros y efectivos.'
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_3.png',
            smallTitle: 'Calidad',
            bigTitle: 'Certificada',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_5.png',
            description: 'Desde la semilla hasta el producto, nos aseguramos de darte lo mejor de la naturaleza y lo mejor de la ciencia. '
        },
        {
            img: 'assets/imgs/Por_Que_Naturales/IMG_4.png',
            smallTitle: 'Promueven bienestar y una vida',
            bigTitle: 'Saludable',
            icon: 'assets/imgs/Por_Que_Naturales/ICON_6.png',
            description: 'Nutrilite cuenta con la certificación orgánica de vitaminas y suplementos. Artistry innova en el cuidado de la piel con el poder de los fitonutrientes.'
        }
    ]

    constructor() { }

    ngOnInit(): void {

    }

   
}
