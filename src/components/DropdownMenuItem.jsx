import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenuItem = ({ title, links, onClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("toggleDropdown called");
    setDropdownOpen(!isDropdownOpen);
  };

  // Handle the click on the caret to toggle the dropdown
  const handleCaretClick = (e) => {
    console.log("handleCaretClick called");
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  };

  const handleLinkClick = () => {
    console.log("handleLinkClick called");
    onClick(); // Call the provided onClick function
  };

  return (
    <div className="dropdown-item">
      <button
        className={`dropdown-btn ${isDropdownOpen ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <Link
          to={`/${title}`}
          className="dropdown-link"
          onClick={(e) => {
            e.stopPropagation();
            handleLinkClick();
          }}
        >
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
            <Link
              key={index}
              to={`/${title}/${link}`}
              onClick={() => {
                handleLinkClick();
                toggleDropdown();
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuItem;
