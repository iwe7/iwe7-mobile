import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionSheetComponent } from "./action-sheet/action-sheet.component";
import { ActivityIndicatorComponent } from "./activity-indicator/activity-indicator.component";
import { WhiteSpaceDirective } from "./white-space.directive";
import { WingBlankDirective } from "./wing-blank.directive";
import { DrawerComponent } from "./drawer/drawer.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { loadSprite } from "./icon.service";
import { PopoverComponent } from "./popover/popover.component";
import { PopoverItemComponent } from "./popover/popover-item/popover-item.component";
import { SegmentedControlComponent } from "./segmented-control/segmented-control.component";
import { PullToRefreshComponent } from "./pull-to-refresh/pull-to-refresh.component";

export const components = [
  ActionSheetComponent,
  ActivityIndicatorComponent,
  WhiteSpaceDirective,
  WingBlankDirective,
  DrawerComponent,
  NavbarComponent,
  PopoverComponent,
  PopoverItemComponent,
  SegmentedControlComponent,
  CarouselComponent,
  PullToRefreshComponent
];

import { TabsModule } from "./tabs/tabs.module";
import { AmTabBarModule } from "./tab-bar/module";

import { AmBadgeModule } from "./badge/module";
import { CarouselComponent } from "./carousel/carousel.component";
import { RouterModule } from "@angular/router";
import { StepsModule } from "./steps/module";
import { AmListModule } from "./list/module";
import { AmStepperModule } from "./stepper/module";
import { Iwe7FlexBoxModule } from "../../../iwe7-flex/src/public_api";
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
import { AmIconModule } from "./icon/module";
import { AmInnerHtmlModule } from "./inner-html/module";
import { AmModalModule } from "./modal/module";
import { AmGridModule } from "./grid/module";
import { AmButtonModule } from "./button/module";
import { AmMenuModule } from "./menu/module";

export const AntdExportModule = [
  TabsModule,
  AmBadgeModule,
  RouterModule,
  StepsModule,
  AmListModule,
  AmStepperModule,
  Iwe7FlexBoxModule,
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
  AmToastModule,
  AmIconModule,
  AmInnerHtmlModule,
  AmModalModule,
  AmGridModule,
  AmButtonModule,
  AmMenuModule,
  AmTabBarModule
];
@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [
    ...components,
    ...AntdExportModule
  ],
  providers: []
})
export class AntdMobileModule {}
