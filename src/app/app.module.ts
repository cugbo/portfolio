import { ContactmeComponent } from './components/contactme/contactme.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyservicesComponent } from './components/myservices/myservices.component';
import { MyskillsComponent } from './components/myskills/myskills.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './components/user.service';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
