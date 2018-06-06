### 仿京东首页

> 用angular仿京东首页

```html
<!-- 提示 -->
<jd-tip></jd-tip>
<!-- 搜索 -->
<jd-search [height]="header.height" [heightView]="header.heightView" (leftStream)="leftStream($event)" (rightStream)="rightStream($event)"
  [(ngModel)]="key" (focusStream)="focusSearch($event)"></jd-search>
  <!-- 滑动广告 -->
<jd-swiper></jd-swiper>
<!-- 导航 -->
<jd-grid>
  <ng-template let-col="col" let-row="row">
    <jd-box [title]="col+'-'+row"></jd-box>
  </ng-template>
</jd-grid>
<!-- 京东快报 -->
<jd-news></jd-news>
<!-- 广告楼层 -->
<jd-floor>
  <ng-template #title>
    <img src="https://m.360buyimg.com/mobilecms/jfs/t18535/84/701712774/27096/4495e446/5aa0def4N4412e53b.png!q70.jpg">
  </ng-template>
  <ng-template #content let-item>
    <img src="https://m.360buyimg.com/mobilecms/jfs/t22090/138/737565925/182989/5c2f9d34/5b174dc3Ndac4e0d8.gif" alt="">
  </ng-template>
</jd-floor>
<!-- 商品推荐 -->
<iwe7-flex wrap="wrap" justify="center">
  <jd-goods-item price="100"></jd-goods-item>
  <jd-goods-item price="200"></jd-goods-item>
  <jd-goods-item price="300"></jd-goods-item>
  <jd-goods-item price="400"></jd-goods-item>
  <jd-goods-item price="500"></jd-goods-item>
  <jd-goods-item price="600"></jd-goods-item>
</iwe7-flex>
<!-- 底部菜单 -->
<jd-footer></jd-footer>
<!-- 返回顶部 -->
<jd-to-top></jd-to-top>
```