import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from '@asx/service/http/http.service.ts';

@Injectable({
  providedIn: 'root'
})
export abstract class AsxdataService extends HttpService {

 corsUrl = 'https://cors-anywhere.herokuapp.com/';
  httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'application/csv'
      })//,
      //responseType: 'text'
  }; 

  constructor() { 
  	super();
  }

  abstract saveDataToFile(data : any, fileName : string): void;

  getCSVFromASX(url: string, fileName: any){
    this.httpClient.get(this.corsUrl + url + fileName, this.httpOptions)
        .subscribe(data => { 
          this.saveDataToFile(data, fileName),
          err => this.handleError(err)
        });
  }
}
