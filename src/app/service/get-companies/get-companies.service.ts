import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCompaniesService {

	asxUrl = 'https://cors-anywhere.herokuapp.com/http://www.asx.com.au/asx/research/ASXListedCompanies.csv';
	httpOptions = {
		responseType: 'text',
  		headers: new HttpHeaders({
  			'Access-Control-Allow-Origin': '*',
  		    'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept',
  		    'Access-Control-Allow-Methods': 'GET',
  		    'Content-Type': 'application/csv'
  		}) 
	}; 
	
	constructor(private httpClient: HttpClient) { }
	
	getList() {

		console.log(this.httpOptions.headers);
		this.httpClient.get(this.asxUrl, this.httpOptions)
		  .subscribe(data => {
		    this.extractData(data),
            err => this.handleError(err)
		}); 
	}

	extractData(res) {
	    console.log(res);
    }

	handleError(err) {
	    console.log('something went wrong: ', err);
	}

}
