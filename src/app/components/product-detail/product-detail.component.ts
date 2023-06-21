import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var bootstrap: any;
declare var $: any;
declare var utag: any;
declare var window: any;

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {

    public products: Array<any> = [
        { 
            productFlag:10,
            id: 1, name: 'Daily Plus', 
            slogan: 'O poder das frutas e dos vegetais na sua vida', 
            modeOfUse: 'Ingerir um tablete por dia do Nutrilite™ Daily Plus 90 tabletes - Suplemento Alimentar de vitaminas e minerais, junto com uma das refeições principais.', 
            description: 'Um <span class="orange">produto prático</span> para todos aqueles que procuram <span class="orange">complementar</span> as suas necessidades <span class="orange">nutricionais.</span> <br><br>Com cinco <span class="orange">fitonutrientes</span> da gama das cinco cores; assim como  <span class="orange">12 vitaminas</span> e <span class="orange">10 minerais</span> que ajudam a complementar a sua alimentação diária.', 
            img: 'assets/imgs/Daily_Plus/ELEMENT_2.png',
            icon: 'assets/imgs/Daily_Plus/ICON_7.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2018-0004293 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. ',
            reverse: false, 
            link: 'https://www.amway.com.br/pt/suplemento-daily-plus/p/117549?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-daily',
            color: '#f97c22',
            imgs: [
                'assets/imgs/Daily_Plus/ICON_8.png',
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/Daily_Plus/ICON_5.png',
                'assets/imgs/Daily_Plus/ICON_3.png'
            ]
        },
        {
            productFlag:11,
            id: 2, name: 'Cal Mag D', 
            slogan: 'Duas fontes de cálcio em um único tablete', 
            modeOfUse: 'Ingerir um tablete por dia, junto com uma das refeições.',
            description: 'Este produto dos nossos <span class="purple">naturalmente irresistíveis</span> foi concebido para ajudar na retenção, absorção e aproveitamento do cálcio. <br><br> Ele fornece dois tipos de cálcio que são importantes para o organismo: <span class="purple">carbonato de cálcio</span> e carbonato de cálcio obtido de <span class="purple">algas marinhas</span> calcificadas. <br><br> Com cálcio, magnésio, zinco, manganês e vitamina D.', 
            img: 'assets/imgs/Cal_Mag_D/ELEMENT_2.png',
            icon: 'assets/imgs/Cal_Mag_D/ICON_4.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2013-0002850 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA.',
            reverse: true, 
            link: 'https://www.amway.com.br/pt/Vitamina-D-Calcio-Magnesio/p/110609?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-VitaminaD',
            color: '#6e6697',
            imgs: [
                'assets/imgs/Cal_Mag_D/ICON_5.png',
                'assets/imgs/Cal_Mag_D/ICON_6.png',
                'assets/imgs/Cal_Mag_D/ICON_7.png',
                'assets/imgs/Cal_Mag_D/ICON_6.png'
            ]
        },
        { 
            productFlag:12,
            id: 3, name: 'Proteína Vegetal', 
            slogan: 'A porção de proteína que você precisa', 
            modeOfUse: 'Adicione uma colher de sopa cheia (aproximadamente 10 g) a um copo de leite, suco de frutas ou qualquer alimento. Misturar ou agitar.',
            description: `Proteína 100% <span class="green">vegetal</span>contendo proteína isolada de soja, trigo e ervilha. A proteína é um <span class="green">macronutriente</span> que nosso corpo precisa diariamente. Não tem sabor por isso é ideal para misturar com qualquer alimento e cada porção contém <span class="green">8 gramas de proteína</span> e <span class="green">9 aminoácidos essenciais.</span>`, 
            img: 'assets/imgs/Proteina_Vegetal/ICON_9.png',
            icon: 'assets/imgs/Proteina_Vegetal/ICON_4.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO RSIA01I304. ESTE PRODUCTO ES UN ALIMENTO. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. PERMISO DE PUBLICIDAD COFEPRIS 133300201A1623.',
            reverse: false, 
            link: 'https://www.amway.com.br/pt/Proteina-Vegetal-em-Po-Nutrilite/p/110415?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-proteina',
            color: '#0b7c15',
            imgs: [
                'assets/imgs/Proteina_Vegetal/ICON_8.png',
                'assets/imgs/Proteina_Vegetal/ICON_7.png',
                'assets/imgs/Proteina_Vegetal/ICON_8.png',
                'assets/imgs/Proteina_Vegetal/ICON_6.png'
            ]
        },
        { 
            productFlag:13,
            id: 4, name: 'Ômega 3',
            slogan: 'Os ácidos graxos que o seu corpo precisa', 
            modeOfUse: 'Tomar 3 cápsulas ao dia.',
            description: 'Uma pessoa deve consumir pelo menos duas porções de <span class="dark-blue">ômega 3</span> por semana. Eles são encontrados em peixes e mariscos.<br><br> Contém óleo de peixe proveniente de peixes de água fria, como <span class="dark-blue">sardinha</span>, <span class="dark-blue">cavalinha</span> e <span class="dark-blue">anchova.</span> <br><br> Oferece <span class="dark-blue">EPA</span> e <span class="dark-blue">DHA</span>, que são os dois ácidos graxos necessários para ajudar o funcionamento do organismo.', 
            img: 'assets/imgs/Omega_3_Plus/ICON_10.png',
            icon: 'assets/imgs/Omega_3_Plus/ICON_4.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2018-0004198 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA.',
            reverse: true, 
            link: 'https://www.amway.com.br/pt/Omega-3-Nutrilite---Oleo-de-Peixe-em-Capsulas-/p/A8919?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-omega3',
            color: '#275994',
            imgs: [
                'assets/imgs/Omega_3_Plus/ICON_6.png',
                'assets/imgs/Omega_3_Plus/ICON_9.png',
                'assets/imgs/Omega_3_Plus/ICON_7.png',
                'assets/imgs/Omega_3_Plus/ICON_8.png'
            ]
        },
        { 
            productFlag:14,
            id: 5, name: 'Acerola C',
            slogan: 'Tabletes mastigáveis divertidos que são fonte de Vitamina C', 
            modeOfUse: 'Para adultos e crianças acima de 4 anos de idade, mastigar um tablete por dia.',
            description: 'Recomendado para o público adulto e infantil, esse suplemento é fonte de <span class="dark-red">Vitamina C.</span><br><br> A Vitamina C auxilia: No metabolismo de proteínas e gorduras e Na absorção de ferro dos alimentos. <br><br> É feito com uma fórmula que contém vegetais como concentrado de <span class="dark-red">acerola.</span>', 
            img: 'assets/imgs/C_Plus/ICON_9.png',
            icon: 'assets/imgs/C_Plus/ICON_4.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2012-0002338 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA.',
            reverse: false, 
            link: 'https://www.amway.com.br/pt/vitamina-c-acerola-mastigavel/p/106710?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-acerola',
            color: '#ba1a2e',
            imgs: [
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/C_Plus/ICON_7.png',
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/C_Plus/ICON_8.png'
            ]
        },
        { 
            productFlag:15,
            id: 6, name: 'Vitamina B',
            slogan: 'O lado bom da vida', 
            modeOfUse: 'Adultos, consumir um tablete por dia junto com uma das refeições.',
            description: 'Fonte de oito vitaminas do <span class="green">complexo B</span>, entre elas, as Vitaminas B1, B2, B3, B5, B7 e B12, que auxiliam no metabolismo energético, o Vitamina B Nutrilite é um suplemento alimentar com todos os benefícios do complexo B.', 
            img: 'assets/imgs/B_Plus/ICON_9.png',
            icon: 'assets/imgs/B_Plus/ICON_4.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2018-0004312 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA.',
            reverse: true, 
            link: 'https://www.amway.com.br/pt/Vitamina-B-Nutrilite/p/110181?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-VitaminaB',
            color: '#0b7c15',
            imgs: [
                'assets/imgs/B_Plus/ICON_6.png',
                'assets/imgs/B_Plus/ICON_8.png',
                'assets/imgs/B_Plus/ICON_6.png',
                'assets/imgs/B_Plus/ICON_7.png'
            ]
        },
        { 
            productFlag:16,
            id: 7, name: 'HSN', 
            slogan: 'Belleza de adentro hacia afuera', 
            modeOfUse: 'Adultos: Tomar una tableta con alimentos preferiblemente. Verifica el modo de uso en la página web de tu país. ',
            description: 'Este producto contiene 30 mg de <span class="dark-pink">vitamina C</span> que contribuye a la formación de Colágeno. También contiene <span class="dark-pink">L - cisteína</span> un aminoácido que promueve la formación de <span class="dark-pink">queratina.</span> Otros ingredientes importantes son el <span class="dark-pink">colágeno hidrolizado, biotina, extracto de semilla de uva y vitamina c.</span>', 
            img: 'assets/imgs/HSN/ICON_10.png',
            icon: 'assets/imgs/HSN/ICON_4.png',
            //footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. PERMISO DE PUBLICIDAD COFEPRIS 133300201A1623.',
            reverse: false, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&line=G&NavM=N&BC=110170',
            color: '#b83b61',
            imgs: [
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/HSN/ICON_9.png',
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/HSN/ICON_6.png'
            ]
        },
        { 
            productFlag:17,
            id: 8, name: 'Água Micelar',
            slogan: 'Dê à sua pele o que ela merece', 
            modeOfUse: 'Utilizar o produto para limpar a pele e tirar a maquiagem.',
            description: 'Recomendado para <span class="dark-red">todos os tipos de pele, remove a maquilhagem, condiciona e refresca a pele.</span> Não deixa resíduo oleoso. Ajuda a remover todos os tipos de maquiagem, inclusive de longa duração e à prova d´água.<br><br> A <span class="dark-red">água micelar</span> é composta por <span class="dark-red">semente de chia branca, extrato de melancia</span> e <span class="dark-red">micelas.</span>', 
            img: 'assets/imgs/Agua_Micelar/ICON_5.png',
            icon: 'assets/imgs/Agua_Micelar/ICON_4.png',
            footer: '*CONSUMER PERCEPTION (MARKETVISION RESEARCH STUDY).',
            reverse: true, 
            link: 'https://www.amway.com.br/pt/Agua-Micelar-Demaquilante-e-Limpador-Artistry-Skin-Nutrition/p/123791?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-agua-micelar',
            color: '#ba1a2e',
            imgs: [
                'assets/imgs/Agua_Micelar/ICON_8.png',
                'assets/imgs/Agua_Micelar/ICON_6.png',
                'assets/imgs/Agua_Micelar/ICON_9.png',
                'assets/imgs/Agua_Micelar/ICON_8.png'
            ]
        },
        { 
            productFlag:18,
            id: 9, name: 'Creme Dental',
            slogan: 'Consiga um sorriso radiante onde quer que vá', 
            modeOfUse: 'Aplique o creme dental na escova de dentes e escove os dentes por, pelo menos, 1 minuto. Usar na escovação regular. Manter fora do alcance de crianças menores de 6 anos de idade. Em caso de ingestão, procure imediatamente um médico.',
            description: 'Com sua fórmula REMINACT™, você<span class="purple"> fortalecerá seus dentes</span>, fornecendo o <span class="purple">cálcio</span> e o <span class="purple">fósforo</span> que eles perderam, além de reparar o esmalte. Seu bocal é 44% menor em relação a outras pastas, assim você economiza na hora de usar.<br><br> Entre seus benefícios está o <span class="purple">polimento</span> suave dos dentes, a <span class="purple">limpeza eficaz</span> e ajuda a manter o tom natural dos dentes.', 
            img: 'assets/imgs/Pasta_de_dientes/ICON_5.png',
            icon: 'assets/imgs/Pasta_de_dientes/ICON_4.png',
            footer: '',
            reverse: false, 
            link: 'https://www.amway.com.br/pt/Glister-200g-Multi-Action-Creme-Dental-com-Fluor/p/E6833?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-creme-dental',
            color: '#6e6697',
            imgs: [
                'assets/imgs/Pasta_de_dientes/ICON_9.png',
                'assets/imgs/Pasta_de_dientes/ICON_11.png',
                'assets/imgs/Pasta_de_dientes/ICON_10.png',
                'assets/imgs/Pasta_de_dientes/ICON_12.png'
            ]
        },
        { 
            productFlag:19,
            id: 10, name: 'LOC™', smallName: 'Limpador Multiuso', 
            slogan: 'O limpador de superfícies mais versátil', 
            modeOfUse: 'Para limpeza geral com solução menos concentrada: adicione 30 ml (1½ tampa) do produto em um balde com 5 litros de água. Não é necessário enxaguar. Rende até 166 litros de solução.',
            description: 'Limpador multiusos que pode <span class="blue">utilizar em todo o tipo de superfícies</span> laváveis. não precisa ser enxaguado e é facilmente removido. O <span class="blue">removedor de manchas resistente</span> é <span class="blue">seguro</span> de usar e gentil com o planeta.<br><br> Com ele você pode limpar pisos, banheiros, cozinhas, móveis, tapetes, tecidos e carros. Um único L.O.C All-Purpose Cleaner <span class="blue">faz mais</span> do que um limpador convencional.', 
            img: 'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_5.png',
            icon: 'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_4.png',
            footer: '',
            reverse: true, 
            link: 'https://www.amway.com.br/pt/LOC-Limpador-Multiuso-Amway-Home/p/E0001?utm_source=site&utm_medium=home&utm_campaign=br_pt&utm_content=cta_compra&utm_term=irresistiveis-LOC',
            color: '#265894',
            imgs: [
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_8.png',
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_9.png',
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_8.png',
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_6.png'
            ]
        }
    ];
    public product: any = {};

    public modal: any = null;
    
    constructor(private router: Router,
        private route: ActivatedRoute) { }

        ngOnInit(): void {
            this.route.params.subscribe((params) => {
                if(params && params['id']){
                    let hostname = window.location.hostname;
                    let hostSplit = hostname.split('.');
                    let code = hostSplit[hostSplit.length - 1];
                    
                    this.product = this.products[params['id'] - 1];
                    let utag_data = environment.utagInfo.product[params['id'] - 1];
                    utag_data.site_webProperty_mod = hostname + ' | ecommerce';
                    utag_data.site_country = code;
                    utag_data.site_currencyCode = this.getCurrencyCode(code);
                    
                    window.utag_data = Object.assign(window.utag_data, utag_data);
                    //console.log(utag_data);
                    setTimeout(() => { utag.view(window.utag_data);  }, 1000)
                }else {
                    this.navigateTo(['products']);
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

    ngAfterViewInit(){
        this.modal = new bootstrap.Modal(document.getElementById('product-detail'), {});
        window.addEventListener("mousemove", this.mouseAnimations);
        window.addEventListener('scroll', this.scrollAnimations, true);
    }
    
    ngOnDestroy() {
        window.removeEventListener("mousemove", this.mouseAnimations);
        window.removeEventListener('scroll', this.scrollAnimations, true);
    }

    openLink(link: string){
        window.open(link, '_blank');
    }

    openModal(){
        this.modal.show();
    }

    closeModal(){
        this.modal.hide();
    }

    navigateTo(route: Array<any>){
        this.router.navigate(route);
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

}
