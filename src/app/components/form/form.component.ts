import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DbService} from "../../services/db.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  reportList: { name: string; email: string, manufacture: string } []
  manufacturers: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  user = {
    name: '',
    manufacture: '',
    email: ''
  }

  // submit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    this.addRecord()
    this.getData()

    this.user.name = ''
    this.user.manufacture = ''
    this.user.email = ''
  }

  clearData(): void {
    this.db.table('myStore1').clear()
    this.getData()
  }

  constructor(private db: DbService) {
  }

  getData(): void {
    this.db.table('myStore1')
      .toArray()
      .then(data => {
        this.reportList = data
      });
  }


  addRecord(): void {
    this.db.table('myStore1')
      .add({
          manufacture: this.user.manufacture,
          email: this.user.email,
          name: this.user.name
        }
      )
      .then(data => console.log("ok - ", data))
      .catch(err => console.log("err - ", err.message));
  }

  ngOnInit(): void {
    this.getData()
  }

}
