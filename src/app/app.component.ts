import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canica';
  onActivate(e, outlet){
      outlet.scrollTop = 0;     // Recomended, but i did not work for me            || For scroll Outlet
      window.scrollTo(0, 0);    // Did not recomended at all, but it worked for me! || For Scroll Entire Page
  }
}
