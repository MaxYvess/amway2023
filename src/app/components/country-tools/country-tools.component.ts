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
            name: 'Catálogo Irresistible',
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
                    img: 'assets/imgs/Compras/IMG_12.png',
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
                    img: 'assets/imgs/Compras/IMG_13.png',
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
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-irresistibles-BR.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
                }
            ]
        },
        {
            name: 'Perfiles irresistibles',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: 'https://www.amway.com.mx/downloads/AmwayBrasil/Infografia_Perfis_BR_2_3.pdf?'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Novedades/category.aspx?catid=1&subCatID=118'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.cl/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Novedades/category.aspx?catid=1&subCatID=118'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Novedades/category.aspx?catid=1&subCatID=118'
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
                    img: 'assets/imgs/Compras/IMG_12.png',
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
                    img: 'assets/imgs/Compras/IMG_13.png',
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
                    img: 'assets/imgs/Compras/IMG_12.png',
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
                    img: 'assets/imgs/Compras/IMG_13.png',
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
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: 'https://www.amway.com.mx/downloads/AmwayBrasil/Calendario_Integrado_BR.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Calendario_Integrado_INA_LATAM.pdf'
                }
            ]
        },
        {
            name: 'TRAZABILIDAD',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://traceability.amwayglobal.com/es-ar/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: 'http://www.portalnutrilite.com.br/rastreabilidade/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://traceability.amwayglobal.com/es-cl/'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://traceability.amwayglobal.com/es-co/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://traceability.amwayglobal.com/es-cr/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://traceability.amwayglobal.com/es-sv/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://traceability.amwayglobal.com/es-gt/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://traceability.amwayglobal.com/es-hn/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://traceability.amwayglobal.com/es-mx/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://traceability.amwayglobal.com/es-pa/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://traceability.amwayglobal.com/es-uy/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://traceability.amwayglobal.com/es-ve/'
                }
            ]
        },
        {
            name: 'KIT DE INICIO',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://traceability.amwayglobal.com/es-ar/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: 'http://www.portalnutrilite.com.br/rastreabilidade/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://traceability.amwayglobal.com/es-cl/'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://traceability.amwayglobal.com/es-co/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://traceability.amwayglobal.com/es-cr/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://traceability.amwayglobal.com/es-sv/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://traceability.amwayglobal.com/es-gt/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://traceability.amwayglobal.com/es-hn/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://traceability.amwayglobal.com/es-mx/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://traceability.amwayglobal.com/es-pa/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://traceability.amwayglobal.com/es-uy/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://traceability.amwayglobal.com/es-ve/'
                }
            ]
        },
        {
            name: 'PARA EMPEZAR GANANDO',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://traceability.amwayglobal.com/es-ar/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_2.png',
                    link: 'http://www.portalnutrilite.com.br/rastreabilidade/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://traceability.amwayglobal.com/es-cl/'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://traceability.amwayglobal.com/es-co/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://traceability.amwayglobal.com/es-cr/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://traceability.amwayglobal.com/es-sv/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://traceability.amwayglobal.com/es-gt/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://traceability.amwayglobal.com/es-hn/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://traceability.amwayglobal.com/es-mx/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://traceability.amwayglobal.com/es-pa/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://traceability.amwayglobal.com/es-uy/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://traceability.amwayglobal.com/es-ve/'
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
