import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var utag: any;
declare var window: any;

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
            name: 'CATÁLOGO IRRESISTÍVEL',
            btn: 'Explorar',
            link: 'https://viewer.ipaper.io/amway-latam/brasil/naturalmente-irresistiveis/naturalmente-irresistiveis/',
            description: 'Para mostrar aos seus clientes a variedade de produtos que temos para eles, recomendamos ter o catálogo de produtos Irresistíveis sempre pronto para mostrá-lo no seu celular.'
        }
    ]
    
    public tools2: Array<any> = [
        {
            id: 2,
            img: 'assets/imgs/Herramientas/ICON_2.png',
            name: 'LOOKS IRRESISTÍVEIS',
            btn: 'Baixe',
            link: 'https://www.amway.com.mx/downloads/run-local/Material-irresistibles-BR.zip',
            description: 'Para vender produtos Naturalmente Irresistíveis, crie um visual irresistível. Neste pacote de recursos, você encontra fundos de tela, fundos para chamadas e outros elementos que identificam os produtos.'
        }
    ]
    public tools3: Array<any> = [
        {
            id: 3,
            img: 'assets/imgs/Herramientas/ICON_3.png',
            name: 'PERFIS IRRESISTÍVEIS',
            btn: 'Baixe',
            link: 'https://www.amway.com.mx/downloads/AmwayBrasil/BR_ferramenta_irresistivel.pdf',
            description: 'Leve as informações dos seus possíveis clientes a qualquer lugar, baixando os sete perfis que criamos para você no seu celular.'
        },
        {
            id: 4,
            img: 'assets/imgs/Herramientas/ICON_7.png',
            name: 'INFOGRAFIAS IRRESISTÍVEIS',
            btn: 'Baixe',
            link: 'https://www.amway.com.mx/downloads/AmwayBrasil/Infografia_Perfis_BR.pdf',
            description: 'Vire um especialista sobre os benefícios dos ingredientes dos produtos Naturalmente Irresistíveis.'
        }
    ]
    public tools4: Array<any> = [
        {
            id: 5,
            img: 'assets/imgs/Herramientas/ICON_6.png',
            name: 'REPOSITÓRIO',
            btn: 'Explorar',
            link: 'https://www.learning.amway.com.mx/m/#/category/846',
            description: 'Conheça os atributos dos seus produtos Naturalmente Irresistíveis, tudo em um só lugar.'
        }
    ]
    public tools5: Array<any> = [
        {
            id: 6,
            img: 'assets/imgs/Herramientas/ICON_5.png',
            name: 'TREINAMENTOS IRRESISTÍVEIS',
            btn: 'Baixe',
            link: 'https://www.amway.com.mx/downloads/AmwayBrasil/Calendario_Integrado_BR.pdf',
            description: 'Saber vender é algo que se aprende e pratica. Para você se preparar, temos os Treinamentos INA. Baixe o calendário com os próximos eventos e participe.'
        }
    ]
    public tools6: Array<any> = [
        {
            id: 7,
            img: 'assets/imgs/Herramientas/ICON_8.png',
            name: 'Dr. Glister',
            btn: 'Baixe',
            link: 'https://www.amway.com.mx/downloads/AmwayBrasil/Calendario_Integrado_BR.pdf',
            description: 'Diga-me como é sua rotina de cuidados bucais e eu lhe direi quais produtos você deve usar. Dr. Glister chegou para ajudar você a seguir a rotina ideal e conquitar um sorriso radiante. '
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
