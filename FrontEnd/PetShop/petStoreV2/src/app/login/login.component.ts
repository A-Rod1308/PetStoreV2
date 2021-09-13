import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  logCred(username: string, password :string){
    console.log(username + " " + password)
  }

  logIn(username: string, password: string, _http: LoginService){
    //let u2 = _http.getLoginData().subscribe()
    let p2 = "password"
    let out = "";

    if(username == u2 && password == p2){
      out = "Loging In"
    }else{
      if(username != u2){}
    }
    
    if(password == p2){}

    console.log(out)

  }

  constructor(){}

  ngOnInit(): void {
  }
}
