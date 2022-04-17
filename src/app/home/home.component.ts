import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to ninja directory!";
  @Input() ninja = {
    name: '',
    belt: ''
  }
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: Event) {
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit(): void { }
}
