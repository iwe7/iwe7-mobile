import { NgModule } from "@angular/core";
import { TabsComponent } from "./tabs.component";
import { TabBarComponent } from "./tab-bar/tab-bar.component";
import { TabPaneComponent } from "./tab-pane/tab-pane.component";
import { TabBarItemDirective } from "./tab-bar/tab-bar-item.directive";
import { TabBarUnderlineDirective } from "./tab-bar/tab-bar-underline.directive";
import { CommonModule } from "@angular/common";
import { AmBadgeModule } from "../badge/module";
@NgModule({
  imports: [CommonModule, AmBadgeModule],
  exports: [TabsComponent],
  declarations: [
    TabsComponent,
    TabBarItemDirective,
    TabBarUnderlineDirective,
    TabBarComponent,
    TabPaneComponent
  ],
  providers: []
})
export class TabsModule {}
