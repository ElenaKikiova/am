import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from '../components/components.module';
import { AddEditModalComponent } from '../components/add-edit-modal/add-edit-modal.component';
import { ViewModalComponent } from '../components/view-modal/view-modal.component';

@Component({
  selector: 'app-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.css']
})
export class AllApplicationsComponent implements OnInit {

  public applications = [];

  public englishLevels = [
    "A1", "A2", "B1", "B2", "C1", "C2"
  ]

  public lastIndex = 0;

  public application = {};

  public columns = [
    { prop: 'index', name: 'ID' }, 
    { prop: 'name', name: 'Name' }, 
    { prop: 'email', name: 'Email' }, 
    { prop: 'age', name: 'Age' }, 
    { prop: 'phone', name: 'Phone Number' },
    { prop: 'available', name: 'Available to Start' },
  ];

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.resetApplication();

    this.applications = JSON.parse(localStorage.getItem("applications"));
    if(this.applications == null) this.applications = [];
    this.applications = [...this.applications];

  }


  async resetApplication(){
    this.application = {
      index: this.lastIndex,
      name: "",
      email: "",
      age: Number,
      phone: "",
      wayOfComm: 0,
      englishLvl: 0,
      available: "",
      skillsAndCourses: "",
      presentation: "",
      fromHome: false
    }
  }

  async applyChanges(){
    this.resetApplication();
    this.applications = [...this.applications]; // refresh ngx datatable
    localStorage.setItem("applications", JSON.stringify(this.applications)); 
  }

  async addEditApplication(){
    
    const modalRef = this.modalService.open(AddEditModalComponent);
    modalRef.componentInstance.application = this.application;
    modalRef.componentInstance.englishLevels = this.englishLevels;

    modalRef.result.then((result) => {
      if(result != null){
        this.application = result;
        this.saveApplication();
      }
    });

  }

  async saveApplication(){
    console.log(this.application);
    let index = this.applications.findIndex((a) => a.index == this.application["index"]);
    if(index == -1){
      this.applications.push(this.application);
      this.lastIndex++;
    }
    else{
      this.applications[index] = this.application;
    }
    this.applyChanges();
  }

  async onActivate(event) {
    (event.type === 'click') && event.cellElement.blur();
    if(event.type == 'click') {
      this.showApplication(event.row);
    }
    
}

  async showApplication(application){
    this.application = application;

    const modalRef = this.modalService.open(ViewModalComponent);
    modalRef.componentInstance.application = this.application;
    modalRef.componentInstance.englishLevels = this.englishLevels;

    modalRef.result.then((result) => {
      if(result == "edit"){
        this.addEditApplication();
      }
      else if(result == "delete"){
        this.deleteApplication();
      }
    });

  }

  async deleteApplication(){
    let index = this.applications.findIndex((a) => a.index = this.application["index"]);
    this.applications.splice(index, 1);
    this.applyChanges();
  }



}
