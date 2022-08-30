import {Component, OnInit} from "@angular/core";

@Component({
  selector: "tailboard",
  templateUrl: 'tailboard.component.html'
})

export class TailboardComponent implements OnInit{
  user: string;

  constructor() {}

  ngOnInit() {
    // todo work with localStorage
    // localStorage.setItem('user', 'Readerstacks');
    // console.log(localStorage.getItem('user'));
  }
}
