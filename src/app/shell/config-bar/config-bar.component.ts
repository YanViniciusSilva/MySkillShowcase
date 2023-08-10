import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.scss']
})
export class ConfigBarComponent {

  selectOptions = [
    {label: 'Português-BR', value: environment.translateOpt.pt},
    {label: 'Inglês', value: environment.translateOpt.en}
  ]

  languageSelected = localStorage.getItem('language');

  langSelect = new FormControl(localStorage.getItem('language'));

  icon: string;
  isLight: boolean;

  // variaveis de estilo
  bodyColor = document.querySelector('html');


  constructor() {
    // selecionando linguagem padrão
    if(this.languageSelected === null && this.languageSelected !== environment.translateOpt.pt && this.languageSelected !== environment.translateOpt.en){
      localStorage.setItem('language', 'PT-BR');
    }

    // selecionando tema padrão
    if(localStorage.getItem('theme') == 'light') {
      this.setLightTheme()
    } else {
      this.setDarkTheme()
    }
  }

  onSelectLang() {
    if(this.langSelect.valueChanges){
      localStorage.setItem('language', this.langSelect.value);
      window.location.reload()
    }
  }

  onChangeIcon() {
    if(this.isLight == false) {
      this.icon = 'heroSun';
      localStorage.setItem('theme', 'light')
      this.setLightTheme();
    } else {
      this.icon = 'heroMoon';
      localStorage.setItem('theme', 'dark')
      this.setDarkTheme();
    }
  }

  setDarkTheme() {
    localStorage.setItem('theme', 'dark')
    this.bodyColor.className = 'dark';
    this.icon = 'heroMoon';
    this.isLight = false;
  }

  setLightTheme() {
    localStorage.setItem('theme', 'light')
    this.bodyColor.className = '';
    this.icon = 'heroSun';
    this.isLight = true;
  }


}
