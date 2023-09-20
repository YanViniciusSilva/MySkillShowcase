import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  readonly language = environment.translation;
  readonly slides = [
    {
      image: 'assets/sections-images/about-me-imgs/hobbies.svg',
      description: this.language.about_me.about_me_banner.about_hobbies
    },
    {
      image: 'assets/sections-images/about-me-imgs/gps.svg',
      description: this.language.about_me.about_me_banner.about_my_person
    },
    {
      image: 'assets/sections-images/about-me-imgs/cooffe.svg',
      description: this.language.about_me.about_me_banner.about_career
    }
  ];

  resizeCarousel:boolean = window.screen.width >= 600 ? false : true;

  ngOnInit(): void {
    this.onResizable();
  }

  onResizable() {
    addEventListener("resize", () => {
      const size = window.innerWidth;
      this.resizeCarousel = size <= 600 ? true : false;
    });
  }
}
