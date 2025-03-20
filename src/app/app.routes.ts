import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.routes').then(m => m.SETTINGS_ROUTES) },
  { path: '**', pathMatch: 'full', redirectTo: '/welcome' },
];
