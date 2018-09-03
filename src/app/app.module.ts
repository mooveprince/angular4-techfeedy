import { HackernewsService } from './service/hackernews.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { ContextComponent } from './context/context.component';
import { HttpModule } from '@angular/http';
import { HackernewsComponent } from './hackernews/hackernews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashComponent,
    ContextComponent,
    HackernewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HackernewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
