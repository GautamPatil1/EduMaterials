import React from "react";
import "./styles/Sidebar.css"; // Import your CSS file
import DropdownMenuItem from "./DropdownMenuItem";

const Sidebar = ({ user }) => {

  var simLinks = [
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

  if (!user) {
    simLinks = simLinks.slice(0, 5);
  }

  const subjects = [
    {
      title: "sepm",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-")
          ? `SEPM-${link}`
          : link
      ),
    },
    {
      title: "DM",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-") ? `DM-${link}` : link
      ),
    },
    {
      title: "BIA",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-")
          ? `BIA-${link}`
          : link
      ),
    },
    {
      title: "cd",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-") ? `CD-${link}` : link
      ),
    },
    {
      title: "WD",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-") ? `WD-${link}` : link
      ),
    },
    {
      title: "eeim",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-")
          ? `EEIM-${link}`
          : link
      ),
    },
    {
      title: "dbms",
      links: simLinks.map((link) =>
        link.startsWith("CAE-") || link.startsWith("ese-")
          ? `DBMS-${link}`
          : link
      ),
    },
    // Add more subjects as needed
  ];

  return (
    <div className="sidenav">
      {subjects.map((subject) => (
        <DropdownMenuItem
          key={subject.title}
          title={subject.title}
          links={subject.links}
        />
      ))}
    </div>
  );
};

export default Sidebar;
