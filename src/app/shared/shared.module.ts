import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { MaterialModule } from './material/material.module';
import { ManualTableComponent } from './components/manual-table/manual-table.component';
import { A11yModule } from "@angular/cdk/a11y";
import { VirtualScrollTableComponent } from './components/virtual-scroll-table/virtual-scroll-table.component';
import { DynamicMultiStepFormComponent } from './dynamic-multi-step-form/dynamic-multi-step-form.component';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialogContent, MatDialogActions } from "@angular/material/dialog";
import { DynamicFormJobApplicationComponent } from './components/dynamic-form-job-application/dynamic-form-job-application.component';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    LoaderComponent,
    DynamicformComponent,
    DynamicTableComponent,
    ManualTableComponent,
    VirtualScrollTableComponent,
    DynamicMultiStepFormComponent,
    PopupComponent,
    DynamicFormJobApplicationComponent,

  ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule, MaterialModule,
    A11yModule, FormsModule,
    ScrollingModule,
    MatDialogContent,
    MatDialogActions,
],exports:[
    LoaderComponent,
    DynamicformComponent,
    MaterialModule,DynamicTableComponent,ManualTableComponent,VirtualScrollTableComponent,DynamicMultiStepFormComponent,
    DynamicFormJobApplicationComponent
  ]
})
export class SharedModule { }
