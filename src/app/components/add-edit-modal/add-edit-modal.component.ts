import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, ValidationErrors, FormGroupDirective, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  async save(){
    
  }

}
