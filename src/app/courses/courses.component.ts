// import { Component, OnInit } from '@angular/core';
import {CourseService} from "../course.service";
import {Component} from "@angular/core";
import {Course} from "../course";
import {Router} from "@angular/router";



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [
  ]
})
export class CoursesComponent {

  items: Course[] | undefined;
  item = {} as Course;

  constructor(private coursesService: CourseService
  ,private router: Router) {
   this.reload()
  }
  reload(){
    this.coursesService.getAll()
      .subscribe(value => {
        this.items = value
      })
  }

  delete(item: Course){
    if (confirm(`Delete ${item.name} ?`)){
      this.coursesService.delete(item.id)
        .subscribe(() =>{
          this.reload();
        })
    }

  }

}
