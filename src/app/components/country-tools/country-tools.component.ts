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
                    link: 'https://www.amway.com.ar/downloads/misc/AR_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/downloads/misc/CL_Herramienta_Irresistible.pdf'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/downloads/misc/CO_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/downloads/misc/CR_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/downloads/misc/SV_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/downloads/misc/GT_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/downloads/misc/HN_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/downloads/misc/MX_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/downloads/misc/PA_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/downloads/misc/UY_Herramienta_Irresistible.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/downloads/misc/VE_Herramienta_Irresistible.pdf'
                }
            ]
        },
        {
            name: 'Infografías Irresistible',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/downloads/misc/Infografia_Perfiles_irresistibles_VE.pdf'
                },
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
        },
        {
            name: 'Daily Plus',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=117548&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=117549&C=BQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=117549&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=117548&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=117549&C=BO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=117549&C=FV&Brand='
                }
            ]
        },
        {
            name: 'Cal Mag D',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=110609&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&line=B&NavM=N&BC=110609'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=110609&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110609&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=110609&C=BO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=110609&C=FV&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=110609&C=AZ&Brand='
                }
            ]
        },
        {
            name: 'Proteína Vegetal',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=110415&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110415&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110415&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&line=B&NavM=N&BC=110415'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=110415&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&line=C&NavM=N&BC=110415'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110415&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110415&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=110415&C=BO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=110415&C=FV&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=110415&C=AZ&Brand='
                }
            ]
        },
        {
            name: 'Omega 3 Plus',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=122173&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=122173&C=BQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=122173&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=122173&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=122173&C=BO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=122173&C=FV&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=100107&C=AZ&Brand='
                }
            ]
        },
        {
            name: 'C Plus',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=109741&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=109741&C=BQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=109741&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=109741&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=109741&C=BO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=109741&C=FV&Brand='
                }
            ]
        },
        {
            name: 'B Plus / B Complex Dual Release',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=110178&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110181&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110170&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=110170&C=BQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=110170&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110170&C=CU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110170&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&line=G&NavM=N&BC=110170'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&line=F&NavM=N&BC=110178'
                }
            ]
        },
        {
            name: 'HSN',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=106678&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=106678&C=BQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=106678&C=OU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=106678&C=CU&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=106678&C=CT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=106678&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=106678&C=BO&Brand='
                }
            ]
        },
        {
            name: 'Agua Micelar',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=123791&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=123791&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=123791&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=123791&C=AF&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=123791&C=NE&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=123791&C=BI&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=123791&C=BF&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=123791&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=123791&C=AG&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=123791&C=FV&Brand='
                }
            ]
        },
        {
            name: 'Glister Pasta de Dientes',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=6833&C=PO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=0001&C=CV&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=6833&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124106&C=DT&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=Q&BC=6833&C=QB&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=6833&C=ER&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=6833&C=ET&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=6833&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=6833&C=DS&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=6833&C=FV&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=6833&C=AZ&Brand='
                }
            ]
        },
        {
            name: 'L.O.C.Limpiador Multiusos',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=R&BC=0001&C=RB&Brand='
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=0001&C=CA&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=0001&C=FO&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=S&BC=0001&C=SQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=G&BC=0001&C=GM&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=G&BC=0001&C=GP&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=0001&C=KQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=0001&C=FQ&Brand='
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=0001&C=FV&Brand='
                }
            ]
        }
    ]
    ;

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
