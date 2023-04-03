import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var utag: any;

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

    public tools: Array<any> = 
    [
        {
            id: 1,
            img: 'assets/imgs/Herramientas/ICON_1.png',
            name: 'Catálogo Irresistibles',
            btn: 'Explorar',
            description: 'Para mostrarle a tus clientes la variedad de productos que tenemos para ellos, te recomendamos tener el catálogo de productos Irresistibles en tu celular, listo para mostrarlo.'
        }
    ]
    
    public tools2: Array<any> = [
        {
            id: 2,
            img: 'assets/imgs/Herramientas/ICON_2.png',
            name: 'Looks Irresistibles',
            btn: 'Descargar',
            link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip',
            description: 'Si quieres vender productos Naturalmente Irresistibles, vístete irresistible. En este paquete de recursos vas a encontrar fondos de pantalla, fondos para llamadas y otros elementos que identifican estos productos.'
        }
    ]
    public tools3: Array<any> = [
        {
            id: 3,
            img: 'assets/imgs/Herramientas/ICON_3.png',
            name: 'Perfiles Irresistibles',
            btn: 'Descargar',
            description: 'Lleva la información de tus posibles clientes a todo lugar descargando los siete perfiles, que diseñamos para ti, en tu celular.'
        },
        {
            id: 4,
            img: 'assets/imgs/Herramientas/ICON_7.png',
            name: 'Infografías Irresistibles',
            btn: 'Descargar',
            description: 'Vuélvete experto con los beneficios de los ingredientes de los Naturalmente Irresistibles.'
        }
    ]
    public tools4: Array<any> = [
        {
            id: 5,
            img: 'assets/imgs/Herramientas/ICON_6.png',
            name: 'Repositorio',
            btn: 'Explorar',
            description: 'Conoce los atributos de tus productos Naturalmente Irresistibles en un solo lugar.'
        }
    ]
    public tools5: Array<any> = [
        {
            id: 6,
            img: 'assets/imgs/Herramientas/ICON_5.png',
            name: 'Entrenamientos Irresistibles',
            btn: 'Descargar',
            link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf',
            description: 'Saber vender es algo que se aprende y se practica. Para formarte tenemos los Entrenamientos INA. Descarga el calendario de los próximos eventos y participa.'
        }
    ]
    constructor(private router: Router) { }

    ngOnInit(): void {
        let hostname = window.location.hostname;
        let hostSplit = hostname.split('.');
        let code = hostSplit[hostSplit.length - 1];

        let utag_data = environment.utagInfo.tools;
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


    openLink(link: string){
        window.open(link, '_blank');
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
