import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListHeaderDirective } from "./list-header.directive";
import { ListBodyDirective } from "./list-body.directive";
import { ListItemComponent } from "./list-item.component";
import { ListLineDirective } from "./list-line.directive";
import { ListContentDirective } from "./list-content.directive";
import { ListExtraDirective } from "./list-extra.directive";
import { ListComponent } from "./list.component";
import { ListArrowDirective } from "./list-arrow.directive";
import { ListThumbComponent } from "./list-thumb.component";

export const LISTComponents = [
  ListHeaderDirective,
  ListBodyDirective,
  ListItemComponent,
  ListLineDirective,
  ListContentDirective,
  ListExtraDirective,
  ListComponent,
  ListArrowDirective,
  ListThumbComponent
];

@NgModule({
  imports: [CommonModule],
  exports: [
    LISTComponents
  ],
  declarations: [
    LISTComponents
  ],
  providers: []
})
export class AmListModule {}
