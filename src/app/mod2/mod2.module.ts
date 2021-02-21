import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';



@NgModule({
  declarations: [Mod2Component],
  imports: [
    CommonModule
  ],
  exports: [Mod2Component]
})
export class Mod2Module { }
