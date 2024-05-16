import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {MAT_DATE_LOCALE} from "@angular/material/core";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
