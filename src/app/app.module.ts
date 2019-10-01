import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@asx/app-routing.module';
import { AppComponent } from '@asx/app.component';
import { TopBarComponent } from '@asx/top-bar/top-bar.component';
import { CompanyListComponent } from '@asx/company-list/company-list.component';
import { GetCompaniesService } from '@asx/service/get-companies/get-companies.service';
import { ReadCompaniesService } from '@asx/service/read-companies/read-companies.service';
import { HttpService } from '@asx/service/http/http.service.ts';
import { AsxdataService } from '@asx/service/http/asxdata.service.ts';
import { FileioService } from '@asx/service/http/fileio.service.ts';
import { DownloadFileService } from '@asx/service/download-file/download-file.service';
import { GetSelectedCompaniesService } from '@asx/service/get-companies/get-selected-companies.service.ts';
import { GetBanksService } from '@asx/service/get-companies/get-banks.service.ts';
import { GetAutomobilesService } from '@asx/service/get-companies/get-automobiles.service.ts';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { BanksComponent } from './banks/banks.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CompanyListComponent,
    AutomobilesComponent,
    BanksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GetCompaniesService,
    DownloadFileService,
    GetBanksService,
    GetAutomobilesService,
    ReadCompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
