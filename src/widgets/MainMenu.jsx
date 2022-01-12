import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Menu = (props) => {
  return <>{props.children}</>;
};
const MainMenu = (props) => {
  const [isOpen, toggle] = useState(true);

  return (
    <div className="mainmenu">
      <BurgerMenu isOpen={isOpen} toggle={toggle} />
      {isOpen && <Menu children={props.children} />}
    </div>
  );
};

export default MainMenu;
