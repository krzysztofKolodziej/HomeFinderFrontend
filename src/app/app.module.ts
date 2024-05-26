import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultModule } from './layouts/default/default.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FlexLayoutServerModule,
    DefaultModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }