import { useState } from "react";

export function useMergeState<T extends Record<string, any>>(
  init?: T
): [T, (payload: Partial<T>) => void] {
  const [state, setState] = useState(init || ({} as T));
  return [state, (payload: Partial<T>) => setState({ ...state, ...payload })];
}
