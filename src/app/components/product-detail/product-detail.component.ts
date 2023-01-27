import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var bootstrap: any;

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
            id: 1, name: 'Daily Plus', 
            slogan: 'El poder de las frutas y los vegetales en tu vida', 
            modeOfUse: 'Tomar una tableta al día. Verifica el modo de uso en la página web de tu país.', 
            description: 'Un <span class="orange">producto práctico</span> para todas aquellas personas que buscan un suplemento dietario para <span class="orange">complementar</span> sus requerimientos <span class="orange">nutricionales.</span> <br><br> Con cinco <span class="orange">fitonutrientes</span> de la gama de los cinco colores; así como <span class="orange">12 vitaminas</span> y <span class="orange">10 minerales</span> que ayudan a complementar tu alimentación diaria.', 
            img: 'assets/imgs/Daily_Plus/ELEMENT_2.png',
            icon: 'assets/imgs/Daily_Plus/ICON_7.png',
            footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2018-0004293 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA.',
            reverse: false, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=117548&C=KQ&Brand=',
            color: '#f97c22',
            imgs: [
                'assets/imgs/Daily_Plus/ICON_8.png',
                'assets/imgs/Daily_Plus/ICON_4.png',
                'assets/imgs/Daily_Plus/ICON_5.png',
                'assets/imgs/Daily_Plus/ICON_3.png'
            ]
        },
        { 
            id: 2, name: 'Cal Mag D', 
            slogan: 'Dos fuentes de calcio en una tableta', 
            modeOfUse: 'Se recomienda acompañar una tableta tres veces al día con los alimentos. Verifica el modo de uso en la página web de tu país.',
            description: 'Este producto de nuestros <span class="purple">naturalmente irresistibles</span> está pensado para ayudar a la retención, absorción y utilización del calcio. <br><br> Aporta dos tipos de calcio importantes para el cuerpo: <span class="purple">El carbonato de calcio</span> y el que se obtiene por medio de <span class="purple">algas marinas</span> calcificadas. <br><br> Dentro de sus componentes está el calcio, la vitamina D, el magnesio y es enriquecido con zinc y manganeso.', 
            img: 'assets/imgs/Cal_Mag_D/ELEMENT_2.png',
            icon: 'assets/imgs/Cal_Mag_D/ICON_4.png',
            footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2013-0002850 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. ',
            reverse: true, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110609&C=KQ&Brand=',
            color: '#6e6697',
            imgs: [
                'assets/imgs/Cal_Mag_D/ICON_5.png',
                'assets/imgs/Cal_Mag_D/ICON_6.png',
                'assets/imgs/Cal_Mag_D/ICON_7.png',
                'assets/imgs/Cal_Mag_D/ICON_6.png'
            ]
        },
        { 
            id: 3, name: 'Proteína Vegetal', 
            slogan: 'La cantidad de Proteína que necesitas', 
            modeOfUse: 'Añade una cucharada sopera completa (aproximadamente 10 gr.) a un vaso de leche, jugo de fruta, o cualquier alimento. Mezcla o agita vigorosamente. Verifica el modo de uso en la página web de tu país.',
            description: `Proteína 100% de <span class="green">origen vegetal</span>que contiene proteína aislada de soya, trigo y guisante. La proteína es un <span class="green">macronutriente</span> que nuestro cuerpo necesita diariamente. No tiene sabor así que es ideal para mezclar con cualquier alimento y cada porción contiene <span class="green">8 gramos de proteína</span> y <span class="green">9 aminoácidos esenciales.</span>`, 
            img: 'assets/imgs/Proteina_Vegetal/ICON_9.png',
            icon: 'assets/imgs/Proteina_Vegetal/ICON_4.png',
            footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO RSIA01I304. ESTE PRODUCTO ES UN ALIMENTO. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. PERMISO DE PUBLICIDAD COFEPRIS 133300201A1623.',
            reverse: false, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110415&C=KQ&Brand=',
            color: '#0b7c15',
            imgs: [
                'assets/imgs/Proteina_Vegetal/ICON_8.png',
                'assets/imgs/Proteina_Vegetal/ICON_7.png',
                'assets/imgs/Proteina_Vegetal/ICON_8.png',
                'assets/imgs/Proteina_Vegetal/ICON_6.png'
            ]
        },
        { 
            id: 4, name: 'Omega 3 Plus',
            slogan: 'Los ácidos grasos que tu cuerpo necesita', 
            modeOfUse: 'Tomar de 1 a 3 cápsulas blandas al día, preferiblemente con las comidas. Verifica el modo de uso en la página web de tu país.',
            description: 'Una persona debería consumir por lo menos dos porciones de <span class="dark-blue">omega 3</span> a la semana. Este se encuentra en pescados y mariscos. <br><br> Con Omega 3 de Nutrilite vas a obtener ácidos grasos con sus ingredientes que se extraen de: <span class="dark-blue">caballa</span>, <span class="dark-blue">sardina</span> y <span class="dark-blue">anchoa.</span> <br><br> Este suplemento contiene una fórmula balanceada con <span class="dark-blue">EPA</span> y <span class="dark-blue">DHA</span>, estos son ácidos grasos esenciales que el cuerpo no produce de manera eficiente y por eso debemos obtenerlos de nuestra dieta.', 
            img: 'assets/imgs/Omega_3_Plus/ICON_10.png',
            icon: 'assets/imgs/Omega_3_Plus/ICON_4.png',
            footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2018-0004198 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA.',
            reverse: true, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110415&C=KQ&Brand=',
            color: '#275994',
            imgs: [
                'assets/imgs/Omega_3_Plus/ICON_6.png',
                'assets/imgs/Omega_3_Plus/ICON_9.png',
                'assets/imgs/Omega_3_Plus/ICON_7.png',
                'assets/imgs/Omega_3_Plus/ICON_8.png'
            ]
        },
        { 
            id: 5, name: 'C Plus',
            slogan: '8 horas de vitamina C', 
            modeOfUse: 'Tomar una tableta al día preferiblemente con alimentos. Verifica el modo de uso en la página web de tu país.',
            description: 'La <span class="dark-red">vitamina C</span> no es solo un antioxidante, es también un factor fundamental para la formación del colágeno en el cuerpo. <br><br> Con la ingesta  de una tableta al día ayudarás a tus defensas a mantenerse elevadas. <br><br> Está hecho con una fórmula que contiene <span class="dark-red">ingredientes botánicos</span> como el concentrado de <span class="dark-red">cereza acerola.</span>', 
            img: 'assets/imgs/C_Plus/ICON_9.png',
            icon: 'assets/imgs/C_Plus/ICON_4.png',
            footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. CHILE: SU USO NO ES RECOMENDADO PARA CONSUMO POR MENORES DE 8 AÑOS, EMBARAZADAS Y NODRIZAS, SALVO INDICACIÓN PROFESIONAL COMPETENTE Y NO REEMPLAZA UNA ALIMENTACIÓN BALANCEADA. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS, PANAMÁ: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE.URUGUAY: ESTOS PRODUCTOS NO SUSTITUYEN UNA ALIMENTACIÓN EQUILIBRADA. COLOMBIA: REGISTRO SANITARIO: SD2012-0002338 ESTE PRODUCTO ES UN SUPLEMENTO DIETARIO, NO ES UN MEDICAMENTO Y NO SUPLE UNA ALIMENTACIÓN EQUILIBRADA. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. ',
            reverse: false, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=122173&C=KQ&Brand=',
            color: '#ba1a2e',
            imgs: [
                'assets/imgs/C_Plus/ICON_6.png',
                'assets/imgs/C_Plus/ICON_7.png',
                'assets/imgs/C_Plus/ICON_6.png',
                'assets/imgs/C_Plus/ICON_8.png'
            ]
        },
        { 
            id: 6, name: ' B Plus /', smallName: 'B Complex Dual Release',
            slogan: 'El lado Bueno de la vida', 
            modeOfUse: 'Adultos: Tomar una tableta con alimentos preferiblemente. No masticar, romper o triturar. Verifica el modo de uso en la página web de tu país.',
            description: 'Con <span class="green">tecnología bicapa</span> de liberación prolongada, <span class="green">B complex</span> de Nutrilite, es un suplemento alimentario con <span class="green">8 vitaminas</span> del <span class="green">complejo</span> accesible a tu bolsillo.', 
            img: 'assets/imgs/B_Plus/ICON_9.png',
            icon: 'assets/imgs/B_Plus/ICON_4.png',
            footer: '',
            reverse: true, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&line=G&NavM=N&BC=110170',
            color: '#0b7c15',
            imgs: [
                'assets/imgs/B_Plus/ICON_6.png',
                'assets/imgs/B_Plus/ICON_8.png',
                'assets/imgs/B_Plus/ICON_6.png',
                'assets/imgs/B_Plus/ICON_7.png'
            ]
        },
        { 
            id: 7, name: 'HSN', 
            slogan: 'Belleza de adentro hacia afuera', 
            modeOfUse: 'Adultos: Tomar una tableta con alimentos preferiblemente. Verifica el modo de uso en la página web de tu país. ',
            description: 'Este producto contiene 30 mg de <span class="dark-pink">vitamina C</span> que contribuye a la formación de Colágeno. También contiene <span class="dark-pink">L - cisteína</span> un aminoácido que promueve la formación de <span class="dark-pink">queratina.</span> Otros ingredientes importantes son el <span class="dark-pink">colágeno hidrolizado, biotina, extracto de semilla de uva y vitamina c.</span>', 
            img: 'assets/imgs/HSN/ICON_10.png',
            icon: 'assets/imgs/HSN/ICON_4.png',
            footer: 'ARGENTINA: SUPLEMENTA DIETAS INSUFICIENTES. CONSULTE A SU MÉDICO Y/O FARMACÉUTICO. COSTA RICA, EL SALVADOR, GUATEMALA, HONDURAS: ESTOS PRODUCTOS NO SON MEDICAMENTOS. EL CONSUMO DE ESTOS PRODUCTOS ES RESPONSABILIDAD DE QUIEN LOS RECOMIENDA Y QUIEN LOS USA. HAZ DEPORTE. MÉXICO: ESTE PRODUCTO NO ES UN MEDICAMENTO. HAZ DEPORTE. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA. PERMISO DE PUBLICIDAD COFEPRIS 133300201A1623.',
            reverse: false, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&line=G&NavM=N&BC=110170',
            color: '#b83b61',
            imgs: [
                'assets/imgs/HSN/ICON_8.png',
                'assets/imgs/HSN/ICON_9.png',
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/HSN/ICON_6.png'
            ]
        },
        { 
            id: 8, name: 'Agua Micelar',
            slogan: 'Dale a tu piel lo que se merece', 
            modeOfUse: 'Para limpiar y desmaquillar la piel, pasa suavemente un algodón húmedo hasta que esté libre de maquillaje e impurezas. Para eliminar el maquillaje de los ojos, mantén un algodón húmedo sobre los ojos cerrados durante unos segundos y límpialo suavemente, sin frotarlo.',
            description: 'Recomendado para <span class="dark-red">todo tipo de piel, retira el maquillaje, acondiciona y refresca la piel</span>. No deja residuos oleosos y su enjuague es opcional. Ayuda a remover todo tipo de maquillaje, incluyendo los de larga duración y a prueba de agua.<br><br> El <span class="dark-red">agua micelar</span> está compuesta por <span class="dark-red">semilla de chía blanca, extracto de sandía</span> y <span class="dark-red">micelas.</span>', 
            img: 'assets/imgs/Agua_Micelar/ICON_5.png',
            icon: 'assets/imgs/Agua_Micelar/ICON_4.png',
            footer: '',
            reverse: true, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=123791&C=KQ&Brand=',
            color: '#ba1a2e',
            imgs: [
                'assets/imgs/Agua_Micelar/ICON_8.png',
                'assets/imgs/Agua_Micelar/ICON_6.png',
                'assets/imgs/Agua_Micelar/ICON_9.png',
                'assets/imgs/Agua_Micelar/ICON_8.png'
            ]
        },
        { 
            id: 9, name: 'Pasta de Dientes',
            slogan: 'Consigue una sonrisa radiante donde quiera que vayas', 
            modeOfUse: 'Coloca un poco de pasta sobre tu cepillo dental, lávate los dientes, enjuaga. Lávate los dientes después de cada comida.',
            description: 'Con su fórmula REMINACT™, <span class="purple">fortalecerás tus dientes</span>, aportando el <span class="purple">calcio</span> y el <span class="purple">fósforo</span> que han perdido, además de reparar el esmalte. Su boquilla es 44% más pequeña en comparación que otras pastas, para que ahorres a la hora de usarlo.<br><br> Entre sus beneficios está el <span class="purple">pulir</span> suavemente los dientes, <span class="purple">limpieza efectiva</span> y ayuda a mantener el tono natural de tus dientes.', 
            img: 'assets/imgs/Pasta_de_dientes/ICON_5.png',
            icon: 'assets/imgs/Pasta_de_dientes/ICON_4.png',
            footer: '',
            reverse: false, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=6833&C=KQ&Brand=',
            color: '#6e6697',
            imgs: [
                'assets/imgs/Pasta_de_dientes/ICON_9.png',
                'assets/imgs/Pasta_de_dientes/ICON_11.png',
                'assets/imgs/Pasta_de_dientes/ICON_10.png',
                'assets/imgs/Pasta_de_dientes/ICON_12.png'
            ]
        },
        { 
            id: 10, name: 'L.O.C.', smallName: 'Limpiador Multiusos', 
            slogan: 'El limpiador de superficies más versátil', 
            modeOfUse: 'En una cubeta o balde, mezcla 1 ½ tapa ó 30ml aproximadamente en 5 litros de agua.',
            description: 'Limpiador multiusos que puedes <span class="blue">usar sobre todo tipo de superficies</span> lavables. no necesita enjuagar y se retira fácilmente. Quita <span class="blue">manchas difíciles</span> es <span class="blue">seguro</span> de usar y no daña el planeta.<br><br> Con el podrás limpiar pisos, baños, cocinas, muebles, alfombras, telas y autos. Un solo L.O.C limpiador Multiusos <span class="blue">rinde 10 veces más</span> que un limpiador convencional.', 
            img: 'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_5.png',
            icon: 'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_4.png',
            footer: '',
            reverse: true, 
            link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=0001&C=KQ&Brand=',
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
                this.product = this.products[params['id'] - 1];
            }else {
                this.navigateTo(['products']);
            }
        });
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

}
