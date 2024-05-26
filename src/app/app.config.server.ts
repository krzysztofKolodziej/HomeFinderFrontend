import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: 'serverModules', useValue: [FlexLayoutServerModule], multi: true }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
