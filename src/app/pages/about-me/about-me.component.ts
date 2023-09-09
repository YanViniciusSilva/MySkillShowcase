import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  readonly slides = [
    {
      image: 'assets/sections-images/about-me-imgs/hobbies.svg',
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Magnam eveniet voluptate suscipit nihil eum commodi
        repellat architecto, voluptatem, quisquam similique ad
        ipsa soluta tempora non, unde amet repudiandae. In,
        consequuntur!
      `
    },
    {
      image: 'assets/sections-images/about-me-imgs/gps.svg',
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Magnam eveniet voluptate suscipit nihil eum commodi
        repellat architecto, voluptatem, quisquam similique ad
        ipsa soluta tempora non, unde amet repudiandae. In,
        consequuntur!
      `
    },
    {
      image: 'assets/sections-images/about-me-imgs/cooffe.svg',
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Magnam eveniet voluptate suscipit nihil eum commodi
        repellat architecto, voluptatem, quisquam similique ad
        ipsa soluta tempora non, unde amet repudiandae. In,
        consequuntur!
      `
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
