import React from "react";

// componnets
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
