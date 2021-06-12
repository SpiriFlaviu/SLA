import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../../api/service/github.service";
import {GistDTO} from "../../../api/model/gistDTO";
import {UserDTO} from "../../../api/model/userDTO";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gists: Array<GistDTO> = [];
  filteredGists: Array<GistDTO> = [];
  user: UserDTO | null;
  query: string;

  constructor(private githubService: GithubService) {
  }

  tags: Set<string> = new Set<string>();
  tagFilterValue: string;

  ngOnInit(): void {
  }

  searchByUsername(username: string) {
    if (username) {
      this.user = null;
      this.tagFilterValue = "";
      this.tags = new Set<string>();
      this.query = username;

      this.githubService.getListByUsername(username).subscribe((data: any[]) => {
        this.gists = data;
        this.filteredGists = data;
      });

      this.githubService.getUserDetails(username).subscribe((data: any) => {
        this.user = data;
      });
    }
  }

  addToTags(tags: Set<string>) {
    tags.forEach(tag => this.tags.add(tag));
  }

  handleFilter() {
    if (!this.tagFilterValue) {
      this.filteredGists = this.gists;
      return;
    }
    this.filteredGists = this.gists.filter((gist: GistDTO) => {
      for (let item in gist.files) {
        let file = gist.files[item];
        if (this.tagMatchesFileLanguage(file.language, this.tagFilterValue))
          return true;
      }
      return false;
    });

  }

  tagMatchesFileLanguage(fileLanguage: string, filterValue: string) {
    if (filterValue === "Unknown") {
      return !fileLanguage;
    }
    return fileLanguage === filterValue;
  }
}
