import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetCompaniesService {

	asxUrl = 'https://www.asx.com.au/asx/research/ASXListedCompanies.csv';
	httpOptions = {
  		headers: new HttpHeaders({
  			//'Access-Control-Allow-Origin': '*',
  		    'Access-Control-Allow-Origin': 'http://localhost:4200',
  		    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  			'Accept': 'application/text'
  		}),
	};
	constructor(private httpClient: HttpClient) { }
	
	getList() {

		this.httpClient.get(this.asxUrl, this.httpOptions)
		  .subscribe(res => {
		    console.log(res);
		  });

	}

}
