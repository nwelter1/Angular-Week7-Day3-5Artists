import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-troyboi',
  templateUrl: './troyboi.component.html',
  styleUrls: ['./troyboi.component.scss']
})
export class TroyboiComponent implements OnInit {
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
