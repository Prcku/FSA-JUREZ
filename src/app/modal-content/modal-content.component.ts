import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
})
export class ModalContentComponent implements OnInit {

  name = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
