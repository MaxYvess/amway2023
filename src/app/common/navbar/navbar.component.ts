import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Output() public isOpenSidebar = new EventEmitter<any>();
    @Input() public isOpen: boolean = false;
    public productsDropdown: any = null;
    public ingredientsDropdown: any = null;
    public isOpenSubMenu: boolean = false;

    constructor() { }

    ngOnInit(): void {
        let dropdownEl = $('#productsDropdown')[0]; 
        this.productsDropdown = new bootstrap.Dropdown(dropdownEl);

        let dropdownEl2 = $('#ingredientsDropdown')[0]; 
        this.ingredientsDropdown = new bootstrap.Dropdown(dropdownEl2);
    }

    toggle(){
        this.isOpen = !this.isOpen;
        this.isOpenSidebar.next(this.isOpen);
    }

    openLink(){
        window.open('https://www.amway.com.br/pt/Nutri%C3%A7%C3%A3o/c/nutricao?utm_source=site&utm_medium=landing_irresistiveis&utm_campaign=br_pt&utm_content=cta_compreja&utm_content=irresistiveis', '_blank');
      }

    openSubMenu1(){
        this.productsDropdown.show();
    }

    closeSubMenu1(){
        this.productsDropdown.hide();
    }

    openSubMenu2(){
        this.ingredientsDropdown.show();
    }

    closeSubMenu2(){
        this.ingredientsDropdown.hide();
    }

}
