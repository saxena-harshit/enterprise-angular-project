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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollTableComponent } from './components/virtual-scroll-table/virtual-scroll-table.component';
import { DynamicMultiStepFormComponent } from './dynamic-multi-step-form/dynamic-multi-step-form.component';


@NgModule({
  declarations: [
    LoaderComponent,
    DynamicformComponent,
    DynamicTableComponent,
    ManualTableComponent,
    VirtualScrollTableComponent,
    DynamicMultiStepFormComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, MaterialModule,
    A11yModule,FormsModule,
    ScrollingModule
],exports:[
    LoaderComponent,
    DynamicformComponent,
    MaterialModule,DynamicTableComponent,ManualTableComponent,VirtualScrollTableComponent,DynamicMultiStepFormComponent
  ]
})
export class SharedModule { }
