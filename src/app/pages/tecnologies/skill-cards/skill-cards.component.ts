import { environment } from 'src/environments/environment';
import { EnumSkillArea, skillsContent } from './../skills-content';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss'],
})
export class SkillCardsComponent implements OnInit {
  @Input()
  skill_area: EnumSkillArea;

  resizeCard: boolean = window.innerWidth > 640;

  skills = skillsContent.sort((a, b) => {
    if (b.most_used || !a.skill_area) return 1;
    if (a.most_used || !b.skill_area) return -1;
    return 0;
  });

  readonly lang = environment.translation;

  ngOnInit(): void {
    this.onResizable();
  }

  onResizable() {
    addEventListener(
      'resize',
      () => {
        const size = window.innerWidth;
        this.resizeCard = size > 640;
      },
      { passive: true }
    );
  }
}
