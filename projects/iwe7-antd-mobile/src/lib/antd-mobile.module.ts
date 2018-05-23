import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { ActionSheetComponent } from "./action-sheet/action-sheet.component";
import { ActivityIndicatorComponent } from "./activity-indicator/activity-indicator.component";
import { FlexComponent } from "./flex/flex.component";
import { FlexItemComponent } from "./flex-item/flex-item.component";
import { GridComponent } from "./grid/grid.component";
import { ColumnNumDirective } from "./grid/column-num.directive";
import { WhiteSpaceDirective } from "./white-space.directive";
import { WingBlankDirective } from "./wing-blank.directive";
import { DrawerComponent } from "./drawer/drawer.component";

import { ListHeaderDirective } from "./list/list-header.directive";
import { ListBodyDirective } from "./list/list-body.directive";
import { ListItemComponent } from "./list/list-item.component";
import { ListLineDirective } from "./list/list-line.directive";
import { ListContentDirective } from "./list/list-content.directive";
import { ListExtraDirective } from "./list/list-extra.directive";
import { ListComponent } from "./list/list.component";
import { ListArrowDirective } from "./list/list-arrow.directive";
import { ListThumbComponent } from "./list/list-thumb.component";
import { MenuComponent } from "./menu/menu.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IconComponent } from "./icon/icon.component";
import { loadSprite } from "./icon.service";
import { PopoverComponent } from "./popover/popover.component";
import { PopoverItemComponent } from "./popover/popover-item/popover-item.component";
import { SegmentedControlComponent } from "./segmented-control/segmented-control.component";
import { TabBarComponent } from "./tab-bar/tab-bar.component";
import { PullToRefreshComponent } from "./pull-to-refresh/pull-to-refresh.component";

export const components = [
  ButtonComponent,
  ActionSheetComponent,
  ActivityIndicatorComponent,
  FlexComponent,
  FlexItemComponent,
  GridComponent,
  ColumnNumDirective,
  WhiteSpaceDirective,
  WingBlankDirective,
  DrawerComponent,
  ListHeaderDirective,
  ListBodyDirective,
  ListItemComponent,
  ListLineDirective,
  ListContentDirective,
  ListExtraDirective,
  ListComponent,
  ListArrowDirective,
  ListThumbComponent,
  MenuComponent,
  NavbarComponent,
  IconComponent,
  PopoverComponent,
  PopoverItemComponent,
  SegmentedControlComponent,
  TabBarComponent,
  TabBarItemComponent,
  CarouselComponent,
  PullToRefreshComponent
];

import { TabsModule } from "./tabs/tabs.module";
import { BadgeModule } from "./badge/badge.module";
import { TabBarItemComponent } from "./tab-bar/tab-bar-item/tab-bar-item.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, TabsModule, BadgeModule, RouterModule],
  declarations: [...components],
  exports: [...components, TabsModule, BadgeModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return () => {
          loadSprite();
        };
      },
      multi: true
    }
  ]
})
export class AntdMobileModule {}
