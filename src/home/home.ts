import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  styles: [ styles ]
})
export class Home {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  isVisiblePrice:boolean = true;
  isVisibleBrand:boolean = true;
  isVisibleModel:boolean = true;
  isVisibleFuel:boolean = true;
  isVisibleDriven:boolean = true;
  isVisibleBody:boolean = true;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }
  
  pricetoggle() {
        this.isVisiblePrice = !this.isVisiblePrice;
  }
  brandtoggle() {
        this.isVisibleBrand = !this.isVisibleBrand;
  }
  modeltoggle() {
        this.isVisibleModel = !this.isVisibleModel;
  }
  fueltoggle() {
        this.isVisibleFuel = !this.isVisibleFuel;
  }
  driventoggle() {
        this.isVisibleDriven = !this.isVisibleDriven;
  }
  bodytoggle() {
        this.isVisibleBody = !this.isVisibleBody;
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'api url');
  }

  callSecuredApi() {
    this._callApi('Secured', 'api url');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }
}
