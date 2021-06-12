import {Component, Input, OnInit} from '@angular/core';
import {GistDTO} from "../../../api/model/gistDTO";

@Component({
  selector: 'app-gist-item',
  templateUrl: './gist-item.component.html',
  styleUrls: ['./gist-item.component.css']
})
export class GistItemComponent implements OnInit {

  @Input() gist: GistDTO;
  tags: Set<string>;
  constructor() { }

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

}
