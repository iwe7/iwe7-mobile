import { Observable, of as observableOf } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
export class ArrayDataSource<T> extends DataSource<T> {
  constructor(private _data: T[] | Observable<T[]>) {
    super();
  }
  connect(): Observable<T[]> {
    return this._data instanceof Observable
      ? this._data
      : observableOf(this._data);
  }
  disconnect() {}
}
