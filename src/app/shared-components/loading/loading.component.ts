import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();

  language = environment.translation;
  loadingGif: string = `assets/loading2.gif`;

  ngOnInit(): void {
    window.addEventListener("load", () => {
      setInterval(() => {
        this.isLoading.emit(true);
      }, 1000)
    })
  }
}
