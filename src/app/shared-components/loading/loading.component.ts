import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  @Input()
  Loading: boolean


  language = environment.translation;

  get loadingGif() {
    if(localStorage.getItem('theme') == 'light'){
      return 'assets/loading.gif';
    } else {
      return 'assets/loading-dark.gif';
    }
  }

  get isLoading() {
    return this.Loading
  }

}
