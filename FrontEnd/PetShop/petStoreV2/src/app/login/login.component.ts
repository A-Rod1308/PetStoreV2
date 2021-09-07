import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromService1(){
    this.infoReceived1 = this.loginservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoReceived2 = this.loginservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3 = this.loginservice.getInfo3()
  }

  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {
  }
  updateInfo(frm: any){
    this.loginservice.addInfo(frm.value.location)
  }
}
