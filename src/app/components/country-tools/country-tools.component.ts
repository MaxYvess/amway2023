import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var $: any;

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
                    link: 'https://viewer.ipaper.io/amway-latam/argentina/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://viewer.ipaper.io/amway-latam/chile/naturalmente-irresistibles/naturalmente-irresisitibles/'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://viewer.ipaper.io/amway-latam/colombia/naturalmente-irresisitibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://viewer.ipaper.io/amway-latam/costa-rica/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://viewer.ipaper.io/amway-latam/el-salvador/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://viewer.ipaper.io/amway-latam/guatemala/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://viewer.ipaper.io/amway-latam/honduras/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://viewer.ipaper.io/amway-latam/mexico/naturalmente-irresistibles/naturalmente-irresistibles/?page=1'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://viewer.ipaper.io/amway-latam/panama/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://viewer.ipaper.io/amway-latam/uruguay/naturalmente-irresistibles/naturalmente-irresistibles/'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://viewer.ipaper.io/amway-latam/venezuela/publicaciones-amway/'
                }
            ]
        },
        {
            name: 'Looks Irresistibles',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.mx/downloads/run-local/Material-Irresistibles-ES.zip'
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
            name: 'Perfiles Irresistibles',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Novedades/category.aspx?catid=1&subCatID=118'
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
            name: 'Infografías Irresistible',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
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
                    link: 'https://www.amway.com.ar/Novedades/ContenidoEditorial.aspx?postId=4229'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Novedades/ContenidoEditorial.aspx?postId=4776'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Novedades/ContenidoEditorial.aspx?postId=2867'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Novedades/ContenidoEditorial.aspx?postId=4723'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Novedades/ContenidoEditorial.aspx?postId=4721'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Novedades/ContenidoEditorial.aspx?postId=2841'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Novedades/ContenidoEditorial.aspx?postId=4722'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Novedades/ContenidoEditorial.aspx?postId=2627'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Novedades/ContenidoEditorial.aspx?postId=3703'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Novedades/ContenidoEditorial.aspx?postId=4777'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Novedades/ContenidoEditorial.aspx?postId=3109'
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
                    link: 'https://www.amway.com.ar/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway'
                }
            ]
        },
        {
            name: 'NUEVO EMPRESARIO',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/IRENew/Kit.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/IRENew/Reg.aspx'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.cl/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/IRENew/Reg.aspx'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/IRENew/Reg.aspx'
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

    goTo(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }

}
