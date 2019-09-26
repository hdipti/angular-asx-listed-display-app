import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  httpClient: HttpClient;

  constructor() { }

  handleError(err: string) {
      console.log('something went wrong: ', err);
  }
  
}
