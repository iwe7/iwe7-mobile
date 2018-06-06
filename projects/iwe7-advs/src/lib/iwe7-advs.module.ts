import { Iwe7AdvsPopupComponent } from './iwe7-advs-popup/iwe7-advs-popup';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  imports: [
    PortalModule
  ],
  declarations: [Iwe7AdvsPopupComponent],
  exports: [Iwe7AdvsPopupComponent]
})
export class Iwe7AdvsModule { }
