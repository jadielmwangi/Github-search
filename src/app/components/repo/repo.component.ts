
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoitems: any[];
  repoName:string= "";

  constructor(private httpService: HttpService) {

  }


  ngOnInit() {
    this.httpService.updateProfile(this.repoName);
    this.httpService.getProfileRepos().subscribe(repo => this.repoitems= repo["items"]);
  }

  findRepo(){
    this.httpService.updateProfile(this.repoName);
    this.httpService.getProfileRepos().subscribe(repo => this.repoitems= repo["items"]);
  }
}
