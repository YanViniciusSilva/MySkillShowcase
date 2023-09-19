import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';

  is_loaded: boolean = false;

  onLoaded(): boolean {
    return this.is_loaded = true;
  }
}
