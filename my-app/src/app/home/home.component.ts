import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  to_do=[];
onemission='';
gg="ffffff";
  constructor() { }

  ngOnInit() {
  }
  addmission(){
this.to_do.push(this.onemission);
console.log(this.to_do);
  };

}
