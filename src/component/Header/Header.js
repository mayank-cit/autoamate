import React from "react";
import clasess from "./Header.module.css";

const Header = () => {
  let divCLass = [];
  divCLass.push("row", clasess.Header);

  return (
    <div className={divCLass.join(" ")}>
      <div className="col-xs-2">FLOWAPP</div>
    </div>
  );
};

export default Header;
