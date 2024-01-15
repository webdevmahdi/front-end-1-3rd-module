import { Dispatch } from "react";

type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};
const UseState = ({ counter, setCounter }: TCounter ) => {
  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleReset = () => {
    setCounter((prevState) => prevState * 0);
  };
  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };
  const handleAsync = () => {
    setTimeout(() => {
      setCounter((prevState) => prevState + 100);
    }, 3000);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button className="border border-2" onClick={handleIncrement}>Increment</button>
      <button onClick={handleAsync}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UseState;
