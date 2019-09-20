import { Component, OnInit } from '@angular/core';

import { GetCompaniesService } from '@asx/service/get-companies/get-companies.service';
import { ReadCompaniesService } from '@asx/service/read-companies/read-companies.service';
import { Company } from '@asx/company/Company.ts';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

	constructor(private getCompaniesService: GetCompaniesService, private readCompaniesService: ReadCompaniesService) {}
	asxCompanies : Company[] = [];

	ngOnInit(): void {
    	this.getCompanyListfromAsx();
    	this.getCompanyList();
  	}
	
	getCompanyListfromAsx() {
	  this.getCompaniesService.getList();
	}

	getCompanyList() {
		this.asxCompanies = this.readCompaniesService.getCompanies();
	}
}