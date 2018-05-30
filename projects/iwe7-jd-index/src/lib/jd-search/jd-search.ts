import { Component, Output, EventEmitter, OnInit, ViewEncapsulation, Injector, Input, Injectable, forwardRef } from '@angular/core';
import { BaseWithIcss } from 'iwe7-base';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
export interface JdSearchInputs {
  height: string;
  heightView: string;
  placeholder: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class JdSearchInputsDefault implements JdSearchInputs {
  height: string = '52px';
  heightView: string = '30px';
  placeholder: string = '居家好物低至5折 领券满199减100';
  value: string;
}

@Component({
  selector: 'jd-search',
  templateUrl: 'jd-search.html',
  styleUrls: ['./jd-search.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => JdSearchComponent),
    multi: true
  }]
})
export class JdSearchComponent extends BaseWithIcss implements OnInit, ControlValueAccessor {
  @Input() height: string;
  @Input() heightView: string;
  @Input() placeholder: string;
  @Input() value: string;

  @Output() leftStream: EventEmitter<any> = new EventEmitter();
  @Output() rightStream: EventEmitter<any> = new EventEmitter();
  constructor(injector: Injector, public _default: JdSearchInputsDefault) {
    super(injector);
    Object.assign(this, this._default);
    this.setStyleInputs(['height', 'heightView']);
  }

  _leftStream(e: any) {
    this.leftStream.emit(e);
  }

  _rightStream(e: any) {
    this.rightStream.emit(e);
  }

  _change(e: any) {
    this._onChange(e);
  }

  _onChange: (_: any) => {};
  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
