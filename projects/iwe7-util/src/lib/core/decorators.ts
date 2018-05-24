import { Type } from "@angular/core";
export interface TypeDecorator {
  <T extends Type<any>>(type: T): T;
  (
    target: Object,
    propertyKey?: string | symbol,
    parameterIndex?: number
  ): void;
}
export const ANNOTATIONS = "__annotations__";
export const PARAMETERS = "__parameters__";
export const PROP_METADATA = "__prop__metadata__";
// 定义
export function makeDecorator(
  name: string,
  props?: (...args: any[]) => any,
  parentClass?: any,
  chainFn?: (fn: Function) => void,
  typeFn?: (type: Type<any>, ...args: any[]) => void
): {
  new (...args: any[]): any;
  (...args: any[]): any;
  (...args: any[]): (cls: any) => any;
} {
  const metaCtor = makeMetadataCtor(props);
  function DecoratorFactory(...args: any[]): (cls: any) => any {
    if (this instanceof DecoratorFactory) {
      metaCtor.call(this, ...args);
      return this;
    }
    const annotationInstance = new (<any>DecoratorFactory)(...args);
    const TypeDecorator: TypeDecorator = <TypeDecorator>function TypeDecorator(
      cls: Type<any>
    ) {
      typeFn && typeFn(cls, ...args);
      const annotations = cls.hasOwnProperty(ANNOTATIONS)
        ? (cls as any)[ANNOTATIONS]
        : Object.defineProperty(cls, ANNOTATIONS, { value: [] })[ANNOTATIONS];
      annotations.push(annotationInstance);
      return cls;
    };
    if (chainFn) chainFn(TypeDecorator);
    return TypeDecorator;
  }
  if (parentClass) {
    DecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  DecoratorFactory.prototype.ngMetadataName = name;
  (<any>DecoratorFactory).annotationCls = DecoratorFactory;
  return DecoratorFactory as any;
}
// 类
function makeMetadataCtor(props?: (...args: any[]) => any): any {
  return function ctor(...args: any[]) {
    if (props) {
      const values = props(...args);
      for (const propName in values) {
        this[propName] = values[propName];
      }
    }
  };
}
// 参数
export function makeParamDecorator(
  name: string,
  props?: (...args: any[]) => any,
  parentClass?: any
): any {
  const metaCtor = makeMetadataCtor(props);
  function ParamDecoratorFactory(...args: any[]): any {
    if (this instanceof ParamDecoratorFactory) {
      metaCtor.apply(this, args);
      return this;
    }
    const annotationInstance = new (<any>ParamDecoratorFactory)(...args);
    (<any>ParamDecorator).annotation = annotationInstance;
    return ParamDecorator;
    function ParamDecorator(cls: any, unusedKey: any, index: number): any {
      const parameters = cls.hasOwnProperty(PARAMETERS)
        ? (cls as any)[PARAMETERS]
        : Object.defineProperty(cls, PARAMETERS, { value: [] })[PARAMETERS];
      while (parameters.length <= index) {
        parameters.push(null);
      }
      (parameters[index] = parameters[index] || []).push(annotationInstance);
      return cls;
    }
  }
  if (parentClass) {
    ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  ParamDecoratorFactory.prototype.ngMetadataName = name;
  (<any>ParamDecoratorFactory).annotationCls = ParamDecoratorFactory;
  return ParamDecoratorFactory;
}
// 属性
export function makePropDecorator(
  name: string,
  props?: (...args: any[]) => any,
  parentClass?: any
): any {
  const metaCtor = makeMetadataCtor(props);
  function PropDecoratorFactory(...args: any[]): any {
    if (this instanceof PropDecoratorFactory) {
      metaCtor.apply(this, args);
      return this;
    }
    const decoratorInstance = new (<any>PropDecoratorFactory)(...args);
    return function PropDecorator(target: any, name: string) {
      const constructor = target.constructor;
      const meta = constructor.hasOwnProperty(PROP_METADATA)
        ? (constructor as any)[PROP_METADATA]
        : Object.defineProperty(constructor, PROP_METADATA, { value: {} })[
            PROP_METADATA
          ];
      meta[name] = (meta.hasOwnProperty(name) && meta[name]) || [];
      meta[name].unshift(decoratorInstance);
    };
  }
  if (parentClass) {
    PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  PropDecoratorFactory.prototype.ngMetadataName = name;
  (<any>PropDecoratorFactory).annotationCls = PropDecoratorFactory;
  return PropDecoratorFactory;
}
