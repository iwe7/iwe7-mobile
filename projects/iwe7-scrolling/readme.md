# `iwe7-scrolling`

> @copy from @angular/cdk-experimental

### `CdkVirtualScrollViewport` Component

> selector `cdk-virtual-scroll-viewport`

```ts
// inputs
@Input() orientation: "horizontal" | "vertical" = "vertical";
```

#### `CdkVirtualForOf` Directive

> selector `[cdkVirtualFor][cdkVirtualForOf]`

```ts
// inputs
@Input() cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T>;
@Input() cdkVirtualForTrackBy: TrackByFunction<T> | undefined;
@Input() cdkVirtualForTemplate: TemplateRef<CdkVirtualForOfContext<T>>;
@Input() cdkVirtualForTemplateCacheSize: number = 20;
// 属性
viewChange = new Subject<ListRange>();
// 方法
measureRangeSize(range: ListRange,orientation: "horizontal" | "vertical"): number;
```

### `CdkAutoSizeVirtualScroll` Directive

> selector `cdk-virtual-scroll-viewport[autosize]`

```ts
// inputs
@Input() minBufferPx: number = 100;
@Input() addBufferPx: number = 200;
```

### ``
> selector `cdk-virtual-scroll-viewport[itemSize]`

```ts
@Input() itemSize: number = 20;
@Input() bufferSize: number = 5;
```

### `VirtualScrollStrategy` Interface

```ts
export interface VirtualScrollStrategy {
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport: CdkVirtualScrollViewport): void;

  /** Detaches this scroll strategy from the currently attached viewport. */
  detach(): void;

  /** Called when the viewport is scrolled (debounced using requestAnimationFrame). */
  onContentScrolled();

  /** Called when the length of the data changes. */
  onDataLengthChanged();

  /** Called when the range of items rendered in the DOM has changed. */
  onContentRendered();

  /** Called when the offset of the rendered items changed. */
  onRenderedOffsetChanged();
}
```

### `ItemSizeAverager` Class

### `AutoSizeVirtualScrollStrategy` implements VirtualScrollStrategy Class

### `FixedSizeVirtualScrollStrategy` implements VirtualScrollStrategy Class

