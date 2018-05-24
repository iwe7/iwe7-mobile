export function getClosureSafeProperty<T>(
  objWithPropertyToExtract: T,
  target: any
): string {
  for (const key in objWithPropertyToExtract) {
    if (objWithPropertyToExtract[key] === target) {
      return key;
    }
  }
  throw Error("Could not find renamed property on target object.");
}
