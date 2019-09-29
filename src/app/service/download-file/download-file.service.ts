import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { HttpService } from '@asx/service/http/http.service.ts';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService extends HttpService {

	fileName = 'ASXListedCompanies.csv';
	
    constructor(httpClient: HttpClient) {
   	 super();
     this.httpClient = httpClient;
    }

    saveDataToFile() {
     saveAs(super.companiesArray, this.fileName);
    }
}
