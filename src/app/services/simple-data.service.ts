import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class SimpleDataService {

  constructor( private logService: LoggingService ) { }

  private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];

  getData(): string[] {

    return this.data;
  }
  addData(name: string){
    this.logService.write("logging adding new data to the service ");
    this.data.push(name);
  }
}
