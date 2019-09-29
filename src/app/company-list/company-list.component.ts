import { Component, OnInit } from '@angular/core';

import { GetCompaniesService } from '@asx/service/get-companies/get-companies.service';
import { Company } from '@asx/company/Company.ts';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {

  companiesArray : Company[] = [];

	constructor(private getCompaniesService: GetCompaniesService) {}
	
	ngOnInit(): void {
		this.getCompanyListfromAsx();
    this.companiesArray = this.getCompaniesService.companiesArray;
  }

	getCompanyListfromAsx() {
		return this.getCompaniesService.getList();
  }
}