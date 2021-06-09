import { useRef } from "react";
import { bodyOverflowHiddenClass } from "../styles/const";

export const useBodyOverflow = () => {
  const lastScrollPosRef = useRef<number>(0);

  const setHidden = () => {
    lastScrollPosRef.current = window.scrollY;
    document.querySelector("body").classList.add(bodyOverflowHiddenClass);
  };
  const setScroll = () => {
    document.querySelector("body").classList.remove(bodyOverflowHiddenClass);
    if (lastScrollPosRef.current !== 0) {
      window.scrollTo({ top: lastScrollPosRef.current });
    }
  };

  return { setHidden, setScroll };
};
