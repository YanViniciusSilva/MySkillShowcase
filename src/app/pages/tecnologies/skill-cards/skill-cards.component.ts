import { EnumSkillArea, skillsContent } from './../skills-content';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss']
})
export class SkillCardsComponent implements OnInit{

  @Input()
  skill_area:EnumSkillArea;

  resizeCard:boolean = window.screen.width >= 600 ? false : true;
  skills = skillsContent;

  ngOnInit(): void {
    this.onResizable()
  }

  onResizable() {
    addEventListener("resize", () => {
      const size = window.innerWidth;
      this.resizeCard = size <= 600 ? true : false;
    });
  }

}
