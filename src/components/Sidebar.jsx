import React from "react";
import "./styles/Sidebar.css"; // Import your CSS file
import DropdownMenuItem from "./DropdownMenuItem";

const Sidebar = ({ user }) => {
  const simLinks = [
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
    simLinks.splice(5);
  }

  const subjects = [
    { title: "ST", prefix: "ST-" },
    { title: "ML", prefix: "ML-" },
    { title: "NLP", prefix: "NLP-" },
    { title: "UDBMS", prefix: "UDBMS-" },
    { title: "UHV", prefix: "UHV-" },
    { title: "sepm", prefix: "SEPM-" },
    { title: "DM", prefix: "DM-" },
    { title: "BIA", prefix: "BIA-" },
    { title: "cd", prefix: "CD-" },
    { title: "WD", prefix: "WD-" },
    { title: "eeim", prefix: "EEIM-" },
    { title: "dbms", prefix: "DBMS-" },


    // Add more subjects as needed
  ];

  const generateLinks = (prefix) =>
    simLinks.map((link) =>
      link.startsWith("CAE-") || link.startsWith("ese-") ? `${prefix}${link}` : link
    );

  return (
    <div className="sidenav">
      {subjects.map((subject) => (
        <DropdownMenuItem
          key={subject.title}
          title={subject.title}
          links={generateLinks(subject.prefix)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
