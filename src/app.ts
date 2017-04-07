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
  constructor(public router: Router) {}
}
