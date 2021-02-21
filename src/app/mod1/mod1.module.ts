import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Mod1Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [Mod1Component],
})
export class Mod1Module {}
