import React, { useContext, useState } from "react";

const MyContext = React.createContext({
  sidebar: false,
  handleSidebar: () => {},
});

export default function Context(props) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarHandler = () => {
    setSidebarIsOpen((state) => !state);
  };

  const sidebarContext = {
    sidebar: sidebarIsOpen,
    handleSidebar: sidebarHandler,
  };

  return (
    <MyContext.Provider value={sidebarContext}>
      {props.children}
    </MyContext.Provider>
  );
}

export const SidebarState = () => {
  return useContext(MyContext);
};
