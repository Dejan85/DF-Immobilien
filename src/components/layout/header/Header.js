import React, { useEffect } from "react";

//hooks
import useResetScroll from "../../hooks/useResetScroll";

// componnets
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  const { resetScroll } = useResetScroll();

  useEffect(() => {
    resetScroll();
  }, [resetScroll]);

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
