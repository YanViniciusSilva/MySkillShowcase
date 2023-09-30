import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbTabsetModule, NbCardModule } from '@nebular/theme';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroChevronLeft,
  heroChevronRight,
  heroCodeBracket,
  heroMoon,
  heroSun
} from '@ng-icons/heroicons/outline';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TecnologiesComponent } from '../pages/tecnologies/tecnologies.component';
import { SkillCardsComponent } from '../pages/tecnologies/skill-cards/skill-cards.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { octMarkGithub } from '@ng-icons/octicons';
import { CarouselModule } from '@coreui/angular';
import { TagComponent } from '../pages/projects/components/tag/tag.component';
@NgModule({
  declarations: [
    AboutMeComponent,
    HeaderComponent,
    TecnologiesComponent,
    SkillCardsComponent,
    ProjectsComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      heroMoon,
      heroSun ,
      heroCodeBracket,
      octMarkGithub,
      heroChevronRight,
      heroChevronLeft,
    }),
    AngularSvgIconModule.forRoot(),
    NbThemeModule.forRoot(),
    NbTabsetModule,
    NbCardModule,
    CarouselModule.forRoot(),
  ],
  providers: [
  ]
})
export class ShellModule { }
