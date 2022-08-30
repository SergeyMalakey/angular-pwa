import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {

  constructor() {
    super ("DexieDb")

    this.version(1).stores({
       myStore1: '++empId, empName, empSal',
       // myStore2: 'compId, compName'
     });

    this.open()
      .then(data => console.log("Dexie DB has been opened!"))
      .catch(err => console.log("Dexie DB - ", err.message));
  }
}
