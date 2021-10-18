import { ContactmeComponent } from './components/contactme/contactme.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyservicesComponent } from './components/myservices/myservices.component';
import { MyskillsComponent } from './components/myskills/myskills.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutmeComponent,
    MyskillsComponent,
    MyservicesComponent,
    MyprojectsComponent,
    ContactmeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
