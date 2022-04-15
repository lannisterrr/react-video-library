import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';

const Toast = forwardRef((props, ref) => {
  const [showToast, setShowToast] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowToast(true);
    },
  }));

  useEffect(() => {
    const timeId = setTimeout(() => setShowToast(false), 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, [showToast]);

  return (
    <div
      id={showToast ? 'toast-show' : 'toast-hide'}
      className={`alert ${
        props.type === 'success' ? 'alert-success' : 'alert-red'
      }  p-h-2 round-corner  alert-position z-index-lg`}
    >
      <span>
        <i
          className={`fas ${
            props.type === 'success' ? 'fa-check' : 'fa-exclamation-circle'
          }  alert-icon f-8 t-c-1`}
        ></i>
      </span>
      <p className="p-h-3 f-8 t-c-1">{props.message}</p>
    </div>
  );
});

export default Toast;
