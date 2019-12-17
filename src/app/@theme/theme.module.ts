import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from '@app/@core/module-import.guard';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

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
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      // providers: [
      //   ...NbThemeModule.forRoot(
      //     {
      //       name: 'default',
      //     },
      //     [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
      //   ).providers,
      // ],
    };
  }
}
