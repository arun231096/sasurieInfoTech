import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SitDataService } from './sitData.Service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TeamComponent,
    ProjectsComponent,
    TechnologyComponent,
    ContactComponent,
    TopbarComponent,
    AboutComponent,
    ClientComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SitDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
