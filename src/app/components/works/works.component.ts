import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
 repos:any;
  constructor(private gitHutService:GithubService){}
  ngOnInit(){
    this.gitHutService.loadRepos().subscribe(dato=>{
      this.repos=dato;
      console.log(dato);
      
    })
  }
}
