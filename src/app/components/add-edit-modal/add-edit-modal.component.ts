import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormControl, ValidationErrors, FormGroupDirective, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {

  @Input() application: any;
  @Input() englishLevels: Array<String>;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  public name;
  public email;
  public age;
  public phone;
  public wayOfComm;
  public englishLvl;
  public available;
  public skillsAndCourses;
  public presentation;
  public fromHome;

  public addEditForm;

  ngOnInit(): void {
    console.log(this.application);

    this.name = new FormControl(this.application.name, Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15)
    ]));

    this.email = new FormControl(this.application.email, Validators.compose([
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]));

    this.age = new FormControl(this.application.age, Validators.compose([
      Validators.required,
      Validators.min(18),
      Validators.max(99)
    ]));

    this.wayOfComm = new FormControl(this.application.wayOfComm, Validators.required);

    this.englishLvl = new FormControl(this.application.englishLvl, Validators.required);

    this.phone = new FormControl(this.application.phone, Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]));

    this.available = new FormControl(this.application.date, Validators.required);

    this.skillsAndCourses = new FormControl(this.application.skillsAndCourses, Validators.maxLength(200));
    this.presentation = new FormControl(this.application.presentation, Validators.maxLength(200));
    this.fromHome = new FormControl(this.application.fromHome);

    this.addEditForm = new FormGroup({
      name: this.name,
      email: this.email,
      age: this.age,
      phone: this.phone,
      wayOfComm: this.wayOfComm,
      englishLvl: this.englishLvl,
      available: this.available,
      skillsAndCourses: this.skillsAndCourses,
      presentation: this.presentation,
      fromHome: this.fromHome,
    });
  }
  

  public submit(){
    let data = {
      index: this.application.index,
      name: this.addEditForm.value.name,
      email: this.addEditForm.value.email,
      age: this.addEditForm.value.age,
      phone: this.addEditForm.value.phone,
      wayOfComm: this.addEditForm.value.wayOfComm,
      englishLvl: this.addEditForm.value.englishLvl,
      available: this.addEditForm.value.available,
      skillsAndCourses: this.addEditForm.value.skillsAndCourses,
      presentation: this.addEditForm.value.presentation,
      fromHome: this.addEditForm.value.fromHome,
    }
    console.log(data);
    this.activeModal.close(data);
  }


}
