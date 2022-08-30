import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-ng-app';
  loading = false
  term = ''
  codeUpdated = false

  public sourceButtonClick(name: string): void {
    console.log(name);
    console.log('Hello!');
  }

  ngOnInit(): void {
  }

  constructor(updates: SwUpdate) {
    updates.available.subscribe(() => {
      this.codeUpdated = true
    })
  }
}
