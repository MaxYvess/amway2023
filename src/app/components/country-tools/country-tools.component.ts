import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [ CommonModule, RouterModule ],
    selector: 'app-country-tools',
    templateUrl: './country-tools.component.html',
    styleUrls: ['./country-tools.component.scss']
})
export class CountryToolsComponent implements OnInit {

    public tools: Array<any> = [
        {
            name: 'Catálogo irresistible',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: ''
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: ''
                }
            ]
        },
        {
            name: 'Looks irresistibles',
            countries: [
                                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: ''
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: ''
                }
            ]
        },
        {
            name: 'Perfiles irresistibles',
            countries: [
                                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: ''
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: ''
                }
            ]
        },
        {
            name: 'Infografías irresistible',
            countries: [
                                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: ''
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: ''
                }
            ]
        },
        {
            name: 'Repositorio',
            countries: [
                                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: ''
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: ''
                }
            ]
        },
        {
            name: 'ENTRENAMIENTOS IRRESISTIBLES',
            countries: [
                                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: ''
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: ''
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: ''
                }
            ]
        }
    ];

    public tool: any = {};

    constructor(private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params && params['id']){
                this.tool = this.tools[params['id'] - 1];
            }else {
                this.navigateTo(['tools']);
            }
        });
    }

    openLink(link: string){
        window.open(link, '_blank');
    }

    navigateTo(route: Array<string>){
        this.router.navigate(route);
    }

}
