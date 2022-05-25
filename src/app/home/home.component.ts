import { Component } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {


  name = "brano";
  count =  0;
  key = "todo-name";
  key2 = "todo-count"

  constructor(private localStorageService: LocalStorageService) {
    this.count = localStorageService.get(this.key2);
    this.name = localStorageService.get(this.key);
  }

  increment(){
    this.count++;
    this.localStorageService.set(this.key2,this.count);
  }

  onToggle(name: string) {
    this.localStorageService.set(this.key,name);
  }
}
