import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var utag: any;
declare var window: any;

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
            subtitle: 'Selecciona la bandera de tu país para accesar al material.',
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
            subtitle: 'Selecciona la bandera de tu país para accesar al material.',
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
            subtitle: 'Selecciona la bandera de tu país para accesar al material.',
            name: 'Perfiles Irresistibles',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/downloads/misc/AR_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=ar_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/downloads/misc/CL_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=cl_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/downloads/misc/CO_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=co_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/downloads/misc/CR_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=cr_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/downloads/misc/SV_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=sv_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/downloads/misc/GT_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=gt_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/downloads/misc/HN_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=hn_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/downloads/misc/MX_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=mx_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/downloads/misc/PA_Herramienta_Irresistible.pdf?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=pa_es_irresistibles&utm_content=cta_ver&utm_term=herramienta_irresistible'
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
            subtitle: 'Selecciona la bandera de tu país para accesar al material.',
            name: 'Infografías Irresistible',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=ar_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=cl_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=co_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=cr_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=sv_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=gt_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=hn_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=mx_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.mx/downloads/misc/Infografia_Perfiles_irresistibles.pdf?utm_source=site_irresistibles&utm_medium=home&utm_campaign=pa_es_irresistibles&utm_content=cta_link&utm_term=infografia_perfiles'
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
            subtitle: 'Selecciona la bandera de tu país para accesar al material.',
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
            subtitle: 'Selecciona la bandera de tu país para accesar al material.',
            name: 'Entrenamientos Irresistibles',
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
           
            name: 'Trazabilidad',
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
            subtitle: 'Selecciona la bandera de tu país para accesar al sitio.',
            name: 'Nuevo Empresario',
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
            subtitle: 'Selecciona la bandera de tu país para auspiciar.',
            name: 'Auspicia',
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
                    link: 'https://www.amway.com.sv/IRENew/Reg.aspx?utm_source=site_Irresistibles&utm_medium=home&utm_campaign=sv_es&utm_content=cta_link&utm_term=registro'
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
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'Daily Plus',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&line=I&NavM=N&BC=126009&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=117549&C=BQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es__landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=117549&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CU&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=117549&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=126010&C=KH&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=117549&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=117549&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-daily'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'Cal Mag D',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=110609&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&line=B&NavM=N&BC=110609&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=110609&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CU&Brand=&utm_source=irresistibles&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110609&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110609&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=110609&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=110609&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=110609&C=AZ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ve_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-CalMagD'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'Proteína Vegetal',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=110415&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110415&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110415&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&line=B&NavM=N&BC=110415&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=110415&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&line=C&NavM=N&BC=110415&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110415&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=110415&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=110415&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=110415&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=110415&C=AZ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ve_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-proteina'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'Omega 3 Plus',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=122173&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=122173&C=BQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=122173&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CU&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=122173&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=122173&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=122173&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=122173&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=100107&C=AZ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ve_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-omega'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'C Plus',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=109741&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=109741&C=BQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=109741&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CU&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=109741&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=109741&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=109741&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=109741&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Cplus'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'B Plus / B Complex Dual Release',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=110178&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110181&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110170&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=110170&C=BQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=110170&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110170&C=CU&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=110170&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&line=G&NavM=N&BC=110170&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&line=F&NavM=N&BC=110178&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-Bplus'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'HSN',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=106678&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=106678&C=BQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=O&BC=106678&C=OU&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=106678&C=CU&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=106678&C=CT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=106678&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=106678&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-HSN'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'Agua Micelar',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=P&BC=123791&C=PO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=123791&C=CV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=123791&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=123791&C=AF&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=123791&C=NE&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=123791&C=BI&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=123791&C=BF&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=123791&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=A&BC=123791&C=AG&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=123791&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-agua-micelar'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'Pasta de Dientes Glister ',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=124106&C=NL&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124106&C=BM&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cl_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124106&C=BA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124106&C=DT&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=Q&BC=124106&C=QB&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124106&C=ER&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124106&C=ET&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=L&BC=124106&C=LV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124106&C=DS&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124106&C=BO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                },
                {
                    img: 'assets/imgs/Compras/IMG_10.png',
                    link: 'https://www.amway.com.ve/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124106&C=DB&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ve_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-pasta-dientes'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar tu compra.',
            name: 'L.O.C.Limpiador Multiusos',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=R&BC=0001&C=RB&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=ar_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=C&BC=0001&C=CA&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=co_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=0001&C=FO&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=cr_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=S&BC=0001&C=SQ&Brand=&utm_source=site&utm_medium=home&utm_campaign=sv_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=G&BC=0001&C=GM&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=gt_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=G&BC=0001&C=GP&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=hn_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=K&BC=0001&C=KQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=mx_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=0001&C=FQ&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=pa_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=F&BC=0001&C=FV&Brand=&utm_source=site&utm_medium=irresistibles&utm_campaign=uy_es_landing_irresistibles&utm_content=cta_compra&utm_term=irresistibles-LOC'
                }
            ]
        },
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar',
            name: 'Trazabilidad Glister',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://amway.com.ar/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=ar_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://amway.cl/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=cl_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://amway.com.co/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=co_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://amway.co.cr/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=cr_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://amway.com.sv/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=sv_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://amway.com.gt/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=gt_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://amway.com.hn/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=hn_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://amway.com.mx/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=mx_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://amway.com.pa/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=pa_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://amway.com.uy/drglister/#/traceability?utm_source=site&utm_medium=home&utm_campaign=uy_es_site_irresistibles&utm_content=cta_conoce&utm_term=trazabilidad_glister'
                },
         
            ]
        } ,
         {
            subtitle: 'Selecciona la bandera de tu país para poder empezar',
            name: 'Dr. Glister',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://amway.com.ar/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=ar_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://amway.cl/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=cl_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://amway.com.co/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=co_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://amway.co.cr/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=cr_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://amway.com.sv/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=sv_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://amway.com.gt/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=gt_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://amway.com.hn/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=hn_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://amway.com.mx/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=mx_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://amway.com.pa/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=pa_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
                {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://amway.com.uy/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=uy_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                },
         
            ]
        }  ,
        {
            subtitle: 'Selecciona la bandera de tu país para poder empezar',
            name: 'Loción Corporal Refrescante',
            countries: [
                {
                    img: 'assets/imgs/Compras/IMG_1.png',
                    link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&line=I&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=ar_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_3.png',
                    link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&line=K&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=cl_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                }, 
                {
                    img: 'assets/imgs/Compras/IMG_12.png',
                    link: 'https://www.amway.com.co/Store/Catalogue.aspx?show=PrdDetail&line=L&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=co_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_4.png',
                    link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&line=J&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=cr_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_5.png',
                    link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&line=B&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=sv_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_13.png',
                    link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&line=I&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=gt_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_6.png',
                    link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&line=L&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=hn_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_7.png',
                    link: 'https://www.amway.com.mx/Store/Catalogue.aspx?show=PrdDetail&line=I&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=mx_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
                {
                    img: 'assets/imgs/Compras/IMG_8.png',
                    link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&line=Q&NavM=N&BC=125893&utm_source=site_Irresistibles&utm_medium=home&utm_campaign=pa_es_gyh&utm_content=cta_compra&utm_term=Locion_corporal_refrescante'
                },
             /*    {
                    img: 'assets/imgs/Compras/IMG_9.png',
                    link: 'https://amway.com.uy/drglister/#/doctor-glister?utm_source=site&utm_medium=home&utm_campaign=uy_es_site_irresistibles&utm_content=cta_conoce&utm_term=recomendador_glister'
                }, */
         
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
                let hostname = window.location.hostname;
                let hostSplit = hostname.split('.');
                let code = hostSplit[hostSplit.length - 1];
                
                this.tool = this.tools[params['id'] - 1];
                let utag_data = environment.utagInfo.country[params['id'] -1];
                utag_data.site_webProperty_mod = hostname + ' | ecommerce';
                utag_data.site_country = code;
                utag_data.site_currencyCode = this.getCurrencyCode(code);
                
                window.utag_data = Object.assign(window.utag_data, utag_data);               
                setTimeout(() => { utag.view(window.utag_data);  }, 1000)
            }else {
                this.navigateTo(['tools']);
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
