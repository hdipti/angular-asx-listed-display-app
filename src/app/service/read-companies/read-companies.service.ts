import { Injectable } from '@angular/core';
import { Company } from '@asx/company/Company.ts';
import { HttpClient } from '@angular/common/http';
import { FileioService } from '@asx/service/http/fileio.service.ts';

@Injectable({
  providedIn: 'root'
})
export class ReadCompaniesService extends FileioService {

  fileName = 'assets/ASXListedCompanies.csv';

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
}
