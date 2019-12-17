import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '@app/@core/module-import.guard';
import { SERVICES } from '@app/@core/services';

export const CORE_PROVIDERS = [
  ...SERVICES
]

@NgModule({
  imports: [
    CommonModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
