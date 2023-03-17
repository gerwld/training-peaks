import React, { useEffect, useRef, useState } from "react";

// ** OUTSIDE CLICK TO HIDE ELEMENT ** //
const withClickOutside = (WrappedComponent) => {
 return (props) => {
  const [isShow, setShow] = useState(false);
  const ref = useRef(null), ignoreRef = useRef(null);

  const toggleShow = () => setShow(!isShow);

  useEffect(() => {
   const onClickOutside = ({target}) => {
    let refCurr = ref?.current;
    let igCurr = ignoreRef?.current;

    if(refCurr && !igCurr &&
      !ref.current.contains(target)) setShow(false);
    else if(refCurr && igCurr && 
      !ignoreRef.current.contains(target) && !ref.current.contains(target)) setShow(false);
   }

   document.addEventListener("mousedown", onClickOutside);
   return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isShow]);

  return <WrappedComponent 
    {...props} 
    refElement={ref}
    ignoreRef={ignoreRef} 
    setShow={setShow} 
    isShow={isShow} 
    toggleShow={toggleShow} 
   />;
 };
};

export default withClickOutside;
