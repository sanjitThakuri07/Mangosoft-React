import React from "react";

const navLinks = () => {
  return (
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" className="navigation__link">
            About Us
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Our Team
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Our Services
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Our Projects/Clients
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Career
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navLinks;
