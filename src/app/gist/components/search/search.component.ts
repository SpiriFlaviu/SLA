import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../../api/service/github.service";
import {GistDTO} from "../../../api/model/gistDTO";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gists: Array<GistDTO> = [];
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  searchByUsername(username: string) {
    if(username)
    {
      this.githubService.getListByUsername(username).subscribe((data: any[])=>{
        this.gists = data;
      })
    }
  }
}
