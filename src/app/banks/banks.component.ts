import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetBanksService } from '@asx/service/get-companies/get-banks.service.ts';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent extends GetBanksService implements OnInit {

  constructor(httpClient: HttpClient) {
  	super(httpClient);
  }

   ngOnInit(): void {
    super.getBanks();
  }
}
