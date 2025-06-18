import { Routes } from '@angular/router';
import { Resume } from './resume/resume';

export const routes: Routes = [
    {
      path: '',
      component: Resume
    },
  { path: 'dyn', component: Resume },

];
