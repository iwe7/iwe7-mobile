import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { ActionSheetComponent } from "./action-sheet/action-sheet.component";
import { ActivityIndicatorComponent } from "./activity-indicator/activity-indicator.component";
import { GridComponent } from "./grid/grid.component";
import { ColumnNumDirective } from "./grid/column-num.directive";
import { WhiteSpaceDirective } from "./white-space.directive";
import { WingBlankDirective } from "./wing-blank.directive";
import { DrawerComponent } from "./drawer/drawer.component";

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
  GridComponent,
  ColumnNumDirective,
  WhiteSpaceDirective,
  WingBlankDirective,
  DrawerComponent,

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
import { StepsModule } from "./steps/module";
import { AmListModule } from "./list/module";
import { AmStepperModule } from "./stepper/module";
import { AmFlexBoxModule } from "./flexbox/module";
import { AmImagePickerModule } from "./image-picker/module";
import { AmSearchModule } from "./search/module";
import { AmSwitchModule } from "./switch/module";
import { AmSLiderModule } from "./slider/module";
import { AmRadioModule } from "./radio/module";
import { AmCheckboxModule } from "./checkbox/module";
import { AmPickerModule } from "./picker/module";
import { AmPickerDateModule } from "./picker-date/module";
import { AmPickerPopupModule } from "./picker-popup/module";
import { AmTextareaModule } from "./textarea/module";
import { AmToastModule } from "./toast/module";

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    BadgeModule,
    RouterModule,
    StepsModule,
    AmListModule,
    AmStepperModule,
    AmFlexBoxModule,
    AmImagePickerModule,
    AmSearchModule,
    AmSwitchModule,
    AmSLiderModule,
    AmRadioModule,
    AmCheckboxModule,
    AmPickerModule,
    AmPickerDateModule,
    AmPickerPopupModule,
    AmTextareaModule,
    AmToastModule
  ],
  declarations: [...components],
  exports: [
    ...components,
    TabsModule,
    BadgeModule,
    StepsModule,
    AmListModule,
    AmStepperModule,
    AmFlexBoxModule,
    AmImagePickerModule,
    AmSearchModule,
    AmSwitchModule,
    AmSLiderModule,
    AmRadioModule,
    AmCheckboxModule,
    AmPickerModule,
    AmPickerDateModule,
    AmPickerPopupModule,
    AmTextareaModule,
    AmToastModule
  ],
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
