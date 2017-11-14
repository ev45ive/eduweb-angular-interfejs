import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menu = {
    items:[
      { label: 'Pierwsza opcja' },
      { label: 'Druga opcja' },
      { label: 'Jeszcze jedna...' },
    ]
  }

  open(ref){
    console.log(ref)
    ref.open()
  }

  addMenuItem(label){
    this.menu.items.push({
      label
    })
  }
}
