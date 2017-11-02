import { Attribute, Component, OnInit } from '@angular/core'

@Component({
  selector: 'static-card',
  template: `
  <div class="card">
    <div class="card-body">
      {{ bodyText }}
    </div>
  </div>
  `,
  styles: []
})
export class StaticCardComponent implements OnInit {

  constructor(@Attribute('text') public bodyText) {
    
  }

  ngOnInit() {
  }

}
