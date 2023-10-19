import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var bootstrap: any;
declare var $: any;
declare var utag: any;
declare var window: any;

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.scss']
})
export class SolutionDetailComponent implements OnInit {

    public solutions: Array<any> = [
        {
            name: 'MOVIMENTO CONSTANTE',
            img: 'assets/imgs/Soluciones/IMG_1.png',
            icon: 'assets/imgs/Soluciones/ICON_6.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_5.png',
            personName: 'Heitor',
            personJob: 'Contador',
            personAge: 42,
            description: 'Trabalha 8 horas por dia em uma estatal, faz academia todos os días por pelo menos 1 hora, faz treinos para aumento da massa muscular 4 vezes por semana e 3 vezes de cárdio, não consome nenhum alimento antes do treino, toma café da manhã uma hora após o treino.',
            reverse: false,
            border: '#e16f64',
            products: [
                {
                    name: 'Nutrilite™ Daily Plus (45 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_1.png'
                },
                {
                    name: 'Nutrilite™ Cal Mag D',
                    img: 'assets/imgs/Soluciones/ELEMENT_2.png'
                },
                {
                    name: 'Nutrilite™ Proteína vegetal em pó',
                    img: 'assets/imgs/Soluciones/ELEMENT_3.png'
                }
            ],
            sizeimg:"width: 33%"
        },
        {
            name: 'DESAFIE SUAS IDEIAS',
            img: 'assets/imgs/Soluciones/IMG_2.png',
            icon: 'assets/imgs/Soluciones/ICON_1.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_2.png',
            personName: 'Angélica',
            personJob: 'Mãe',
            personAge: 33,
            description: 'Tem dois filhos gêmeos de 5 anos, voltou a cursar a faculdade de Direito, dorme pouco por causa das suas atividades familiares, acadêmicas e domésticas, não tem hora certa para fazer suas refeições, sente que não rende nas aulas nem nos, trabalhos da faculdade, Acha que deve melhorar a sua alimentação.',
            reverse: true,
            border: '#b55afe',
            products: [
                {
                    name: 'Nutrilite™ Ômega 3 (90 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_4.png'
                },
                {
                    name: 'Nutrilite™ Daily Plus (45 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_5.png'
                },
                {
                    name: 'Nutrilite™ Acerola C Mastigável',
                    img: 'assets/imgs/Soluciones/ELEMENT_6.png'
                }
            ],
            sizeimg:"width: 33%"
        },
        {
            name: 'SORRISO IDEAL',
            img: 'assets/imgs/Soluciones/IMG_3.jpg',
            icon: 'assets/imgs/Soluciones/ICON_12.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_7.png',
            personName: 'Fernando',
            personJob: 'Estudante universitário',
            personAge: 23,
            description: 'Solteiro, tem interesse em suplementar a alimentação, se preocupa com a saúde dos dentes, Vai ao dentista duas vezes por ano, Não tem o hábito de consumir alimentos que, são fontes de cálcio como leite e derivados.',
            reverse: false,
            border: '#539cf8',
            products: [
                {
                    name: 'Nutrilite™ Cal Mag D',
                    img: 'assets/imgs/Soluciones/ELEMENT_8.png'
                },
                {
                    name: 'Glister Multi-Action Creme Dental com Flúor',
                    img: 'assets/imgs/Soluciones/ELEMENT_7.png'
                }
            ],
            sizeimg:"width: 33%"
        },
        {
            name: 'BELEZA INTEGRAL',
            img: 'assets/imgs/Soluciones/IMG_19.png',
            icon: 'assets/imgs/Soluciones/ICON_13.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_8.png',
            personName: 'Juliana',
            personJob: 'Professora',
            personAge: 35,
            description: 'É professora de pré-escola (crianças de 4 anos), corre durante 1 hora, 4 vezes por semana, faz muitas atividades do trabalho ao ar libre, está interessada na saúde e no bem-estar da pele, almoça e lancha na escola e acha que não tem uma alimentação equilibrada, se preocupa em não estar consumindo os nutrientes necessários para o seu bem-estar.',
            reverse: true,
            border: '#b55afe',
            products: [
                {
                    name: 'Nutrilite™ Daily Plus (45 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_1.png'
                },
                {
                    name: 'Água Micelar Demaquilante e Limpador Artisty Skin Nutrition',
                    img: 'assets/imgs/Soluciones/ELEMENT_100.png'
                }
            ],
            sizeimg:"width: 33%"
        },
        {
            name: 'ATIVIDADE DIÁRIA',
            img: 'assets/imgs/Soluciones/IMG_4.png',
            icon: 'assets/imgs/Soluciones/ICON_14.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_9.png',
            personName: 'Henrique',
            personJob: 'Empresário',
            personAge: 50,
            description: 'Casado, trabalha com vendas durante o dia, é dono de um restaurante e ajuda a esposa no estabelecimento à noite, não faz exercícios regularmente porque não tem tempo,lida com um alto nível de estresse.',
            reverse: false,
            border: '#76C655',
            products: [
                {
                    name: 'Nutrilite™ Ômega 3 (90 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_101.png'
                },
                {
                    name: 'Nutrilite™ Proteína vegetal em pó',
                    img: 'assets/imgs/Soluciones/ELEMENT_16.png'
                },
       
            ],
            sizeimg:"width: 33%"
        },
        {
            name: 'NA MIRA',
            img: 'assets/imgs/Soluciones/IMG_55.png',
            icon: 'assets/imgs/Soluciones/ICON_15.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_10.png',
            personName: 'Marcela',
            personJob: 'Secretária',
            personAge: 45,
            description: 'Trabalha na frente do computador 9 horas por dia, não consome frutas e verduras com regularidade, tem interesse em consumir nutrientes que contribuam para sua vista, já que trabalha com computador há muitos anos.',
            reverse: true,
            border: '#ff7062',
            products: [
                {
                    name: 'Nutrilite™ Ômega 3 Plus (90 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_4.png'
                },
                {
                    name: 'Nutrilite™ Daily Plus (90 tab)',
                    img: 'assets/imgs/Soluciones/ELEMENT_5.png'
                },
            ],
            sizeimg:"width: 33%"
        },
        {
            name: 'ECOATIVO',
            img: 'assets/imgs/Soluciones/IMG_18.png',
            icon: 'assets/imgs/Soluciones/ICON_16.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_11.png',
            personName: 'Pedro',
            personJob: 'Funcionário',
            personAge: 40,
            description: 'Pai de família, mora com seus dois filhos, Acorda muito cedo para preparar a comida e realizar as tarefas domésticas, leva os filhos à escola, trabalha em uma instituição financeira das 8 às 17 horas, depois do jantar, limpa e arruma a cozinha, estuda inglês 1 hora antes de dormir, para se manter ativo, toma várias xícaras de café, tem notado manchas nos dentes e isso o preocupa, é um ecologista comprometido com a saúde do ser humano em equilíbrio com o meio ambiente.',
            reverse: false,
            border: '#4e9efb',
            products: [

                {
                    name: 'Glister Multi-Action Creme Dental com Flúor',
                    img: 'assets/imgs/Soluciones/ELEMENT_17.png'
                },
                {
                    name: 'L.O.C Limpador Multiuso',
                    img: 'assets/imgs/Soluciones/ELEMENT_18.png'
                }
            ],
            sizeimg:"width: 33%"
        },
        
        {
            name: 'SEMPRE RELUZENTE',
            img: 'assets/imgs/Soluciones/IMG_20.png',
            icon: 'assets/imgs/Soluciones/ICON_17.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_11.png',
            personName: 'Isabella',
            personJob: 'Funcionária',
            personAge: 45,
            description: 'Trabalha em um escritório 8 horas por dia e está constantemente exposta a telas de computadores e celulares. Faz exercícios em casa pelo menos 3 vezes por semana e leva seu filho de 2 anos ao ginásio em outros 2 dias. Embora esteja interessada em cuidar da pele do rosto e corpo, não tem muito tempo para isso. Tenta ter uma alimentação saudável, mas considera que não é uma dieta equilibrada, além disso, se preocupa por não estar consumindo os nutrientes necessários para o seu bem-estar e o da sua família.',
            reverse: false,
            border: '#ff7062',
            products: [

                {
                    name: 'Glister Multi-Action Creme Dental com Flúor',
                    img: 'assets/imgs/Soluciones/ELEMENT_20.png'
                },
                {
                    name: 'Nutrilite™ Daily Plus (90 tab)',
                 
                },
                {
                    name: 'Agua Micelar Skin Nutrition',
                 
                },
                {
                    name: 'G&H™ Loção Hidratante Corporal Refrescante',
                 
                }
            ],
            sizeimg:"width: 90%"
        },
    ];

    public solution: any = {};

    public modal: any;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

        ngOnInit(): void {
            this.route.params.subscribe((params) => {
                if(params && params['id']){
                    let hostname = window.location.hostname;
                    let hostSplit = hostname.split('.');
                    let code = hostSplit[hostSplit.length - 1];
                    
                    this.solution = this.solutions[params['id'] - 1];
                    let utag_data = environment.utagInfo.solution[params['id'] - 1];
                    utag_data.site_webProperty_mod = hostname + ' | ecommerce';
                    utag_data.site_country = code;
                    utag_data.site_currencyCode = this.getCurrencyCode(code);
                    
                    window.utag_data = Object.assign(window.utag_data, utag_data);
                    setTimeout(() => { utag.view(window.utag_data);  }, 1000)
                }else {
                    this.navigateTo(['solutions']);
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

    ngAfterContentInit(): void {
        this.modal = new bootstrap.Modal(document.getElementById('solution-detail'), {});
    }

    openModal(){
        this.modal.show();
    }

    closeModal(){
        this.modal.hide();
    }
    
    openLink(){
        window.open('https://www.amway.com.br/pt/Nutri%C3%A7%C3%A3o/c/nutricao?utm_source=site&utm_medium=landing_irresistiveis&utm_campaign=br_pt&utm_content=cta_compreja&utm_content=irresistiveis', '_blank');
      }

    toggle(){
        let solutionCard: any = document.getElementById('solution_detail_card');

        solutionCard.classList.toggle('open');
    }

    navigateTo(route: Array<string>){
        this.closeModal();
        this.router.navigate(route);
}
    goTo(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }

}

