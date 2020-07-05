import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllApplicationsComponent } from './all-applications/all-applications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AddEditModalComponent } from './components/add-edit-modal/add-edit-modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    AllApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
