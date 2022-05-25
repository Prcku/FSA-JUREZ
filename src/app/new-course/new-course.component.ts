import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {CourseService} from "../course.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styles: [
  ]
})
export class NewCourseComponent  {

  item = {} as Course;
  constructor(private courses: CourseService,
              private router: Router) {

  }


  submit(formElement: NgForm) {
    if (formElement.invalid){
      return
    }
    this.courses.add(this.item)
      .subscribe((id) => {
        this.router.navigate(['/courses',id])
      })

  }
}
