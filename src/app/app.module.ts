import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { GetCompaniesService } from './service/get-companies/get-companies.service';
import { ReadCompaniesService } from './service/read-companies/read-companies.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GetCompaniesService,
    ReadCompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
