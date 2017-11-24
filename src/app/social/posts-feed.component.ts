import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts-feed',
  template: `
    <h4>Social Feed</h4>
    <div class="col-8 mx-auto">
      <posts-filter (queryChange)="filter($event)"></posts-filter>

      <div class="card-deck flex-column">
        <div class="card mb-4" *ngFor="let post of results">
          <div class="card-body">
            <post-header [post]="post"></post-header>
            <p class="card-text">{{post.content}}</p>
          </div>
          <div class="card-footer">
            <post-actions [post]="post"></post-actions>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PostsFeedComponent implements OnInit {

  posts = [
    {
      "id": 1,
      "content": "Some example text update. ",
      "author": {
        "name": "Matt Exampler",
        "avatar": "assets/avatars/mateusz.jpg"
      }
    },
    {
      "id": 2,
      "content": "Some example text update.",    
      "media": {
        "image": "assets/images/logoedu.png"
      },
      "author": {
        "name": "Greg Tester",
        "avatar": "assets/avatars/grzegorz.jpg"
      }
    },
    {
      "id": 3,
      "content": "Some example text update.",
      "author": {
        "name": "Peter Sampler",
        "avatar": "assets/avatars/piotr.png"
      }
    }
  ]

  results = []

  filter(query){
    this.results = this.posts.filter( post => {
      return !query || (post.content.includes(query) || post.author.name.includes(query))
    })
  }

  constructor() { }

  ngOnInit() {
    this.filter('')
  }

}
