import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '@asx/service/http/http.service.ts';

@Injectable({
  providedIn: 'root'
})
export abstract class GetSelectedCompaniesService extends HttpService {

  constructor(httpClient: HttpClient) {
   	 super();
     this.httpClient = httpClient;
  }

  getSelectedCompanies(criteria) {
  console.log(super.automobilesArray);
  	for (let i = 0; i < super.companiesArray.length-1; i++) {
  	 	if(super.companiesArray[i].industryGroup.valueOf() === criteria.valueOf()) {
			this.addSelectedCompanies(i);
  	 	} 
    } 
  }

  abstract addSelectedCompanies(i : number);
}
