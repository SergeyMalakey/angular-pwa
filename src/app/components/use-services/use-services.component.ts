import { Component, OnInit } from '@angular/core';
import {SimpleDataService} from "../../services/simple-data.service";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-use-services',
  templateUrl: './use-services.component.html',
  styleUrls: ['./use-services.component.css'],
  providers: [SimpleDataService, LoggingService]
})
export class UseServicesComponent implements OnInit {

  items: string[] = [];
  name: string = "";

  constructor(private dataService: SimpleDataService) { }
  addItem(name: string){
    if (!name) {
      return;
    }
    this.dataService.addData(name);
    this.name = ""
  }
  ngOnInit(): void{
    this.items = this.dataService.getData();
  }
}
