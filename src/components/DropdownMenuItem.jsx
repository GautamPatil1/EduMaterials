import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenuItem = ({ title, links }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Handle the click on the caret to toggle the dropdown
  const handleCaretClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  };

  return (
    <div className="dropdown-item">
      <button
        className={`dropdown-btn ${isDropdownOpen ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <Link to={`/${title}`} className="dropdown-link">
          <span onClick={(e) => e.stopPropagation()}>
            {title.toUpperCase()}
          </span>
          <span onClick={handleCaretClick}>
            <i
              className="fas fa-caret-down"
              style={{ verticalAlign: "middle" }}
            ></i>
          </span>
        </Link>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-container">
          {links.map((link, index) => (
            <Link key={index} to={`/${title}/${link}`}>
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuItem;
