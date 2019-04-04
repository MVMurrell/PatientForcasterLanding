import { SectionsComponent } from './../sections/sections.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeadersComponent } from '../sections/headers/headers.component';
import { FeaturesComponent } from '../sections/features/features.component';
import { BlogsComponent } from '../sections/blogs/blogs.component';
import { TeamsComponent } from '../sections/teams/teams.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { PricingComponent } from '../sections/pricing/pricing.component';
import { TestimonialsComponent } from '../sections/testimonials/testimonials.component';
import { ContactsComponent } from '../sections/contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
    RouterModule
  ],
  declarations: [
    HomeComponent,
    SectionsComponent,
    HeadersComponent,
    FeaturesComponent,
    BlogsComponent,
    TeamsComponent,
    ProjectsComponent,
    PricingComponent,
    TestimonialsComponent,
    ContactsComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
