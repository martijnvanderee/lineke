import { useState, useEffect } from "react";
import { debounce } from "lodash";

export function useScroll() {
  const [isScrollTop, setIsScrollTop] = useState(false);

  const listener = () => {
    const Bool = window.scrollY > 50;
    setIsScrollTop(Bool);
  };

  const delay = 5;

  useEffect(() => {
    //setIsScrollTop(false);
    window.addEventListener("scroll", debounce(listener, delay));
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return {
    isScrollTop
  };
}
