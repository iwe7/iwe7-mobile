import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Observable, Operator, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export abstract class Action {
    type: string;
}

export abstract class ActionReducer<S, A> {

}
export abstract class StateObservable extends Observable<any> { }
export abstract class ActionsSubject extends BehaviorSubject<Action> {

}
export abstract class ReducerManager extends ActionsSubject {
    abstract addReducer(key: string, reducer: ActionReducer<any, any>): void;
    abstract removeReducer(key: string): void;
}

export abstract class Iwe7Store<T> extends Observable<T> {
    abstract select<K = any>(...paths: string[]): Observable<K>;
    abstract select(
        pathOrMapFn: ((state: T) => any) | string,
        ...paths: string[]
    ): Observable<any>;
    abstract dispatch<V extends Action = Action>(action: V);
    abstract lift<R>(operator: Operator<T, R>): Iwe7Store<R>;
    abstract next(action: Action): void;
    abstract error(err: any): void;
    abstract complete(): void;
    abstract addReducer<State, Actions extends Action = Action>(
        key: string,
        reducer: ActionReducer<State, Actions>
    ): void;
    abstract removeReducer<Key extends keyof T>(key: Key): void;
}

export class Iwe7StoreDefault<T> extends Iwe7Store<T> {
    constructor(
        state: StateObservable,
        private actionsObserver: ActionsSubject,
        private reducerManager: ReducerManager
    ) {
        super();
        this.source = state;
    }
    select(
        pathOrMapFn: ((state: T) => any) | string,
        ...paths: string[]
    ): (source$: Observable<T>) => Observable<K> {
        return function selectOperator(source$: Observable<T>): Observable<K> {
            let mapped$: Observable<any>;
            if (typeof pathOrMapFn === 'string') {
                mapped$ = source$.pipe(pluck(pathOrMapFn, ...paths));
            }
            return mapped$.pipe(distinctUntilChanged());
        }
    }
    dispatch<V extends Action = Action>(action: V) {
        this.actionsObserver.next(action);
    }
    lift<R>(operator: Operator<T, R>): Iwe7Store<R> {
        const store = new Iwe7StoreDefault<R>(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    }
    next(action: Action): void {
        this.actionsObserver.next(action);
    }
    error(err: any): void {
        this.actionsObserver.error(err);
    }
    complete(): void {
        this.actionsObserver.complete();
    }
    addReducer<State, Actions extends Action = Action>(
        key: string,
        reducer: ActionReducer<State, Actions>
    ): void {
        this.reducerManager.addReducer(key, reducer);
    }
    removeReducer<Key extends keyof T>(key: Key): void {
        this.reducerManager.removeReducer(key);
    }
}
