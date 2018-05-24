export function ClassDecorator() {
  return function(target) {
    console.log("I am class decorator");
  };
}


export function MethodDecorator() {
  return function(target, methodName: string, descriptor: PropertyDescriptor) {
    console.log("I am method decorator");
  };
}
export function Param1Decorator() {
  return function(target, methodName: string, paramIndex: number) {
    console.log("I am parameter1 decorator");
  };
}
export function Param2Decorator() {
  return function(target, methodName: string, paramIndex: number) {
    console.log("I am parameter2 decorator");
  };
}
export function PropertyDecorator() {
  return function(target, propertyName: string) {
    console.log("I am property decorator");
  };
}
