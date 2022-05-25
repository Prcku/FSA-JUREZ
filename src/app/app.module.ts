import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';
import {LocalStorageModule} from "angular-2-local-storage";
import {registerLocaleData} from "@angular/common";
import localeSk from '@angular/common/locales/sk';
import { TodoItemPipe } from './todo-item.pipe';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EditCourseComponent } from './edit-course/edit-course.component'
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';

registerLocaleData(localeSk)

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HomeComponent,
    NotFoundComponent,
    TodoComponent,
    TodoItemPipe,
    CoursesComponent,
    TeachersComponent,
    NewCourseComponent,
    CourseDetailComponent,
    EditCourseComponent,
    LoginComponent


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'my-first-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'sk'}
  ],
  // HttpClientModule,
  bootstrap: [AppComponent]
})
export class AppModule { }
