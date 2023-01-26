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

}
