import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
  }

  openLink(){
    window.open('https://www.amway.com.mx/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway', '_blank');
  }

  navigateTo(route: Array<string>){
    this.router.navigate(route);
  }

}
