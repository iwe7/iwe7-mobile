import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-icon-page",
  templateUrl: "./icon.html",
  host: {
    [`[class.demo]`]: "true"
  },
  styleUrls: ["./icon.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppIconPageComponent {
  data: any[] = [
    {
      icon: "check-circle",
      title: "check-circle"
    },
    {
      icon: "check",
      title: "check"
    },
    {
      icon: "check-circle-o",
      title: "check-circle-o"
    },
    {
      icon: "cross-circle",
      title: "cross-circle"
    },
    {
      icon: "cross",
      title: "cross"
    },
    {
      icon: "cross-circle-o",
      title: "cross-circle-o"
    },
    {
      icon: "up",
      title: "up"
    },
    {
      icon: "down",
      title: "down"
    },
    {
      icon: "left",
      title: "left"
    },
    {
      icon: "right",
      title: "right"
    },
    {
      icon: "ellipsis",
      title: "ellipsis"
    },
    {
      icon: "loading",
      title: "loading"
    }
  ];

  data2: any[] = [
    {
      icon: "search",
      title: "xxs",
      size: 'xxs'
    },
    {
      icon: "search",
      title: "xs",
      size: 'xs'
    },
    {
      icon: "search",
      title: "sm",
      size: 'sm'
    },
    {
      icon: "search",
      title: "md",
      size: 'md'
    },
    {
      icon: "search",
      title: "lg",
      size: 'lg'
    }
  ];
}
