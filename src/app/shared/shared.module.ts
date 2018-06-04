import { Iwe7ImModule } from './../../../projects/iwe7-im/src/lib/iwe7-im.module';
import { Iwe7TabbarModule } from './../../../projects/iwe7-tabbar/src/lib/iwe7-tabbar.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from "iwe7-dialog";
import { ScrollingModule } from "iwe7-scrolling";
import {
  Iwe7ButtonComponent,
} from "./button.example";
import { ReactiveFormsModule } from "@angular/forms";

import { Iwe7AdvsModule } from './../../../projects/iwe7-advs/src/lib/iwe7-advs.module';
import { Iwe7ItemModule } from './../../../projects/iwe7-item/src/lib/iwe7-item.module';
import { Iwe7BetterScrollModule } from './../../../projects/iwe7-better-scroll/src/lib/iwe7-better-scroll.module';
import { AntdMobileModule } from "../../../projects/iwe7-antd-mobile/src/public_api";
import { Iwe7JdIndexModule } from '../../../projects/iwe7-jd-index/src/public_api';
import { Iwe7JdChannelModule } from "../../../projects/iwe7-jd-channel/src/public_api";
import { Iwe7MapModule } from '../../../projects/iwe7-map/src/public_api';
import { Iwe7BadgeModule } from '../../../projects/iwe7-badge/src/public_api';
import { Iwe7TabsModule } from './../../../projects/iwe7-tabs/src/lib/iwe7-tabs.module';
import { Iwe7NavbarModule } from "../../../projects/iwe7-navbar/src/public_api";
import { MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    AntdMobileModule,
    ComponentsModule,
    HttpClientModule,
    DialogModule,
    ScrollingModule,
    ReactiveFormsModule,
    Iwe7JdIndexModule,
    Iwe7JdChannelModule,
    Iwe7BetterScrollModule,
    Iwe7ItemModule,
    Iwe7AdvsModule,
    Iwe7MapModule,
    Iwe7BadgeModule,
    Iwe7TabsModule,
    Iwe7NavbarModule,
    Iwe7TabbarModule,
    Iwe7ImModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [Iwe7ButtonComponent],
  exports: [
    AntdMobileModule,
    ComponentsModule,
    DialogModule,
    ScrollingModule,
    Iwe7ButtonComponent,
    ReactiveFormsModule,
    Iwe7JdIndexModule,
    Iwe7JdChannelModule,
    Iwe7BetterScrollModule,
    Iwe7ItemModule,
    Iwe7AdvsModule,
    Iwe7MapModule,
    Iwe7BadgeModule,
    Iwe7TabsModule,
    Iwe7NavbarModule,
    Iwe7TabbarModule,
    Iwe7ImModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
