import { Observable } from "rxjs";
export type ListRange = { start: number; end: number };
export interface CollectionViewer {
  viewChange: Observable<ListRange>;
}
