// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private username:string;

  private clientid = '';
  private clientsecret = '';


  constructor(private http:HttpClient) {
    console.log("Service is now ready.");
    this.username = 'jadielmwangi';
   }

   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);

   }


   updateProfile(username:string ){
    this.username = username;
   }
}
