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

  constructor() {
    if(this.languageSelected === null && this.languageSelected !== environment.translateOpt.pt && this.languageSelected !== environment.translateOpt.en){
      localStorage.setItem('language', 'PT-BR');
    }
  }

  ngOnInit() {
    if(!this.icon){
      this.icon = 'heroMoon';
    }
  }

  onSelectLang() {
    if(this.langSelect.valueChanges){
      localStorage.setItem('language', this.langSelect.value);
      window.location.reload()
    }
  }

  onChangeIcon() {
    if(this.icon == 'heroMoon') {
      this.icon = 'heroSun'
    } else {
      this.icon = 'heroMoon'
    }
  }


}
