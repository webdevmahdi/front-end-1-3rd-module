import { ChangeEvent, useReducer } from "react";

interface IAction {
    type: string;
    payload: string;
}

const initialState = { name: "", email: "" };
const reducer = (currentState: typeof initialState, action: IAction) => {
  switch (action.type) {
    case "addName":
      return {...currentState, name: action.payload};
    case "addEmail":
      return {...currentState, email: action.payload};
    default:
      return currentState;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state)
}
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-slate-600 text-3xl mr-3">
        <input onChange={(e)=> dispatch({type: 'addName', payload: e.target.value})} type="text" name="name" id="name" />
        <input onChange={(e)=> dispatch({type: 'addEmail', payload: e.target.value})} className="bg-primary" type="text" name="email" id="email" />
        <button className="border border-2" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseReducer;
