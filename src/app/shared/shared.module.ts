import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    LoaderComponent,
    DynamicformComponent,
    DynamicTableComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,MaterialModule
  ],exports:[
    LoaderComponent,
    DynamicformComponent,
    MaterialModule,DynamicTableComponent
  ]
})
export class SharedModule { }
