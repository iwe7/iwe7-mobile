import { TabsUnderlineDirective } from './tabs-item/tabs-underline';
import { TabsOutletComponent } from './tabs-outlet/tabs-outlet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsItemDirective } from './tabs-item/tabs-item';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsOutletComponent,
    TabsItemDirective,
    TabsUnderlineDirective
  ],
  exports: [
    TabsOutletComponent,
    TabsItemDirective,
    TabsUnderlineDirective
  ]
})
export class Iwe7TabsModule { }
