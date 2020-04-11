// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-repo',
//   templateUrl: './repo.component.html',
//   styleUrls: ['./repo.component.css']
// })
// export class RepoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoitems: any[];
  repoName:string= "pizza";

  constructor(private httpService: HttpService) {

  }

  findRepo(){
    this.httpService.updateProfile(this.repoName);
    this.httpService.getProfileRepos().subscribe(repo => this.repoitems= repo["items"]);
  }

  ngOnInit() {
    this.httpService.updateProfile(this.repoName);
    this.httpService.getProfileRepos().subscribe(repo => this.repoitems= repo["items"]);
  }
}
