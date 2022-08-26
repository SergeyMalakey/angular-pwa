import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-ng-app';
  loading = false
  term=''

  public sourceButtonClick(name:string): void {
    console.log(name);
    console.log('Hello!');
  }

  ngOnInit(): void {
  }

}
