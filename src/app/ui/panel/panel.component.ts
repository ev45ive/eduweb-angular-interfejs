import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core'
import { PanelTabComponent } from './panel-tab.component'
import { PanelCloseComponent } from './panel-close.component'
import { PanelBaseComponent } from './panel-base.component';

@Component({
  selector: 'panel',
  template: `
    <div class="card" *ngIf="open">
      <ng-content select=".card-header"></ng-content>
    
      <ul class="nav nav-pills">
        <li class="nav-item" *ngFor="let panel of panels">
          <a class="nav-link"> {{panel.title}} </a>
        </li>
      </ul>
      
      <div class="card-body">    
        <ng-content></ng-content>
      </div>
      
      <ng-content select=".card-footer"></ng-content>
    </div>
  `,
  styles: []
})
export class PanelComponent extends PanelBaseComponent implements OnInit, AfterContentInit {

  @ContentChildren(PanelTabComponent)
  panels = new QueryList<PanelTabComponent>()

  ngAfterContentInit() {
    super.ngAfterContentInit()
  }

}
