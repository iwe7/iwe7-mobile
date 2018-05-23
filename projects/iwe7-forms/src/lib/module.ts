import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DelonUtilModule } from "@delon/util";

import { DelonFormConfig } from "./config";
import {
  SchemaValidatorFactory,
  AjvSchemaValidatorFactory
} from "./validator.factory";
import { SFComponent } from "./sf.component";
import { SFItemComponent } from "./sf-item.component";
import { SFItemWrapComponent } from "./sf-item-wrap.component";
import { SFTemplateDirective } from "./widgets/custom/sf-template.directive";
import { SFFixedDirective } from "./sf-fixed.directive";

const COMPONENTS = [
  SFComponent,
  SFItemComponent,
  SFItemWrapComponent,
  SFTemplateDirective,
  SFFixedDirective
];

// region: widgets

import { WidgetRegistry } from "./widget.factory";
import { NzWidgetRegistry } from "./widgets/nz-widget.registry";

const WIDGETS = [];

// endregion

@NgModule({
  imports: [CommonModule, FormsModule, DelonUtilModule],
  declarations: [...COMPONENTS, ...WIDGETS],
  entryComponents: [...WIDGETS],
  exports: [...COMPONENTS]
})
export class Iwe7FormsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Iwe7FormsModule,
      providers: [
        DelonFormConfig,
        {
          provide: SchemaValidatorFactory,
          useClass: AjvSchemaValidatorFactory
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry }
      ]
    };
  }
}
