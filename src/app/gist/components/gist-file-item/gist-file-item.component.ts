import {Component, Input, OnInit} from '@angular/core';
import {FileDTO} from "../../../api/model/fileDTO";
import {GithubService} from "../../../api/service/github.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-gist-file-item',
  templateUrl: './gist-file-item.component.html',
  styleUrls: ['./gist-file-item.component.css']
})
export class GistFileItemComponent implements OnInit {

  @Input()
  file: FileDTO;
  content: string;

  constructor(private githubService: GithubService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  fetchFile(url: string) {
    if (url && !this.content) {
      this.githubService.getFileContent(url).subscribe((data: any) => {
        this.content = data;
      });
    }
  }

}
