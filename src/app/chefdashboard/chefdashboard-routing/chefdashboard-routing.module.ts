import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ChefdashboardComponent } from '../chefdashboard.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ChefdashboardComponent,
    data: {
      title: 'Dashboard Component 2'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class DashboardRoutingModule { }
