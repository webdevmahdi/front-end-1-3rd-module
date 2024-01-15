import { createContext, useContext } from "react";

const MenuContext = createContext(undefined);
const Menu = ({ children }) => {
  return (
    <MenuContext.Provider value={{ theme: "Light", isDeleted: false }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};

export const MenuList = () => {
  const { theme, isDeleted } = useContext(MenuContext);
  console.log(theme)
  console.log(isDeleted)
  return <div>MEnu Item</div>;
};

export default Menu;
