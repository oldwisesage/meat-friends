import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  useEffect(() => {
    // if click outside menu, close menu
    const pageClickEvent = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    //
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    // Remove any event listener if not active
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
