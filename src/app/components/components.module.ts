import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { ViewModalComponent } from './view-modal/view-modal.component';

@NgModule({
  declarations: [
    AddEditModalComponent,
    ViewModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddEditModalComponent,
    ViewModalComponent
  ],
  bootstrap: [
    AddEditModalComponent,
    ViewModalComponent
  ],
})
export class ComponentsModule { }
