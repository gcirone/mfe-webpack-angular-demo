import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-home',
  template: `
    <p>Welcome to {{ title }}!</p>
  `
})
export class HomeComponent implements OnInit {
  title = 'site one';

  ngOnInit() {
    console.log('HomeComponent');
  }
}
