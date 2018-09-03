import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { ContextComponent } from './context/context.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashComponent,
    ContextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
