import React, { useState } from "react";
import Nav from "./navbar";
import Sidebar from "./sidebar";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  const toggleDrop = () => {
    setDropOpen(!dropOpen);
  };
  return (
    <header>
      <Nav
        isOpen={isOpen}
        toggle={toggle}
        toggleDrop={toggleDrop}
        dropOpen={dropOpen}
      />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        toggleDrop={toggleDrop}
        dropOpen={dropOpen}
      />
    </header>
  );
};

export default Header;
