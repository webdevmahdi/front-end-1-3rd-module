import useUserData from "../hooks/useUserData";
import UserList from "./UserList";

const UsersContainer = () => {
  const { isLoading, error, data } = useUserData();
  const props = {
    isLoading,
    error,
    data,
  };
  return <UserList {...props}></UserList>;
};

export default UsersContainer;
