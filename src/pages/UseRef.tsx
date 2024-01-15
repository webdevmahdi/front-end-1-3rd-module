import { useEffect, useRef } from "react";
import ForwardRef from "./ForwardRef";

const UseRef = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <h1>useRef</h1>
      <form>
        {/* <input className="border border-red-300 border-2 mr-3" ref={myRef} type="text" name="name" id="name"></input> */}
        <ForwardRef
          className={"border border-red-300 border-2 mr-3"}
          ref={myRef}
        ></ForwardRef>
        <button className="text-2xl btn-primary-300 text-" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;
