import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to ninja directory!";
  ninja = {
    name: 'Yoshi',
    belt: 'Black'
  }

  alertMe(val: string) {
    alert(val);
  }

  constructor() { }

  ngOnInit(): void { }
}
