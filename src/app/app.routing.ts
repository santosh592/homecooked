import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChefboardComponent } from './chefboard/chefboard.component';
import { ChefdashboardComponent } from './chefdashboard/chefdashboard.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'intro',
  pathMatch: 'full'
}, {
  path: 'intro',
  component: IntroComponent,
  data: {
    title: 'Intro'
  }
}, {
  path: 'foodcart',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Angular Admin Template'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },

    },
    {
      path: ':rating',
      //loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      component: DashboardComponent,
      data: {
        title: 'Dashboard Page 1'
      },
    },
    {
      path: 'deliveryOpt/:deliveryOpt',
      //loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      component: DashboardComponent,
      data: {
        title: 'Dashboard Page 2'
      },
    },
    {
      path: 'dashboard/search',
      //loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      component: DashboardComponent,
      data: {
        title: 'Dashboard Page 3'
      },
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
}, {
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '',
  component: ChefboardComponent,
  data: {
    title: 'Angular Admin Template 1'
  },
  children: [
    {
      path: 'chefboard/:id',

      // loadChildren: () => import('./chefdashboard/chefdashboard.module').then(m => m.ChefDashboardModule),
      component: ChefdashboardComponent,
      data: {
        title: ' Chef Dashboard Page'
      }
    }
  ]
},
{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
