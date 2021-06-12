import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../../api/service/github.service";
import {GistDTO} from "../../../api/model/gistDTO";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: string = "";
  gists: Array<GistDTO> = [];
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {

  }

  searchByUsername() {
    this.githubService.getListByUsername("spiriflaviu").subscribe((data: any[])=>{
      console.log(data);
      this.gists = data;
    })
  }
}
