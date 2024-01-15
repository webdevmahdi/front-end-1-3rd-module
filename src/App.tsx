// import { useContext } from "react";
import "./App.css";
import GameResult from "./components/GameResult";
import UsersContainer from "./components/UsersContainer";
// import { IThemeContext, ThemeContext } from "./context/ThemeProvider";
// import Menu, { MenuList } from "./context/ComponentProvider";
// import ThemeProvider from "./pages/ThemeProvider";
// import UseRef from "./pages/UseRef";
// import UseEffect from "./pages/UseEffect";
// import UseReducer from "./pages/UseReducer";
// import UseStateForForm from "./pages/UseStateForFormComponent";

function App() {
  // const { dark, setDark } = useContext(ThemeContext) as IThemeContext;
  return (
    // <div
    //   className={`h-screen w-full justify-center items-center ${
    //     dark ? "bg-black" : "bg-white"
    //   }`}
    // >
    //   {/* <UseReducer></UseReducer>
    //   <UseStateForForm></UseStateForForm> */
    //   /* <UseEffect></UseEffect> */}
    //   {/* <UseRef></UseRef>
    //    */}
    //   <button
    //     className="p-3 bg-violet-600 text-white "
    //     onClick={() => setDark(!dark)}
    //   >
    //     Toggle
    //   </button>
    //   <Menu>
    //     <MenuList></MenuList>
    //   </Menu>
    // </div>
    <div>
      {/* <GameResult></GameResult> */}
      <UsersContainer></UsersContainer>
    </div>
  );
}

export default App;
