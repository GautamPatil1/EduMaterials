import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import DropdownMenuItem from "./DropdownMenuItem";

const OffcanvasNavbar = ({ user }) => {
  const [canvas, setCanvas] = useState(false);

  const showCanvas = () => {
    setCanvas(!canvas);
  };

  const hideCanvas = () => {
    console.log("Canvas = false");
    setCanvas(false);
  };

  useEffect(() => {
    const offcanvasContainers = document.querySelectorAll(
      ".offcanvas-container"
    );

    offcanvasContainers.forEach(
      (offcanvasContainer) =>
        (offcanvasContainer.style.display = canvas ? "inline" : "none")
    );
  }, [canvas]);

  const initialSimLinks = [
    "Unit1",
    "Unit2",
    "Unit3",
    "Unit4",
    "Unit5",
    "CAE-1-Question-Bank",
    "CAE-2-Question-Bank",
    "CAE-3-Question-Bank",
    "CAE-Question-Bank",
  ];

  const simLinks = user ? initialSimLinks : initialSimLinks.slice(0, 5);

  const subjects = [
    "ST",
    "NLP",
    "ML",
    "UDBMS",
    "UHV",
    "BP",
    "sepm",
    "DM",
    "BIA",
    "cd",
    "WD",
    "eeim",
    "dbms",

    // Add more subjects as needed
  ];

  return (
    <>
      <div
        className="navbar-container"
        style={{
          backgroundColor: "#1a1a1a",
        }}
      >
        <div className="left">
          <li className="navbar-item">
            <Link to={"/"}>
              <i id="logo" className="fa-solid fa-book"></i>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/"}>TYMaterials</Link>
          </li>
        </div>

        <div className="right">
          {/* <li className="navbar-item">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to={"/contact"}>Contact us</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/auth" id="auth-btn">
              {user ? user.displayName.split(" ")[0] : "Sign In"}{" "}
              <i className="fa-regular fa-user"></i>
            </Link>
          </li>

          <li className="navbar-item">
            <Button className="btn-menu" onClick={showCanvas}>
              <i className="fa-solid fa-bars fa-2x"></i>
            </Button>
          </li>
        </div>
      </div>
      <div className={`offcanvas-container ${canvas ? "open" : "close"}`}>
        {subjects.map((subject) => (
          <DropdownMenuItem
            key={subject}
            title={subject}
            links={simLinks.map((link) =>
              link.startsWith("CAE-") || link.startsWith("ese-")
                ? `${subject.toUpperCase()}-${link}`
                : link
            )}
            onClick={hideCanvas}
          />
        ))}
      </div>
    </>
  );
};

export default OffcanvasNavbar;
