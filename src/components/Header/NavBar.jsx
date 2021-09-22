import React from "react";

import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
