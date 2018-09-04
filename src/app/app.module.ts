import { TechmemeService } from './service/techmeme.service';
import { DataService } from './service/data.service';
import { HackernewsService } from './service/hackernews.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { ContextComponent } from './context/context.component';
import { HttpModule } from '@angular/http';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { TechmemeComponent } from './techmeme/techmeme.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { ProducthuntComponent } from './producthunt/producthunt.component';
import { TechcrunchService } from './service/techcrunch.service';
import { ProducthuntService } from './service/producthunt.service';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashComponent,
    ContextComponent,
    HackernewsComponent,
    TechmemeComponent,
    TechcrunchComponent,
    ProducthuntComponent,
    TermsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataService, 
    HackernewsService, 
    TechcrunchService,
    TechmemeService,
    ProducthuntService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
