import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url='https://api.github.com/users/sinai1carlos/repos';
  constructor(private http:HttpClient) { }

  loadRepos(){
    return this.http.get(`${this.url}`);
  }
  /*Esto es igual que el metodo de arriba
    loadRepos= () =>this.http.get(`${this.url}`);
  */
}
