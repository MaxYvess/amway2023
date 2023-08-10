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
        window.open('https://www.amway.com.br/pt/naturalmente-irresistiveis?utm_source=site&utm_medium=irresistiveis&utm_campaign=br_pt_landing_irresistiveis&utm_content=cta_compra&utm_term=boton_comprar', '_blank');
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
