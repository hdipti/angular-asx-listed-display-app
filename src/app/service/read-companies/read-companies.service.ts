import { Injectable } from '@angular/core';
import { Company } from '@asx/company/Company.ts';
import { HttpClient } from '@angular/common/http';
import { FileioService } from '@asx/service/http/fileio.service.ts';

@Injectable({
  providedIn: 'root'
})
export class ReadCompaniesService extends FileioService {

  fileName = 'assets/ASXListedCompanies.csv';
  companiesArray : Company[] = [];

  constructor(httpClient: HttpClient) {
     super();
     this.httpClient = httpClient;
  }

  getCompanies() : Company[] {
   this.readCompanyCsv();
   return this.companiesArray;
  }

  readCompanyCsv() {
  	this.getFile(this.fileName);
  }

  extractData(data) {
     this.populateCompanies(data);
  }

  populateCompanies(data){
    let companyCSVArray = (<string>data).split(/\r\n|\n/);
      for (let i = 2; i < companyCSVArray.length-1; i++) { 
        this.addtoCompanyArray((<string>companyCSVArray[i]).split(','));
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
