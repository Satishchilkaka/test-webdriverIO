import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('test');
  }

  fullNewName: string = 'Frank Smith';
  @Output() pname = new EventEmitter<string>();
  addName(value: string) {
    this.pname.emit(value);
    console.log(this.pname);
  }
}
