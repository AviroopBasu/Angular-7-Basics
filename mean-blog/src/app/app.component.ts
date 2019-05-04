import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts = [];
  storedCounts = 0;
  onPostAdded(post) {
    this.storedPosts.push(post);
    this.storedCounts ++;
  }

}
