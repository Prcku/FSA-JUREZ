import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "./course";
import {CoursesComponent} from "./courses/courses.component";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

  }

  getAll(){
    return this.http.get<Course[]>('/api/courses');
  }
  getById(id:number){
    return this.http.get<Course>('/api/courses/' + id);
  }
  add(course: Course){
    return this.http.post('/api/courses',course);
  }

  edit(course: Course) {
    return this.http.put<void>(`/api/courses/${course.id}`, course)
  }
  delete(id:number){
    return this.http.delete<Course>("/api/courses/" + id )
  }
}
