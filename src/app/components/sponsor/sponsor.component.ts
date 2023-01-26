import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLink(){
    window.open('https://www.amway.com.mx/Content/page_Content.aspx?Dest=/Main/Menu_2.0/NuevosEmpresarios/Inicio/GanaconAmway', '_blank');
  }

}
