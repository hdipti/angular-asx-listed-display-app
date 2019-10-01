import { Component } from '@angular/core';
import { DownloadFileService } from '@asx/service/download-file/download-file.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {

  constructor(private downloadFileService : DownloadFileService) { }

  downloadCompanyList(){
  	this.downloadFileService.saveDataToFile();
  }

 }
