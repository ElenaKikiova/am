import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditModalComponent } from '../add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {

  @Input() application: any;
  @Input() englishLevels: Array<String>;

  constructor(
    public activeModal: NgbActiveModal,
    public modalService: NgbModal
  ) { }


  ngOnInit(): void {}
  
}
