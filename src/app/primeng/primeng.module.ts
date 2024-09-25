import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

const primeNG: any = [
  ButtonModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [primeNG]
})
export class PrimengModule { }
