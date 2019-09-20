import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetCompaniesService {

	asxUrl = 'https://cors.io/?http://www.asx.com.au/asx/research/ASXListedCompanies.csv';
	httpOptions = {
  		headers: new HttpHeaders({
  			//'Access-Control-Allow-Origin': '*',
  		    'Access-Control-Allow-Origin': 'http://localhost:4200. http://www.asx.com.au',
  		    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  			'Accept': 'application/text'
  		}),
	};
	constructor(private httpClient: HttpClient) { }
	
	getList() {

		this.httpClient.get(this.asxUrl, this.httpOptions)
		  .subscribe(data => {
		    this.extractData(data),
            err => this.handleError(err)
		  });

	}

	extractData(res) {
	    let csvData = res['_body'] || '';
	  //  let parsedData = papa.parse(csvData).data;

	   // this.headerRow = parsedData[0];

	   // parsedData.splice(0, 1);
	   // this.csvData = parsedData;
    }

	handleError(err) {
	    console.log('something went wrong: ', err);
	}

}
