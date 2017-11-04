import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'panel',
  template: `
    <div class="card">
      <div class="card-header">
        <h5>{{title}}</h5>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
      </div>
    </div>
  `,
  styles: []
})
export class PanelComponent implements OnInit {

  @Input()
  title

  constructor() { }

  ngOnInit() {
  }

}
