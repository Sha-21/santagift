import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau.model';
import { CadeauService } from 'src/app/services/cadeau.service';

@Component({
  selector: 'app-cadeaux',
  templateUrl: './cadeaux.component.html',
  styleUrls: ['./cadeaux.component.css']
})
export class CadeauxComponent implements OnInit {

  cadeaux:  Cadeau[] = [];

  constructor(private service : CadeauService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(cadeaux=>this.cadeaux = cadeaux);
  }

  supprimerCadeau(id: string){
    this.service.delete(id).subscribe(() => {
      this.cadeaux = this.cadeaux.filter(cadeau=>cadeau.id!=id);
    })
  }

  save(cadeau:Cadeau){
    this.service.create(cadeau).subscribe(cadeau=>{
      this.cadeaux.push(cadeau)
    });
  }
}
