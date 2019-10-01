import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetSelectedCompaniesService } from '@asx/service/get-companies/get-selected-companies.service.ts';

@Injectable({
  providedIn: 'root'
})
export class GetAutomobilesService extends GetSelectedCompaniesService {

  criteria = 'Automobiles & Components';

  constructor(httpClient: HttpClient) {
   	 super(httpClient);
  }

  getAutomobiles() {
    if(!super.automobilesArray){
      super.getSelectedCompanies(this.criteria);  
    }
  }

  addSelectedCompanies(i : number){
    console.log(super.companiesArray[i]);
    super.automobilesArray.push(super.companiesArray[i]);  
  }

}
