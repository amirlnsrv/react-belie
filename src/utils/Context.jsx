import React from "react";

export const CustomContext = React.createContext();

export const Context = (props) => {
  const [user, setUser] = React.useState({
    email: "",
  });

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const value = {
    user,
    setUser,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
