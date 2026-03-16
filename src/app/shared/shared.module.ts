import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LayoutComponent } from '../layout/layout/layout.component';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    LoaderComponent
  ]
})
export class SharedModule { }
