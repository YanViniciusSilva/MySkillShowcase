import { Component, EventEmitter, Output } from '@angular/core';
import { EnumSkillArea } from './skills-content';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent {
  lang = environment.translation;
  back_skills:EnumSkillArea = EnumSkillArea.back;
  front_skills:EnumSkillArea = EnumSkillArea.front;
  extra_skills:EnumSkillArea = EnumSkillArea.extra;
}
