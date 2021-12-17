import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau.model';

@Component({
  selector: 'app-cadeau-card',
  templateUrl: './cadeau-card.component.html',
  styleUrls: ['./cadeau-card.component.css']
})
export class CadeauCardComponent implements OnInit {

  @Input() cadeau !: Cadeau;

  @Output() deleteCadeauEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  supprimerCadeau(){
    this.deleteCadeauEvent.emit(this.cadeau.id)
  }
}
