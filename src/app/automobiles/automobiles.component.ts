import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAutomobilesService } from '@asx/service/get-companies/get-automobiles.service.ts';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent extends GetAutomobilesService implements OnInit {

  constructor(httpClient: HttpClient) {
  	super(httpClient);
  }

  ngOnInit(): void {
    super.getAutomobiles();
  }
}
