import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { delay, tap } from 'rxjs/operators';

import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withInterceptors,
  HttpHandlerFn,
  HttpRequest, HttpInterceptorFn
} from '@angular/common/http';
import { BASE_PATH } from './api';

registerLocaleData(en);

// Правильный интерцептор с типами                                                           
const delayInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  return next(req).pipe(
    delay(300) // Задержка для всех запросов                                                
  );
};  

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNzIcons(icons), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(),
  provideHttpClient(
    withInterceptors([delayInterceptor])
  ),
  provideNzIcons(icons),
  { provide: BASE_PATH, useValue: 'http://localhost:8000' },
  ]
};
