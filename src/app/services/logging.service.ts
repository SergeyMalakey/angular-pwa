import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  write(logMessage:string){

    console.log(logMessage);
  }
}
