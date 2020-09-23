import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ChefboardComponent } from './chefboard/chefboard.component';
import { ChefnavigationComponent } from './chefnavigation/chefnavigation.component';
import { ChefdashboardComponent } from './chefdashboard/chefdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemFoodService } from './service/inmemorydbservice';
import { IntroComponent } from './intro/intro.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent ,DashboardComponent, ChefboardComponent, ChefnavigationComponent, ChefdashboardComponent, IntroComponent ],
  imports: [
    BrowserModule,NgbModule,Ng2SearchPipeModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemFoodService),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR-API-KEY-HERE',
      libraries: ['places']
    }),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
