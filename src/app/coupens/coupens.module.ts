import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CoupensComponent } from './coupens.component';
import { CopenListComponent } from './copen-list/copen-list.component';


@NgModule({
  declarations: [
    CoupensComponent,
    CopenListComponent,
  ],
  imports: [
    CommonModule,
    CoupensRoutingModule,
  ]
})
export class CoupensModule { }
