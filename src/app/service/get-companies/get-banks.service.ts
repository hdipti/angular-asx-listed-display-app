import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetSelectedCompaniesService } from '@asx/service/get-companies/get-selected-companies.service.ts';

@Injectable({
  providedIn: 'root'
})
export class GetBanksService extends GetSelectedCompaniesService {

   criteria = 'Banks';

   constructor(httpClient: HttpClient) {
   	 super(httpClient);
   }

  getBanks() {
  	super.getSelectedCompanies(this.criteria);
  }

  addSelectedCompanies(i : number) {
    super.banksArray.push(super.companiesArray[i]);  
  }

}
