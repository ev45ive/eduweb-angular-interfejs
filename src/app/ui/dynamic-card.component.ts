import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'dynamic-card',
  template: `
  <div class="card" *ngIf="isOpen">
    <div class="card-body">
      {{ text }}
    </div>
  </div>
  `,
  styles: []
})
export class DynamicCardComponent implements OnInit {

  @Input('open')
  isOpen = false

  @Input()
  text = 'test'

  constructor() { }

  ngOnInit() {
  }

}
