import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadeau } from 'src/app/models/cadeau.model';
import { CadeauService } from 'src/app/services/cadeau.service';

@Component({
  selector: 'app-cadeau-form',
  templateUrl: './cadeau-form.component.html',
  styleUrls: ['./cadeau-form.component.css']
})
export class CadeauFormComponent implements OnInit {

  cadeauForm = new FormGroup({});

  @Output() save = new EventEmitter<Cadeau>();

  constructor(private fb: FormBuilder) {
    this.cadeauForm = this.fb.group({
      titre: new FormControl([""]),
      description: new FormControl([""]),
      url: new FormControl([""]),
      imgUrl: new FormControl([""])
  })
}

  ngOnInit(): void {
  }

  // ajouterCadeau(){
  //   this.service.create(this.cadeauForm.value).subscribe(() => {
  //     this.router.navigateByUrl("/cadeaux")},
  //     err => {
  //       alert (err)
  //     })
  //   };
  //
   ajouterCadeau(){
     this.save.emit(this.cadeauForm.value);
     this.cadeauForm.reset();
   }

}
