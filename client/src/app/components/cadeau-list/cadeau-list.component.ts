import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau.model';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {

  @Input() cadeaux: Cadeau[] = [];
  @Output() deleteCadeauEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCadeauEvent(id: string){
    this.deleteCadeauEvent.emit(id);
  }
}
