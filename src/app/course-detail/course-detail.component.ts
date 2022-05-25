import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {CourseService} from "../course.service";
import {Course} from "../course";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: [
  ]
})
export class CourseDetailComponent  {

  id: number | undefined ;
  item: Course | undefined;

  constructor(private route: ActivatedRoute, private coursesServices: CourseService) {
    this.id = Number(route.snapshot.paramMap.get('id'));

    coursesServices.getById(this.id)
      .subscribe(value => this.item = value)
  }



}
