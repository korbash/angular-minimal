import { Routes } from '@angular/router';
import { WELCOME_ROUTES } from './pages/welcome/welcome.routes';
import { SETTINGS_ROUTES } from './pages/settings/settings.routes';
import { QUERY_ROUTES } from './pages/query/query.routes';

export const routes: Routes = [
  { path: 'welcome', loadChildren: () => WELCOME_ROUTES },
  { path: 'settings', loadChildren: () => SETTINGS_ROUTES },
  { path: 'query', loadChildren: () => QUERY_ROUTES },
  { path: '**', redirectTo: 'welcome' },
];
