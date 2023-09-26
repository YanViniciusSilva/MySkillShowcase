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
  loadingGif: string = `assets/loading.svg`;

  // variaveis de estilo
  bodyColor = document.querySelector('html');

  constructor() {
    // selecionando tema padrão
    if(localStorage.getItem('theme') == 'light') {
      this.setLightTheme()
    } else {
      this.setDarkTheme()
    }
  }

  ngOnInit(): void {
    window.addEventListener("load", () => {
      this.isLoading.emit(true);
    })
  }

  setDarkTheme() {
    localStorage.setItem('theme', 'dark')
    this.bodyColor.className = 'dark';
  }

  setLightTheme() {
    localStorage.setItem('theme', 'light')
    this.bodyColor.className = '';
  }
}
