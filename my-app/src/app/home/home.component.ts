import { Component, OnInit } from '@angular/core';
import {Todo} from '../modules/todo.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo:Todo[]=[
new Todo('title','mission')
  ];
onemission='';
gg="ffffff";
  constructor() { }

  ngOnInit() {
  }
  addmission(){

  };

}
