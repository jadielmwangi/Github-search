
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string;
  repos: any;
  profile: any;

  constructor(private httpService:HttpService){

  }

  findProfile(){
    this.httpService.updateProfile(this.username);
    this.httpService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.httpService.getProfileRepos().subscribe(repos => this.repos = repos);
  }

  ngOnInit() {
    this.httpService.updateProfile('jadielmwangi');
    this.httpService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.httpService.getProfileRepos().subscribe(repos => this.repos = repos);
  }

}
