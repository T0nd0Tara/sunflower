import { Routes } from '@angular/router';
import { WorkersPageComponent } from './pages/workers-page/workers-page.component';




export const routes: Routes = [
  { path: 'workers', loadComponent: () => import('./pages/workers-page/workers-page.component').then(m => m.WorkersPageComponent) },
  { path: 'tasks', loadComponent: () => import('./pages/tasks-page/tasks-page.component').then(m => m.TasksPageComponent) },
  { path: 'broker', loadComponent: () => import('./pages/broker-page/broker-page.component').then(m => m.BrokerPageComponent) },
]
;
