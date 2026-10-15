
import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { ProjectDetail } from './features/project-detail/project-detail';
import { Experience } from './features/experience/experience';
import { About } from './features/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'proyectos',
    component: Projects
  },
  {
    path: 'proyectos/esp32-power-monitor',
    component: ProjectDetail
  },
  {
    path: 'experiencia',
    component: Experience
  },
  {
    path: 'sobre-mi',
    component: About
  },
  {
    path: '**',
    redirectTo: ''
  }
];
