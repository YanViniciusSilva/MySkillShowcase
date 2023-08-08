import { Component, Input } from '@angular/core';
import { languages } from 'src/app/languages/languages';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  language = environment.translation

  @Input()
  visibility:boolean = true

  date = new Date();
  month = this.date.getMonth();
  day = this.date.getDay();
  year = this.date.getFullYear();

  socialMidiaLinks = [
    {
      link: 'https://linkedin.com/in/yan-vinicius-jesus-silva-b1b071238',
      image: 'assets/linkedin.png'
    },
    {
      link: 'https://github.com/YanViniciusSilva',
      image: 'assets/git.png'
    },
    {
      link: 'mailto:yanviniciusjesussilva@gmail.com',
      image: 'assets/gmail.png'
    }
  ]

  btn_contents = [
    {
      btn: this.language.header.sections_btn.about_me,
      redirect: ''
    },
    {
      btn: this.language.header.sections_btn.tecnologies,
      redirect: ''
    },
    {
      btn: this.language.header.sections_btn.projects,
      redirect: ''
    }
  ]

  get myAge() {
    return this.month == 9 && this.day == 23 ? this.year - 2003 : (this.year - 1) - 2003;
  }
}
