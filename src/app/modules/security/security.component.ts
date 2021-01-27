import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  //templateUrl: './security.component.html',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
