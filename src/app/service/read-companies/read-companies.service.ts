import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '@asx/company/Company.ts';

@Injectable({
  providedIn: 'root'
})
export class ReadCompaniesService {

  constructor(private httpClient: HttpClient) {}

  companiesArray : Company[] = [];
  companyCSVArray: string[];
  
  getCompanies() : Company[] {
   this.readCompanyCsv();
   return this.companiesArray;
  }

  readCompanyCsv() {
  	this.httpClient.get('assets/ASXListedCompanies.csv', {responseType: 'text'})
        .subscribe(data => { 
        	this.extractData(data),
          err => this.handleError(err)
        });
  }

  extractData(data) {
		  this.companyCSVArray = (<string>data).split(/\r\n|\n/);

       for (let i = 2; i < this.companyCSVArray.length; i++) { 
        let curruntCompany = (<string>this.companyCSVArray[i]).split(',');  
        let company: Company = new Company();  
        company.companyName = curruntCompany[0].replace(/['"]+/g, '').trim();  
        company.asxCode = curruntCompany[1].replace(/['"]+/g, '').trim();  
        company.industryGroup = curruntCompany[2].replace(/['"]+/g, '').trim();  
  
        this.companiesArray.push(company);  
      }  
  }

	handleError(err) {
	    console.log('something went wrong: ', err);
	}

}
