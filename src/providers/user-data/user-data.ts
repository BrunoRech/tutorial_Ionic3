import { Injectable } from "@angular/core";

const configKeyName = "config";

@Injectable()
export class UserDataProvider {

private config = {
  showSlide: true,
  userName: "User",
  name: "name"
}

  constructor() {
  }
  //? depois da var significa que ela e opcional
  public setUserData(showSlide?:boolean,name?:string,userName?:string){
    //let e uma const
    const config = {
      showSlide: true,
      userName: "",
      name: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(userName){
      config.userName = userName;
    }
    if(name){
      config.name = name;
    }
    localStorage.setItem(configKeyName,JSON.stringify(config));
  }

  public getUserData() : string{
    return localStorage.getItem(configKeyName);
  }
}
