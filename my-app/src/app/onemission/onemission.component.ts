import { Component, OnInit,Input} from '@angular/core';
import {Todo} from '../modules/todo.model'

@Component({
  selector: 'app-onemission',
  templateUrl: './onemission.component.html',
  styleUrls: ['./onemission.component.css']
})
export class OnemissionComponent implements OnInit {
  @Input() mission: Todo;
  constructor() { }

  ngOnInit() {
  }

}
