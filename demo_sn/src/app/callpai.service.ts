import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { datamonk } from 'src/Models/dataMonk';
import { user } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class CallpaiService {

  // public static host: string = "https://localhost:5001/api/";
  public static host: string = "https://webbostest.azurewebsites.net/api/";

  constructor(public http:HttpClient) { }

  public getUserBySreial(Id: string){
    return this.http.get<datamonk>(CallpaiService.host + 'DataMonk/GetMonkDataBySerial/'+ Id);
  }

  public adduser(data:user){
    console.log(data);
    return this.http.post<user>(CallpaiService.host + 'User/AddUser',data);
  }

}
