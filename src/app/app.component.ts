import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _iconConfiguradores = 'po-icon-settings';

  private _menuItems: Array<PoMenuItem> = [];
  get menuItems() {
    return this._menuItems;
  }

  ngOnInit() {
    this.setMenuItems();
  }

  private setMenuItems() {
    this._menuItems = [];

    this.estruturaMenu('/cadastro',
      'Cadastro',
      this._iconConfiguradores,
      null,
      'Cadastro'
    );
  }

  public estruturaMenu(linkPagina: any, label: string, iconMenu: string, action?: any, shortLabel?: string) {
    this._menuItems.push({
      action: action ? action : null,
      icon: iconMenu,
      label,
      link: linkPagina,
      shortLabel: shortLabel ? shortLabel : label
    });
  }

  private onClick() {
    alert('Clicked in menu item');
  }

}
