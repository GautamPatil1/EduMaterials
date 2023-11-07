// src/components/OffcanvasNavbar.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import DropdownMenuItem from "./DropdownMenuItem";

const OffcanvasNavbar = ({ user }) => {
  const [canvas, setCanvas] = useState(false);
  const showCanvas = () => {
    const offcanvasContainers = document.querySelectorAll(
      ".offcanvas-container"
    );

    offcanvasContainers.forEach((offcanvasContainer) => {
      if (canvas) {
        offcanvasContainer.style.display = "none";
      } else {
        offcanvasContainer.style.display = "inline";
      }
    });

    setCanvas(!canvas);
  };

  const simLinks = [
    "Unit1",
    "Unit2",
    "Unit3",
    "Unit4",
    "Unit5",
    "cae-1-Question-Bank",
    "cae-2-Question-Bank",
    "cae-3-Question-Bank",
    "ese-Question-Bank",
  ];

  const subjects = [
    {
      title: "sepm",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-")
          ? `sepm-${link}`
          : link
      ),
    },
    {
      title: "DM",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-") ? `DM-${link}` : link
      ),
    },
    {
      title: "BIA",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-")
          ? `BIA-${link}`
          : link
      ),
    },
    {
      title: "cd",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-") ? `cd-${link}` : link
      ),
    },
    {
      title: "WD",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-") ? `WD-${link}` : link
      ),
    },
    {
      title: "eeim",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-")
          ? `eeim-${link}`
          : link
      ),
    },
    {
      title: "dbms",
      links: simLinks.map((link) =>
        link.startsWith("cae-") || link.startsWith("ese-")
          ? `dbms-${link}`
          : link
      ),
    },
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
              <i id="logo" class="fa-solid fa-book"></i>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/"}>TYMaterials</Link>
          </li>
        </div>

        <div className="right">
          <li className="navbar-item">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/auth" id="auth-btn">
              {user ? user.displayName.split(" ")[0] : "Sign In"}{" "}
              <i className="fa-regular fa-user"></i>
            </Link>
          </li>

          <li className="navbar-item">
            <Button className="btn-menu" onClick={showCanvas}>
              <i class="fa-solid fa-bars fa-2x"></i>
            </Button>
          </li>
        </div>
      </div>
      <div className="offcanvas-container">
        {subjects.map((subject) => (
          <DropdownMenuItem
            key={subject.title}
            title={subject.title}
            links={subject.links}
          />
        ))}
      </div>
    </>
  );
};

export default OffcanvasNavbar;
