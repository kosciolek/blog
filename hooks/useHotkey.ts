import { useEffect } from "react";

export const useHotkey = (key: string, callback: () => void): void => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === key) callback();
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [key, callback]);
};
