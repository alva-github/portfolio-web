import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { ProjectDetail } from './features/project-detail/project-detail';
import { Experience } from './features/experience/experience';
import { About } from './features/about/about';
import { Android } from './features/android/android';
import { Web } from './features/web/web';
import { Contact } from './features/contact/contact';
import { TechrepairDetail } from './features/techrepair-detail/techrepair-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'proyectos',
    component: Projects,
  },
  {
    path: 'proyectos/esp32-power-monitor',
    component: ProjectDetail,
  },
  {
    path: 'proyectos/techrepair-pro',
    component: TechrepairDetail,
  },
  {
    path: 'experiencia',
    component: Experience,
  },
  {
    path: 'sobre-mi',
    component: About,
  },
  {
    path: 'android',
    component: Android,
  },
  {
    path: 'web',
    component: Web,
  },
  {
    path: 'contacto',
    component: Contact,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
