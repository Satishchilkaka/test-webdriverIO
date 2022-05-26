import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() pname = new EventEmitter<string>();
  addName(value: string) {
    this.pname.emit(value);
    console.log(this.pname);
  }
}
