import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {CourseService} from "../course.service";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styles: [
  ]
})
export class EditCourseComponent  {

  item: Course | undefined;

  private id: number;

  constructor(private route: ActivatedRoute,
              private coursesService: CourseService,
              private router: Router) {
    this.id = Number(route.snapshot.paramMap.get('id'));

    coursesService.getById(this.id)
      .subscribe(value => {
        this.item = value;
      })
  }


  submit(form: NgForm) {
    if(form.invalid || !this.item){
      return
    }

    this.coursesService.edit(this.item)
      .subscribe(() => {
        this.router.navigate(['/courses'])
      })
  }
}
