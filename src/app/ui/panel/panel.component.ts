import { PanelCloseComponent } from './panel-close.component'
import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core'

@Component({
  selector: 'panel',
  template: `
    <div class="card" *ngIf="open">
      <ng-content select=".card-header"></ng-content>
      
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      
      <ng-content select=".card-footer"></ng-content>
    </div>
  `,
  styles: []
})
export class PanelComponent implements OnInit, AfterContentInit {

  @Input()
  title

  @ContentChild(PanelCloseComponent)
  closeBtn:PanelCloseComponent

  ngAfterContentInit() {
    if(this.closeBtn){
      this.closeBtn.onClose.subscribe(()=>{
        this.open = false
      })
    }
  }

  @Input()
  open = true

  constructor() { }

  ngOnInit() {
  }

}
