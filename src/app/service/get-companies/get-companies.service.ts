import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsxdataService } from '@asx/service/http/asxdata.service.ts';

@Injectable({
  providedIn: 'root'
})
export class GetCompaniesService extends AsxdataService {

	asxUrl = 'http://www.asx.com.au/asx/research/';
	fileName = 'ASXListedCompanies.csv';
	
   constructor(httpClient: HttpClient) {
   	 super();
     this.httpClient = httpClient;
   }
	
   getList() {
	   super.getCSVFromASX(this.asxUrl, this.fileName);
   }

   processData(data) {
     super.populateCompanies(data);
   }
}
