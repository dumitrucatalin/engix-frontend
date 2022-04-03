import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SharedMaterialModule } from './shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    HttpClientModule
  ],
  exports: [FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    HttpClientModule]
})
export class SharedModule { }
