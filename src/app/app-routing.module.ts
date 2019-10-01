import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyListComponent } from '@asx/company-list/company-list.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { BanksComponent } from './banks/banks.component';
import { AboutComponent } from './about/about.component';

const asxRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'asxListedCompanies'},
	{path: 'asxListedCompanies' , component: CompanyListComponent},
	{path: 'automobiles' , component: AutomobilesComponent},
	{path: 'banks' , component: BanksComponent},
	{path: 'about' , component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(asxRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
