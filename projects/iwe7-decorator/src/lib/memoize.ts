import * as _ from "lodash";
export interface Resolver {
  (...args: any[]): any;
}

export const memoize = (resolver?: Resolver) => (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor => {
  if (typeof descriptor.value !== "function") {
    throw new Error("memoize can be applied only to methods");
  }
  descriptor.value = _.memoize(descriptor.value, resolver);
  return descriptor;
};
