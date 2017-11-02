import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-card',
  template: `
  <div class="card">
    <div class="card-body">
      Text
    </div>
  </div>
  `,
  styles: []
})
export class DynamicCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
