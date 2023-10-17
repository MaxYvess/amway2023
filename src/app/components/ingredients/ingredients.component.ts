import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation, Mousewheel, Virtual } from 'swiper';
import { environment } from 'src/environments/environment';
// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Virtual ]);

declare var $: any;
declare var utag: any;
declare var window: any;

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SwiperModule],
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

    public ingredients: Array<any> = [
        {
            img: 'assets/imgs/Ingredientes/IMG_14.png',
            name: 'Alfalfa',
            description: 'Contém vitamina A, a qual é lipossolúvel e contribui para a formação e manutenção dos dentes, tecidos, membranas e pele saudáveis, além de ter importantes funções para a vista.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_6.png',
            name: 'Algas marinhas calcificadas',
            description: 'As algas calcificadas de cultivo em ambiente natural, que se encontram no litoral da Islândia, são uma das fontes mais concentradas de cálcio e magnésio naturais.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_4.png',
            name: 'Mirtilo',
            description: 'Contém ácido elágico que contribui para a restauração do sistema celular e antocinidina, que consiste em um grupo de fitonutrientes que possui potentes propriedades antioxidantes que favorecem a saúde do coração.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_15.png',
            name: 'Agrião',
            description: 'Contém fitonutrientes como isotiocianato, luteína, zeaxantina, isoflavonas e EGCG, os quais, entre outras coisas, ajudam a manter níveis saudáveis de colesterol e favorecem a função vascular e o crescimento celular saudável.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_10.png',
            name: 'Acerola',
            description: 'Cultivada na Fazenda Amway Nutrilite™ do Brasil. As acerolas dão origem a um extrato excepcionalmente rico em antioxidantes, vitamina C e outros fitonutrientes. Entre os seus benefícios, encontra-se a redução da fadiga e a formação de colágeno, além de apoiar a cicatrização e ajudar a regular o estresse.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_1.png',
            name: 'Espinafre',
            description: 'O espinafre contém uma combinação rica de nutrientes como carotenoides, vitamina C, vitamina K, ácido fólico, ferro e cálcio, além de luteína, kaempferol, nitratos e outros compostos vegetais que contribuem para a saúde ideal.'
        },
/*         {
            img: 'assets/imgs/Ingredientes/IMG_9.png',
            name: 'Espirulina',
            description: 'Alga microscópica que possui uma forma de espiral, azul esverdeada, rica em proteínas e ferro que, portanto, é ideal para vegetarianos. Além disso, contém um alto teor de vitamina B12, betacaroteno, cálcio, fósforo e vitamina E.'
        }, */
/*         {
            img: 'assets/imgs/Ingredientes/IMG_17.png',
            name: 'Extrato de semente de uva',
            description: 'Contém altos níveis de fitonutrientes e é rico em compostos antioxidantes que ajudam a proteger o corpo contra os radicais livres, além de conter resveratrol, que contribui para a saúde do coração.'
        }, */
/*         {
            img: 'assets/imgs/Ingredientes/IMG_8.png',
            name: 'L-cisteína',
            description: 'Aminoácido presente na proteína que contribui para a formação da pele e é básico nos processos de desintoxicação.'
        }, */
/*         {
            img: 'assets/imgs/Ingredientes/IMG_21.png',
            name: 'Levedura de cerveja',
            description: 'É uma das melhores fontes naturais de vitaminas do complexo B e contribui para o funcionamento do sistema nervoso. Intervém no metabolismo, no crescimento e na manutenção da pele.'
        }, */
        {
            img: 'assets/imgs/Ingredientes/IMG_20.png',
            name: 'Limão',
            description: 'Contém fitonutrientes como o betacaroteno e o alfacaroteno, os quais contribuem para a saúde da vista, ajudam a manter a hidratação da pele e favorecem o funcionamento do sistema imunológico.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_19.png',
            name: 'Tangerina',
            description: 'Contém hesperidina, que faz parte da família de fitonutrientes conhecidos como flavonoides e favorece o bom funcionamento do sistema cardiovascular.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_16.png',
            name: 'Salsinha',
            description: 'Entre os seus fitonutrientes, encontramos as isoflavonas, que possuem propriedades antioxidantes muito importantes e contribuem para a saúde do coração e dos ossos e para o crescimento celular.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_2.png',
            name: 'Rabanete',
            description: 'O rabanete é rico em vitamina C e potássio, além de ser uma poderosa fonte de fibra. Devido ao seu teor de vitamina, contribui para a proteção contra os radicais livres. '
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_7.png',
            name: 'Peixe-serra, anchova e sardinha',
            description: 'Nestes peixes de água fria encontram-se ácidos graxos como EPA e DHA, os quais contribuem para o funcionamento normal do coração. Além disso, substituir as gorduras saturadas pelas insaturadas na alimentação contribui para manter os níveis normais de colesterol no sangue.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_5.png',
            name: 'Soja, trigo e ervilha',
            description: 'Ao combinar estes três ingredientes, é possível formar uma proteína de alto valor biológico, com o benefício extra de não conter gorduras saturadas nem colesterol e ser de fácil digestão.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_18.png',
            name: 'Toranja',
            description: 'Contém licopeno que oferece importantes benefícios antioxidantes e ajuda a melhorar a saúde hepática.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_3.png',
            name: 'Cenoura',
            description: 'A cenoura é uma hortaliça que se destaca por seu teor de vitamina A, a qual contribui para a saúde da vista e ajuda a manter a hidratação da pele.'
        },
        
        
        
        
        
    ];
    public ingredients2: Array<any> = [
        {
            img: 'assets/imgs/Ingredientes/IMG_13.png',
            name: 'Micelas',
            description: 'Moléculas parecidas a um ímã que atraem e eliminam as impurezas.'
        },
        {
            
            img: 'assets/imgs/Ingredientes/IMG_11.png',
            name: 'Melancia',
            description: 'Um extrato de frutas que ajuda a proteger a pele contra os danos causados pelos radicais livres.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_12.png',
            name: 'Semente de chia branca',
            description: 'Cultivada na fazenda Nutrilite™ El Petacal, no México. Um dos superalimentos mais ricos da natureza e o ingrediente herói nos produtos Artistry™. Seus fitonutrientes ajudam a nutrir e proteger visivelmente a beleza da pele.'
        },  
        
    ];

    public ingredients3: Array<any> = [
  
        {
            img: 'assets/imgs/Ingredientes/IMG_25.png',
            name: 'Ceramida derivada do óleo de oliva:',
            description: 'Esse tipo especial de lipídio ajuda a manter a barreira de umidade da pele.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_26.png',
            name: 'Acerola cultivada pela Nutrilite™',
            description: 'Extrato de acerola verde rico em vitamina C, que ajuda a proporcionar proteção antioxidante. Nossa acerola verde é cultivada em uma fazenda Nutrilite™ com certificação orgânica, o que permite uma rastreabilidade exclusiva "da semente à pele".'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_24.png',
            name: 'Água de bambu',
            description: 'Com água de bambu e glicerina de origem vegetal para ajudar a hidratar a pele.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_22.png',
            name: 'REMINACT™',
            description: 'Nossa fórmula exclusiva REMINACT™ promove a remineralização, ajudando a depositar novamente os minerais no esmalte para fortalecer os dentes e torná-los mais resistentes às cáries.'
        },
       
    ];
    public ingredients4: Array<any> = [
  
        {
            img: 'assets/imgs/Ingredientes/IMG_23.png',
            name: 'Fórmula BIOQUEST',
            description: 'Tecnologia Bioquest Formula™, uma fórmula biodegradável, dermatologicamente testada, concentrada e de alta performance.'
        },   
    ];
    public certifications: Array<any> = [
        {
            title: 'Ingredientes com certificação orgânica',
            description: 'Esses extraordinários fitonutrientes vêm de plantas cultivadas nas fazendas Nutrilite™ com certificação orgânica ao redor do mundo. <br><br>Cada um deles é totalmente rastreável, da semente até o produto. Saiba mais sobre a rastreabilidade <b>aqui<b>.',
            route: ['tool', 7],
        },
        {
            title: 'Todos os nossos ingredientes naturais possuem NutriCert™!',
            description: '<b>NutriCert™</b> é o nosso programa de certificação agrícola que garante que as fazendas parceiras cumprem os mesmos padrões de qualidade (pureza, segurança e eficácia) que nós cumprimos nas nossas próprias fazendas. <br><br>Exige que sejam rastreáveis, ecologicamente sustentáveis e socialmente responsáveis. Controlando todo o processo, da semente até o suplemente, garantindo que sejam utilizados somente os ingredientes da mais alta qualidade nos produtos Nutrilite™.',
            route: null,
        },
        {
            title: 'Fazendas Nutrilite',
            description: 'As fazendas Nutrilite contam com certificação orgânica e estão distribuídas em mais de 26 milhões de metros quadrados nos Estados Unidos, México e Brasil.<br><br>É aí onde nascem todos os nossos ingredientes.',
            route: null,
        },
        {
            title: 'Ingredientes Botânicos',
            description: 'Usar os recursos da natureza na hora de criar os nossos produtos é a melhor forma de garantir fórmulas  <b>puras, seguras e eficazes.</b><br><br>Os nossos fitonutrientes de origem botânica vêm do melhor da natureza: as plantas. E merecem a sua confiança.',
            route: null,
        }
    ];
    public certifications2: Array<any> = [
    {
        title: 'Ingredientes Amway Home y Cuidado Personal',
        description: '<b>REMINACT:</b> ayuda a disminuir manchas de café, té o tabaco. Además, combate el sarro y la caries refrescando tu aliento al mismo tiempo con un suave sabor a menta.',
        route: null,
    },
    {
        title: 'Ingredientes cuidado personal y Amway Home',
        description: '<b>Fórmula BIOQUEST:</b> incluye ingredientes derivados de fuentes naturales como el aceite de coco, provee un alto desempeño siendo biodegradable.',
        route: null,
    },
    ];


    public tab: number = 1;
    public tab2: number = 1;
    public view: number = 1;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

        ngOnInit(): void {
            this.route.params.subscribe((params) => {
                if(params && params['id']){
                    let hostname = window.location.hostname;
                    let hostSplit = hostname.split('.');
                    let code = hostSplit[hostSplit.length - 1];
    
                    this.view = params['id'];
                    let utag_data = environment.utagInfo.ingredients[params['id'] - 1];
                    utag_data.site_webProperty_mod = hostname + ' | ecommerce';
                    utag_data.site_country = code;
                    utag_data.site_currencyCode = this.getCurrencyCode(code);
                  
                    window.utag_data = Object.assign(window.utag_data, utag_data);
                    setTimeout(() => { utag.view(window.utag_data);  }, 1000)
                }
            });
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

    navigateTo(route: any){
        if(route)
            this.router.navigate(route);
    }

    ngAfterViewInit(){
        window.addEventListener("mousemove", this.mouseAnimations);
        window.addEventListener('scroll', this.scrollAnimations, true);
    }
    
    ngOnDestroy() {
        window.removeEventListener("mousemove", this.mouseAnimations);
        window.removeEventListener('scroll', this.scrollAnimations, true);
    }

    scrollAnimations(){
        let parallax1: any = document.getElementById('parallax1');
        let parallax2: any = document.getElementById('parallax2');

        let parallax3: any = document.getElementById('parallax3');
        let parallax4: any = document.getElementById('parallax4');

        parallax1.style.top = - (window.pageYOffset * 0.4) + 'px';

        parallax2.style.top = + (window.pageYOffset * 0.2) + 'px';
        parallax2.style.right = - (window.pageYOffset * 0.2) + 'px';

        parallax3.style.bottom = + (window.pageYOffset * 0.2) + 'px';
        parallax3.style.left = - (window.pageYOffset * 0.4) + 'px';

        parallax4.style.bottom = - (window.pageYOffset * 0.3) + 'px';
        parallax4.style.right = - (window.pageYOffset * 0.4) + 'px';
        
    }
    
    mouseAnimations(event: any) {
        let parallax1: any = document.getElementById('parallax1');
        let parallax2: any = document.getElementById('parallax2');

        let parallax3: any = document.getElementById('parallax3');
        let parallax4: any = document.getElementById('parallax4');

        const position = -1;

        const x = (window.innerWidth - event.pageX * position) / 250;
        const y = (window.innerHeight - event.pageY * position) / 250;

        if(event.pageX < (window.innerWidth / 2)){
            parallax1.style.left = - x + 'px';
            parallax3.style.left = - x + 'px';
            parallax2.style.right = - x + 'px';
            parallax4.style.right = - x + 'px';
        }else {
            parallax1.style.left = + x + 'px';
            parallax3.style.left = + x + 'px';
            parallax2.style.right = + x + 'px';
            parallax4.style.right = + x + 'px';
        }

        if(event.pageY < (window.innerHeight / 2)){
            parallax1.style.top = - y + 'px';
            parallax3.style.bottom = - y + 'px'; //
            parallax2.style.top = - y + 'px';
            parallax4.style.bottom = - y + 'px'; //
        }else {
            parallax1.style.top = + y + 'px';
            parallax3.style.bottom = + y + 'px'; //
            parallax2.style.top = + y + 'px';
            parallax4.style.bottom = + y + 'px'; //
        }
    }

    goTo(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }
    openLink(){
        window.open('http://www.portalnutrilite.com.br/rastreabilidade/', '_blank');
      }
}
