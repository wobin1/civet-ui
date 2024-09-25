import { Component } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {
  signout:boolean = false;
  loading:boolean = false;

  constructor(){}

  ngOnInit(){}

  signOut(){
    this.signout = !this.signout;
  }

}
