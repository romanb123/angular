import { Component, OnInit } from '@angular/core';
import {Todo} from '../modules/todo.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mission:Todo[];

  constructor() { }

  ngOnInit() {
    this.mission=[
    {
      title:"title",
      mission:"mission"
    },
    {
      title:"title1",
      mission:"mission1"
    },
    {
      title:"title2",
      mission:"mission2"
    }
    ]
  }

}
