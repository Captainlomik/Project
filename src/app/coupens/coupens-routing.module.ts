import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens.component';
import { CopenListComponent } from './copen-list/copen-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: CoupensComponent
  },
  {
    path: 'list',
    component: CopenListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
