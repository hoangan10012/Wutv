import { Component, OnInit, Input, EventEmitter, Output,NgModule } from '@angular/core';
import { FormControl,FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

 
  constructor() { }

  uploadform = new FormGroup({
    tittle: new FormControl(''),
    desc: new FormControl(''),
    thumbnail:new FormControl('')
  })
  ngOnInit() {}
  titleValid = new FormControl("", [
    Validators.required,
    Validators.minLength(5)
  ]);
  onChange() {
    // this.form.emit(this.titleValid.valid);
  }

 
}
