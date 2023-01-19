import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public isOpen: boolean = false;

    constructor(private router: Router){}

    toggle(isOpen: any){
        if(isOpen)
            this.isOpen = isOpen;
        else
            this.isOpen = !this.isOpen; 

        if(this.isOpen)
            $('body').addClass('no-overflow');
        else
            $('body').removeClass('no-overflow');
    }

    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }
}


/**

    - Textos a 32px titulo, 16px texto
    - Cambiar Tipografia
    - Margen general para evitar colicion con Icono Naturalmente Irresistible
    - Parralax General
    - Considerar resolucion 1920x1080

    - Productos
        - Flechas fuera de los items
        - Titulo por imagen

    - Producto detalle
        - Checar icono Info siempre hacia el fondo y en la esquina
        - agregar texto entre boton de comprar y modo de uso
        - texto footer debajo de las imagenes parallax lo mas abajo que se pueda
        - Cambiar icnon X
       
    - Ingredientes
        -Ordenar alphabeticamente

    - Solutiones detalle
        - Agregar los faltantes
        - Imagen hasta abajo

    - Home
        - Agregar seccion nueva
        - Agregar icono en el titulo productos con alta calidad
        - Hover tarjetas
        - Cambiar seccion verde
        - Texto que indique que se puede hacer scroll debajo de la imagen principal
        
    - Menu
        - Centrar Menu
        - SubMenu todos los productos

    - Herramientas
        - Click en titulo lleva a componente de banderas
    
    - Comprar
        - Componente con las banderas y la imagen de titulo

 */