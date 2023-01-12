import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
            description: 'Héctor es un contador de 35 años que trabaja en una trasnacional 8 horas al día. Se levanta para ir al gimnasio mínimo 1 hora, dice que le da energía para empezar sus labores. Sus rutinas se enfocan en volumen muscular y cardio. Desayuna una hora después de haber terminado sus rutinas. Héctor se enfoca tanto en el gimnasio que quiere ver resultados pronto, por eso cuida su alimentación.',
            reverse: false,
            products: [
                {
                    name: 'Nutrilite Daily Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_1.png'
                },
                {
                    name: 'Nutrilite Cal Mag D (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_2.png'
                },
                {
                    name: 'Nutrilite Proteina Vegetal (450 gr)',
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
            personAge: 35,
            description: 'Angélica es madre, tiene 33 años, retomó sus estudios en la universidad. Por todas las labores que tiene (Familia, académicas y laborales del hogar) siente que no rinde lo suficiente. Ella cree que debe mejorar su alimentación porque ahí está la clave para que su cerebro funcione mejor.',
            reverse: true,
            products: [
                {
                    name: 'Nutrilite Omega 3 Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_4.png'
                },
                {
                    name: 'Nutrilite Daily Plus (90 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_5.png'
                },
                {
                    name: 'Nutrilite C Plus (60 tabs)',
                    img: 'assets/imgs/Soluciones/ELEMENT_6.png'
                }
            ]
        }
    ];

    public solution: any = {};


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

    toggle(){
        let solutionCard: any = document.getElementById('solution_detail_card');

        solutionCard.classList.toggle('open');
    }

    navigateTo(route: Array<string>){
        this.router.navigate(route);
    }

}

