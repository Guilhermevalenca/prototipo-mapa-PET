import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'exemples',
    component: TabsPage,
    children: [
      {
        path: 'simple-exemple',
        loadComponent: () => import('../simple-exemple/simple-exemple.page'),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page'),
      },
      {
        path: 'custom-icon',
        loadComponent: () => import('../custom-icon/custom-icon.page'),
      },
      {
        path: '',
        redirectTo: '/exemples/simple-exemple',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/exemples/simple-exemple',
    pathMatch: 'full',
  },
];
