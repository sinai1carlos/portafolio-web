import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links:Array<LinkModel>=[
    {
      link:'',
      icon:'<i class="fa-brands fa-linkedin"></i>'
    },
    {
      link:'',
      icon:'<i class="fa-regular fa-envelope"></i>'
    },
    {
      link:'',
      icon:'<i class="fa-brands fa-github"></i>'
    }
  ];
  constructor(){}

  
}
class LinkModel {
  link:string='';
  icon:string='';
}