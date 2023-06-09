import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var utag: any;
declare var window: any;

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
        let hostname = window.location.hostname;
        let hostSplit = hostname.split('.');
        let code = hostSplit[hostSplit.length - 1];

        let utag_data = environment.utagInfo.sponsor;
        utag_data.site_webProperty_mod = hostname + ' | ecommerce';
        utag_data.site_country = code;
        utag_data.site_currencyCode = this.getCurrencyCode(code);

        window.utag_data = Object.assign(window.utag_data, utag_data);
        setTimeout(() => { utag.view(window.utag_data);  }, 1000)
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
  
  openLink(){
    window.open('https://www.amway.com.mx/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway', '_blank');
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
