import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Company } from '@asx/company/Company.ts';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  asxResponse : string = '';
  companiesArray : Company[] = [];
  automobilesArray : Company[] = [];
  banksArray : Company[] = [];

  httpClient: HttpClient;
  headerValue = "Company";

  constructor() { }

  handleError(err: string) {
      console.log('something went wrong: ', err);
  }

  populateCompanies(data) {
    this.asxResponse = data;
    let companyCSVArray = (<string>data).split(/\r\n|\n/);
      for (let i = 0; i < companyCSVArray.length-1; i++) {
        if(this.isHeader(companyCSVArray, i)) {
          console.log('i inside if : '  + i);
          this.populateAsxCompanies(companyCSVArray, i+1);
          break;
        }
        console.log('i end of for : ' + i);
      } 
  }

  isHeader(companyCSVArray : string[], i : number) : boolean {
    if(companyCSVArray[i].includes(this.headerValue)){
      return true;
    }
    return false;
  }

  populateAsxCompanies(companyCSVArray : string[], i : number){
    for (let j = i; j < companyCSVArray.length-1; j++) {
      this.addtoCompanyArray((<string>companyCSVArray[j]).split(','));
    }
  }
  
  addtoCompanyArray(curruntCompany : string[]){
    let company: Company = new Company();  
    company.companyName = curruntCompany[0].replace(/['"]+/g, '').trim(); 
    company.asxCode = curruntCompany[1].replace(/['"]+/g, '').trim(); 
    company.industryGroup = curruntCompany[2].replace(/['"]+/g, '').trim();  

    this.companiesArray.push(company);  
  }
  
}
