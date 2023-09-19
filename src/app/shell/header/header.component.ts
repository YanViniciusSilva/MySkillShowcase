import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { languages } from 'src/app/languages/languages';
import { environment } from 'src/environments/environment';
import { TabsEnum } from '../enums/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language = environment.translation;

  visibility:boolean;

  date = new Date();
  month = this.date.getMonth();
  day = this.date.getDay();
  year = this.date.getFullYear();

  socialMidiaLinks = [
    {
      link: 'https://linkedin.com/in/yan-vinicius-jesus-silva-b1b071238',
      image: 'assets/linkedin.svg'
    },
    {
      link: 'https://github.com/YanViniciusSilva',
      image: 'assets/git.svg'
    },
    {
      link: 'mailto:yanviniciusjesussilva@gmail.com',
      image: 'assets/gmail.svg'
    }
  ];

  btn_contents = [
    {
      id: 1,
      btn: this.language.header.sections_btn.about_me,
    },
    {
      id: 2,
      btn: this.language.header.sections_btn.tecnologies,
    },
    {
      id: 3,
      btn: this.language.header.sections_btn.projects,
    }
  ];

  readonly TabsEnum = TabsEnum;

  currentTab:TabsEnum;
  lastTabAcessed: string = localStorage.getItem('lastTabAcessed');

  constructor( public _route: Router) {}

  ngOnInit(): void {
    if(this.lastTabAcessed) {
      this.btn_contents.forEach((item) => {
        if(this.lastTabAcessed == item.id.toString()) {
          this.changeTab(item.id);
        }
      })
    } else {
      this.changeTab(TabsEnum.about);
    }
  }

  get myAge() {
    return this.month == 9 && this.day == 23 ? this.year - 2003 : (this.year - 1) - 2003;
  }

  navigate(link: string) {
    open(link, '_blank')
  }

  changeTab(tab: TabsEnum) {
    if (tab == this.currentTab) {
      return void 0;
    }

    if(tab == TabsEnum.about) {
      this.visibility = true;
    } else {
      this.visibility = false;
    }

    this.currentTab = tab;
    localStorage.setItem('lastTabAcessed', this.currentTab.toString())
  }
}
