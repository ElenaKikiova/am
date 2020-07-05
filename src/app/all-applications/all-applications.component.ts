import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddEditModalComponent } from '../components/add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.scss']
})
export class AllApplicationsComponent implements OnInit {

  public applications = [];

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  async addApplication(){
    
    let refference = this.modalService.open(AddEditModalComponent);

  }

}
