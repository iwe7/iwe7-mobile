const map: Map<string, any> = new Map();
export class MemoryStory {
  clear(): void {
    map.clear();
  }
  getItem(key: string): string | null {
    return map.get(key);
  }
  key(index: number): string | null {
    return map.keys[index];
  }
  removeItem(key: string): void {
    map.delete(key);
  }
  setItem(key: string, value: string): void {
    map.set(key, value);
  }
}
