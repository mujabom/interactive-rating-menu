// FILEPATH: /Users/mujabwsr/Desktop/react/ZodTesting/bunzody/bunzody/src/util/useArray.ts
import { useState } from "react";

export default function useArray<T>(defaultValue: T[]) {
  const [array, setArray] = useState<T[]>(defaultValue);

  function push(element: T): void {
    setArray((a) => [...a, element]);
  }

  function filter(
    callback: (value: T, index: number, array: T[]) => unknown
  ): void {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: T): void {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function splice(index: number): void {
    setArray((a) => [...a.slice(0, index)]);
  }

  function remove(index: number): void {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear(): void {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear, splice };
}
