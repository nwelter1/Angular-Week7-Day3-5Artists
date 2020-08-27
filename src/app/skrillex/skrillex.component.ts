import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-skrillex',
  templateUrl: './skrillex.component.html',
  styleUrls: ['./skrillex.component.scss']
})
export class SkrillexComponent implements OnInit {
  deadNameDisplay;
  deadBioDisplay;
  deadForm = new FormGroup({
    deadName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    deadBio: new FormControl('', [Validators.required, Validators.minLength(20)])
  })
  
  get deadName() {return this.deadForm.get('deadName')}
  get deadBio() {return this.deadForm.get('deadBio')}
  constructor() { }

  ngOnInit(): void {
  }

}
