import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  manufacturers: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  user = {
    name: '',
    manufacture: '',
    email: ''
  }

  // submit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(form: NgForm){
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
