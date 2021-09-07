import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  info1: string[]=["Alonso Rodriguez", "GreekZo","password","email@mail.com","notAdmin"]
  info2: string[]=["admin", "admin","password","admin@mail.com","Admin"]
  info3: string[]=["Rando", "Ranod","password","rando@mail.com","notAdmin"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }

  addInfo(info: any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
