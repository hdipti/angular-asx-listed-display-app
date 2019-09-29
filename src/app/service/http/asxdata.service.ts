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
        'Content-Type': 'application/ms-excel'
      }),
      responseType: 'text' as 'text'
    }; 

  constructor() { 
  	super();
  }

  abstract processData(data : any);

  getCSVFromASX(url: string, fileName: any) {
    this.httpClient.get(this.corsUrl + url + fileName, this.httpOptions)
    .subscribe(data => { 
       this.processData(data),
       err => this.handleError(err)
     });
  }
}
