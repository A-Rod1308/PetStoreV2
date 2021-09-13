import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface user{
  username: string,
  password: string

}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  RootURL: string = "http://localhost:8080";

  // info1: string[]=["Alonso Rodriguez", "GreekZo","password","email@mail.com","notAdmin"]
  // info2: string[]=["admin", "admin","password","admin@mail.com","Admin"]
  // info3: string[]=["Rando", "Ranod","password","rando@mail.com","notAdmin"]

  // getInfo1():string[]{
  //   return this.info1
  // }
  // getInfo2():string[]{
  //   return this.info2
  // }
  // getInfo3():string[]{
  //   return this.info3
  // }

  // addInfo(info: any){
  //   this.info1.push(info)
  //   this.info2.push(info)
  //   this.info3.push(info)
  //   return this.info1
  // }

  constructor(private _lService: HttpClient) { }

 

  getLoginData() {
    return this._lService.get<user>(this.RootURL + "/user") ;
  }
}
