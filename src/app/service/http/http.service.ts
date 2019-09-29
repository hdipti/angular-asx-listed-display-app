import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Company } from '@asx/company/Company.ts';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  httpClient: HttpClient;
  companiesArray : Company[] = [];

  constructor() { }

  handleError(err: string) {
      console.log('something went wrong: ', err);
  }

  populateCompanies(data) {
    let companyCSVArray = (<string>data).split(/\r\n|\n/);
      for (let i = 2; i < companyCSVArray.length-1; i++) { 
        this.addtoCompanyArray((<string>companyCSVArray[i]).split(','));
      } 
   this.companiesArray;
  }

  addtoCompanyArray(curruntCompany : string[]){
    let company: Company = new Company();  
    company.companyName = curruntCompany[0].replace(/['"]+/g, '').trim(); 
    company.asxCode = curruntCompany[1].replace(/['"]+/g, '').trim(); 
    company.industryGroup = curruntCompany[2].replace(/['"]+/g, '').trim();  

    this.companiesArray.push(company);  
  }
  
}
