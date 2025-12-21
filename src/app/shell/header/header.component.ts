import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from 'src/environments/environment';
import { TabsEnum } from '../enums/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  language = environment.translation;

  visibility: boolean;

  // URL da foto do perfil
  profilePhotoUrl: string = 'assets/me.jpeg';

  date = new Date();
  month = this.date.getMonth();
  day = this.date.getDay();
  year = this.date.getFullYear();

  socialMidiaLinks = [
    {
      link: 'https://www.linkedin.com/in/yanviniciussilva',
      image: 'assets/linkedin.svg',
    },
    {
      link: 'https://github.com/YanViniciusSilva',
      image: 'assets/git.svg',
    },
    {
      link: 'mailto:yanviniciusjesussilva@gmail.com',
      image: 'assets/gmail.svg',
    },
  ];

  btn_contents = [
    {
      id: 1,
      btn: this.language.header.sections_btn.about_me,
    },
    {
      id: 2,
      btn: this.language.header.sections_btn.technologies,
    },
    {
      id: 3,
      btn: this.language.header.sections_btn.projects,
    },
  ];

  readonly TabsEnum = TabsEnum;

  currentTab: TabsEnum;
  lastTabAcessed: string = localStorage.getItem('lastTabAcessed');

  constructor(public _route: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Busca a foto do perfil do GitHub
    this.profileService.getProfilePhoto().subscribe({
      next: (photoUrl) => {
        this.profilePhotoUrl = photoUrl;
      },
      error: () => {
        // Mantém o fallback em caso de erro
        this.profilePhotoUrl = 'assets/me.jpeg';
      },
    });

    if (this.lastTabAcessed) {
      this.btn_contents.forEach((item) => {
        if (this.lastTabAcessed == item.id.toString()) {
          this.changeTab(item.id);
        }
      });
    } else {
      this.changeTab(TabsEnum.about);
    }
  }

  get myAge() {
    return this.month == 9 && this.day == 23
      ? this.year - 2003
      : this.year - 1 - 2003;
  }

  navigate(link: string) {
    open(link, '_blank');
  }

  changeTab(tab: TabsEnum) {
    if (tab == this.currentTab) {
      return void 0;
    }

    if (tab == TabsEnum.about) {
      this.visibility = true;
    } else {
      this.visibility = false;
    }

    this.currentTab = tab;
    localStorage.setItem('lastTabAcessed', this.currentTab.toString());
  }
}
