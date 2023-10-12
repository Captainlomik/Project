import { Component, Input } from '@angular/core';
import { INavbarData } from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  template: `
  <ul *ngIf="collapsed && data.items && data.items.length > 0" class="sublevel-nav"
   [@submenu]="expanded ? 
   {value:'visible', 
   params:{transitionParams:'400ms cubic-bezier(0.86, 0, 0.07, 1)', height:'*'}} : 
   {value:'hidden',
   params:{transitionParams:'400ms cubic-bezier(0.86, 0, 0.07, 1)', height:'0'}}">

    <li *ngFor="let item of data.items" class="sublevel-nav-item">
      <a href="" class="sublevel-nav-link"
      *ngIf="item.items && item.items.length > 0" 
      (click)="handleClick(item)">
    <i class="sublevel-link-icon fa fa-circle"></i>
      <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
      <i class="menu-collapse-icon"  *ngIf="item.items && collapsed" 
      [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"></i>
  </a>

    <a class="sublevel-nav-link"  
      *ngIf="!item.items || (item.items && item.items.length === 0)" 
      [routerLink]="[item.routerLink]" 
      routerLinkActive="active-sublevel"
      [routerLinkActiveOptions]="{exact:true}"
    ><i class="sublevel-link-icon fa fa-circle"></i>
    <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
  </a>
  <div *ngIf="item.items && item.items.length > 0">
    <app-sublevel-menu [collapsed]="collapsed" [multiple]="multiple" [expanded]="expanded"></app-sublevel-menu>
  </div>
    </li>
  </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({ overflow: 'hidden' }),
      animate('{{transitionParams}}')]),
      transition('void=>*', animate(0))
    ])
  ]
})
export class SublevelMenuComponent {

  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

}