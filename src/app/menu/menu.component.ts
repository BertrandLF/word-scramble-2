import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hello menu component');
  }

}
