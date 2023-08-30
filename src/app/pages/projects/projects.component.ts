import { list } from 'postcss';
import { projectsContent } from './projects-content';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  readonly projects = projectsContent ;

  ngOnInit(): void {
    this.scrollAnimation()
  }


  scrollAnimation() {}
}
