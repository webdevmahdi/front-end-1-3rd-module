import React, { forwardRef } from "react";

interface ICustomInputProps {
  className: string
}

const ForwardRef = forwardRef<HTMLInputElement, ICustomInputProps>(({ className }, inputRef) => {
  return (
    <div>
      <input
        className={className}
        ref={inputRef}
        type="text"
        name="name"
        id="name"
      ></input>
    </div>
  );
});

export default ForwardRef;
