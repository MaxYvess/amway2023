import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() public isOpen: boolean = false;
    @Output() public closeSidebar = new EventEmitter<any>();

    public isOpenSubMenu: boolean = false;
    public isOpenSubMenu2: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggle(){
        this.isOpenSubMenu = !this.isOpenSubMenu;
    }

    toggle2(){
        this.isOpenSubMenu2 = !this.isOpenSubMenu2;
    }

    close() {
        this.closeSidebar.emit(false);
    }

    openLink(){
        window.open('https://www.amway.com.br/pt/Nutri%C3%A7%C3%A3o/c/nutricao?utm_source=site&utm_medium=landing_irresistiveis&utm_campaign=br_pt&utm_content=cta_compreja&utm_content=irresistiveis', '_blank');
      }

}
