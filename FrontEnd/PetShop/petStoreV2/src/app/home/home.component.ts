import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 hiddenToggle:boolean = true;
 greeterDiv:boolean = true;
 name:string = "";

 obj1 = {
      id:1,
      username:"GreekZo",
      admin:false
 }

 obj2 = {
  id:2,
  username:"Admin",
  admin:true
}

obj3 = {
  id:3,
  username:"Rando",
  admin:false
}

objArray = [this.obj1,this.obj2,this.obj3];

  constructor() { }

  ngOnInit(): void {  }

  toggleStatus(id:number){

    this.objArray[id-1].admin = !this.objArray[id-1];
  }

  toggleVisibility(id:number){

    this.hiddenToggle = !this.hiddenToggle;
  }

  submitName(){
    this.greeterDiv = false;
  }



}
