import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'PetStore';
  constructor(private _loginService: LoginService) {

    console.log("I am here");
    _loginService.getLoginData().subscribe(data =>{
    console.log(data);
    })
  }
}
