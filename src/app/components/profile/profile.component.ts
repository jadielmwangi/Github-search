
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName:string;
  // repos: any;
  repository: any;
  profile: any;

  constructor(private httpService:HttpService){

  }

  findProfile(){
    this.httpService.updateProfile(this.userName);
    this.httpService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.httpService.getProfileRepos().subscribe(repository => this.repository = repository);
  }

  ngOnInit() {
    this.httpService.updateProfile('jadielmwangi');
    this.httpService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.httpService.getProfileRepos().subscribe(repository => this.repository = repository);
  }

}
