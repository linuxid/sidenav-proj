import { Component } from '@angular/core';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent  {
  butText='Hello world!';
  opened=false;
  toggleName(op){
    if (op) this.butText='Bye world';
    else this.butText='Hello world';
  }



}
