import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './styles/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from '@app/@core/guards/module-import.guard';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const ThemeModules = [
  MaterialModule
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...ThemeModules
  ],
  exports: [
    ...BASE_MODULES,
    ...ThemeModules
  ]
})
export class ThemeModule {
  constructor(@Optional() @SkipSelf() parentModule: ThemeModule) {
    throwIfAlreadyLoaded(parentModule, 'ThemeModule');
  }
}
