import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var bootstrap: any;
declare var $: any;

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
            name: 'MOVIMIENTO CONSTANTE',
            img: 'assets/imgs/Soluciones/IMG_1.png',
            icon: 'assets/imgs/Soluciones/ICON_6.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_5.png',
            personName: 'Héctor',
            personJob: 'Contador',
            personAge: 35,
            description: 'Héctor trabaja en una trasnacional 8 horas al día. Se levanta para ir al gimnasio mínimo 1 hora, dice que le da energía para empezar sus labores. Sus rutinas se enfocan en volumen muscular y cardio. Desayuna una hora después de haber terminado sus rutinas. Héctor se enfoca tanto en el gimnasio que quiere ver resultados pronto, por eso cuida su alimentación.',
            reverse: false,
            border: '#e16f64',
            products: [
                {
                    name: 'Daily Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_1.png'
                },
                {
                    name: 'Cal Mag D (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_2.png'
                },
                {
                    name: 'Proteína Vegetal (450 gr)',
                    img: 'assets/imgs/Soluciones/ELEMENT_3.png'
                }
            ]
        },
        {
            name: 'DESAFÍA TUS IDEAS',
            img: 'assets/imgs/Soluciones/IMG_2.png',
            icon: 'assets/imgs/Soluciones/ICON_1.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_2.png',
            personName: 'Angélica',
            personJob: 'Madre',
            personAge: 33,
            description: 'Angélica retomó sus estudios en la universidad. Por todas las labores que tiene (Familia, académicas y laborales del hogar) siente que no rinde lo suficiente. Ella cree que debe mejorar su alimentación porque ahí está la clave para que su cerebro funcione mejor.',
            reverse: true,
            border: '#b55afe',
            products: [
                {
                    name: 'Omega 3 Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_4.png'
                },
                {
                    name: 'Daily Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_5.png'
                },
                {
                    name: 'C Plus (60 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_6.png'
                }
            ]
        },
        {
            name: 'SONRISA IDEAL',
            img: 'assets/imgs/Soluciones/IMG_3.jpg',
            icon: 'assets/imgs/Soluciones/ICON_12.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_7.png',
            personName: 'Hernanado',
            personJob: 'Estudiante universitario',
            personAge: 23,
            description: 'Hernando está soltero y una de las cosas que más le interesa es tener una buena sonrisa. Va al odontólogo dos veces al año, pero por costumbre no consume alimentos ricos en Calcio.',
            reverse: false,
            border: '#539cf8',
            products: [
                {
                    name: 'Cal Mag D (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_8.png'
                },
                {
                    name: 'Glister Pasta de Dientes Multiacción con Fluoruro',
                    img: 'assets/imgs/Soluciones/ELEMENT_7.png'
                }
            ]
        },
        {
            name: 'BELLEZA INTEGRAL',
            img: 'assets/imgs/Soluciones/IMG_19.png',
            icon: 'assets/imgs/Soluciones/ICON_13.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_8.png',
            personName: 'Juliana',
            personJob: 'Educadora',
            personAge: 35,
            description: 'Por su trabajo, muchas de sus actividades son al aire libre. Le interesa mucho el bienestar de su piel. Corre una hora,  cuatro veces a la semana. Su almuerzo y refrigerios los toma en el colegio, cree que su alimentación no está balanceada.',
            reverse: true,
            border: '#b55afe',
            products: [
                {
                    name: 'Daily Plus (30/90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_1.png'
                },
                {
                    name: 'HSN',
                    img: 'assets/imgs/Soluciones/ELEMENT_14.png'
                },
                {
                    name: 'Agua Micelar Skin Nutrition',
                    img: 'assets/imgs/Soluciones/ELEMENT_15.png'
                }
            ]
        },
        {
            name: 'ACTIVIDAD DIARIA',
            img: 'assets/imgs/Soluciones/IMG_4.png',
            icon: 'assets/imgs/Soluciones/ICON_14.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_9.png',
            personName: 'Enrique',
            personJob: 'Empresario',
            personAge: 50,
            description: 'Enrique está casado y todas las noches, después de trabajar todo el día en ventas, le ayuda a su esposa. No realiza ejercicio regularmente porque no le queda tiempo. Maneja mucho estrés y le preocupa su bienestar cardiovascular.',
            reverse: false,
            border: '#76C655',
            products: [
                {
                    name: 'Omega 3 Plus (30/60 TAB)',
                    img: 'assets/imgs/Soluciones/ELEMENT_4.png'
                },
                {
                    name: 'Proteína Vegetal (450 gr)',
                    img: 'assets/imgs/Soluciones/ELEMENT_16.png'
                },
                {
                    name: 'B Plus (60 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_11.png'
                }
            ]
        },
        {
            name: 'EN LA MIRA',
            img: 'assets/imgs/Soluciones/IMG_55.png',
            icon: 'assets/imgs/Soluciones/ICON_15.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_10.png',
            personName: 'Marcela',
            personJob: 'Administradora',
            personAge: 45,
            description: 'Marcela trabaja 9 horas frente a un computador. No consume frutas y vegetales de forma regular, pero si le interesan los nutrientes que le ayuden a mejorar su visión ya que lleva muchos años frente al computador. También le interesa saber cómo puede ayudar a la salud visual de sus padres que ya están en la tercera edad.',
            reverse: true,
            border: '#ff7062',
            products: [
                {
                    name: 'Omega 3 Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_4.png'
                },
                {
                    name: 'Daily Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_10.png'
                },
            ]
        },
        {
            name: 'ECO ACTIVO',
            img: 'assets/imgs/Soluciones/IMG_18.png',
            icon: 'assets/imgs/Soluciones/ICON_16.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_11.png',
            personName: 'Pedro',
            personJob: 'Empleado',
            personAge: 40,
            description: 'Pedro es cabeza de familia con dos hijos. Se levanta temprano para preparar alimentos y hacer tareas del hogar. Trabaja de 8 a.m a 5 p.m, después cena, limpia y organiza toda la cocina. Estudia inglés una hora y para mantenerse activo toma mucho café. Es también un ecologista comprometido con la salud del ser humano en equilibrio con el medio ambiente.',
            reverse: false,
            border: '#4e9efb',
            products: [
                {
                    name: 'B Plus (60 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_12.png'
                },
                {
                    name: 'Glister Pasta de Dientes Multiacción con Fluoruro',
                    img: 'assets/imgs/Soluciones/ELEMENT_7.png'
                },
                {
                    name: 'L.O.C Limpiador Multiusos',
                    img: 'assets/imgs/Soluciones/ELEMENT_13.png'
                }
            ]
        },
        
    ];

    public solution: any = {};

    public modal: any;

    constructor(private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params && params['id']){
                this.solution = this.solutions[params['id'] - 1];
            }else {
                this.navigateTo(['solutions']);
            }
        });
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

