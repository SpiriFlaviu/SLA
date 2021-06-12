import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_PATH = "https://api.github.com/";
  constructor(private httpClient: HttpClient) {
  }

  public getListByUsername(username:string): Observable<any>
  {
    return this.httpClient.get(this.BASE_PATH + "users/" + username + "/gists");
  }

}
