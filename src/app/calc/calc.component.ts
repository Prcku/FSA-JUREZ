import { Component, OnInit } from '@angular/core';
import {CalcService} from "../calc.service";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styles: [
  ]
})
export class CalcComponent  {

  valueA = 0;
  valueB = 0;
  result = 0;
  znamienko = "";
  constructor(private calcService: CalcService) {
  }
  add(){
    this.result = this.calcService.add(this.valueA,this.valueB);
    this.znamienko = "+";
  }
  minus(){
    this.result = this.calcService.minus(this.valueA,this.valueB);
    this.znamienko = "-";
  }
  multiply(){
    this.result = this.calcService.multiply(this.valueA,this.valueB);
    this.znamienko = "*";
  }
  divide(){
    this.result = this.calcService.divide(this.valueA,this.valueB);
    this.znamienko = "/";
  }
}
