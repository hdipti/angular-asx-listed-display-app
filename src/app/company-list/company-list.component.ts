import { Component, OnInit } from '@angular/core';
import { GetCompaniesService } from '../service/get-companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

	constructor(private getCompaniesService: GetCompaniesService) {}

	ngOnInit(): void {
    	this.showConfig();
  	}
	
	showConfig() {
	  this.getCompaniesService.getList();
	  
	}
}
