import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursewareComponent } from './courseware/courseware.component';
import { CoursewareListComponent } from './courseware/courseware-list/courseware-list.component';
import { CoreModule } from '../core/core.module';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CoursewareComponent,
    CoursewareListComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    CarouselModule
  ],
  exports: [FormsModule, ReactiveFormsModule]
})
export class PagesModule { }
