import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popup-message',
  template: `
    <div class="alert alert-primary">
      popup-message works!
    </div>
  `,
  styles: []
})
export class PopupMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
