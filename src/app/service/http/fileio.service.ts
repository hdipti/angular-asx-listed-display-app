import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpService } from '@asx/service/http/http.service.ts';

@Injectable({
  providedIn: 'root'
})
export abstract class FileioService extends HttpService {

  constructor() { 
  	super();
  }

  abstract extractData(data : string): void;

  getFile(fileName: string){
	this.httpClient.get(fileName, {responseType: 'text'})
       .subscribe(data => { 
          this.extractData(data),
          err => this.handleError(err)
    });
  }
}
