
import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private userName:string;

  private clientid = '';
  private clientsecret = '';


  constructor(private http:HttpClient) {
    console.log("Service is now ready.");
    this.userName = 'jadielmwangi';
   }

   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);

   }


   updateProfile(userName:string ){
    this.userName = userName;
   }
}
