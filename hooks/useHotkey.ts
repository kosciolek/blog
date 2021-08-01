import { useEffect } from "react";

export const useHotkey = (
  { key, ctrl, shift }: { key: string; ctrl?: boolean; shift?: boolean },
  callback: () => void
): void => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (
        e.key === key &&
        (ctrl === undefined || ctrl === e.ctrlKey) &&
        (shift === undefined || shift === e.shiftKey)
      )
        callback();
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [key, callback, ctrl, shift]);
};
