import { Component } from '@angular/core';
import { Router } from '@angular/router';

const style = require('./app.css');
const template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  styles: [style]
})

export class App {
  public userLoggedIn: boolean;
  username: string;

  constructor(public router: Router) {
    if(localStorage.getItem('id_token')){
      this.userLoggedIn = true;
      this.username = localStorage.getItem('user');
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
