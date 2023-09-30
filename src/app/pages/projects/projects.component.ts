import { environment } from 'src/environments/environment';
import { projectsContent } from './projects-content';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects =
    projectsContent
      .sort((a, b) => {
        if (a.year > b.year) {
          return 1;
        } else if (a.year < b.year) {
          return -1;
        } else {
          return 0;
        }
      });

  lang = environment.translation;

  redirectTo(route: string) {
    window.open('https://' + route, '_blank');
  }
}
