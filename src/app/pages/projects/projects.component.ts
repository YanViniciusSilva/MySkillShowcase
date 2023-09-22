import { projectsContent } from './projects-content';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects = projectsContent ;

  redirectTo(route: string) {
    window.open('https://' + route, '_blank');
  }
}
