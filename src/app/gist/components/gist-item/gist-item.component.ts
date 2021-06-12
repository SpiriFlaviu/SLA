import {Component, Input, OnInit} from '@angular/core';
import {GistDTO} from "../../../api/model/gistDTO";
import {ForkDTO} from "../../../api/model/forkDTO";
import {GithubService} from "../../../api/service/github.service";

@Component({
  selector: 'app-gist-item',
  templateUrl: './gist-item.component.html',
  styleUrls: ['./gist-item.component.css']
})
export class GistItemComponent implements OnInit {

  @Input() gist: GistDTO;
  tags: Set<string>;
  forks: Array<ForkDTO> = [];
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    function computeTags(gist: GistDTO ) {
      let result = new Set<string>();
      for(let key in gist.files )
      {
        result.add(gist.files[key].language);
      }
      return result;
    }

    this.tags = computeTags(this.gist);
  }

  fetchDetails() {
    this.githubService.getGistForks(this.gist.id).subscribe((data: any[])=>{
      this.forks = data;
      this.forks.sort(function(a,b)
      {
        return a.created_at < b.created_at ? 1 : -1;
      });
      this.forks = this.forks.slice(0,3);
      console.log(data);
    });
  }
}
