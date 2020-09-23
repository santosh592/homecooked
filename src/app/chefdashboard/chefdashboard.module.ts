import { NgModule } from '@angular/core';
import { ChefdashboardComponent } from './chefdashboard.component';
import { DashboardRoutingModule } from './chefdashboard-routing/chefdashboard-routing.module';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';
import { LineChartComponent } from '../shared/line-chart/line-chart.component';
import { ChartsModule} from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    DashboardRoutingModule ,NgbModule,CommonModule
  ],
  declarations: [  ],
  providers: [
      
  ]
})
export class ChefDashboardModule { }
