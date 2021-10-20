import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageHelper } from './local-storage-helper';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageHelper,
  ]
})

export class SharedModule { }
