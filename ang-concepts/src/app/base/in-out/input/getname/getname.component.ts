import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getname',
  templateUrl: './getname.component.html',
  styleUrls: ['./getname.component.css']
})
export class GetnameComponent implements OnInit {

  constructor() { }

  @Input() fullName: string = '';

  ngOnInit(): void {
  }


}
