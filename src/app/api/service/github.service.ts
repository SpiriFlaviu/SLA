import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

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

  public getGistForks(gistId: string): Observable<any>
  {
    return this.httpClient.get(this.BASE_PATH + "gists/" + gistId + "/forks");
  }

  public getFileContent(url: string): Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.httpClient.get(url, {headers, responseType: "text"});
  }
}
