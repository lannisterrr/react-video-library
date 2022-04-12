import { useEffect, useRef } from 'react';

const useClickOutside = handler => {
  let domNode = useRef();

  useEffect(() => {
    const mayBeHandler = event => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', mayBeHandler);
    return () => {
      document.removeEventListener('mousedown', mayBeHandler);
    };
  }, []);
  return domNode;
};

export { useClickOutside };
