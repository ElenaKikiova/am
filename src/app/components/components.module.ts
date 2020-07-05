import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';

@NgModule({
  declarations: [
    AddEditModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddEditModalComponent
  ],
  bootstrap: [
    AddEditModalComponent
  ],
})
export class ComponentsModule { }
