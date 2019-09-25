import { Component, OnInit } from '@angular/core';
import { GetCompaniesService } from '@asx/service/get-companies/get-companies.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private getCompaniesService: GetCompaniesService) { }

 	ngOnInit() {}

  	getCompanyListfromAsx() {
	  this.getCompaniesService.getList();
	}
}
