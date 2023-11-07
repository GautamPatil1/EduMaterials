import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const TableOfContents = ({ markdownText }) => {
  const [headings, setHeadings] = useState([]);
  const location = useLocation();
  const { subject, content } = useParams();

  const generateTableOfContents = () => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocData = [];
    let stack = [];
    if (headingElements[0] && headingElements[0].textContent) {
      document.title = headingElements[0].textContent;
    } else {
      document.title = "TYMaterials";
    }
    

    headingElements.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      const id = `toc-${index}`;
      heading.setAttribute('id', id);
      const tocItem = {
        level: level,
        text: heading.textContent,
        id,
        children: [],
      };

      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length > 0) {
        stack[stack.length - 1].children.push(tocItem);
      } else {
        tocData.push(tocItem);
      }

      stack.push(tocItem);
    });

    setHeadings(tocData);
  };

  const clearTableOfContents = () => {
    setHeadings([]);
  };

  const handleTocItemClick = (id) => {
    const targetHeading = document.getElementById(id);
    if (targetHeading) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetHeading.offsetTop,
      });
    }
  };

  const renderTocItems = (tocItems) => {
    return tocItems.map((item) => (
      <li key={item.id}>
        {/* eslint-disable-next-line */}
        <a
          style={{
            color: 'gray',
            cursor: 'pointer',
          }}
          onClick={() => handleTocItemClick(item.id)}
        >
          {item.text}
        </a>
        {item.children && item.children.length > 0 && (
          <ul>{renderTocItems(item.children)}</ul>
        )}
      </li>
    ));
  };

  // Generate the TOC when the component mounts and when the route changes
  useEffect(() => {
    clearTableOfContents();
    generateTableOfContents();
  }, [location.pathname, subject, content, markdownText]);

  return (
    <div className="table-of-contents">
      <p
        style={{
          fontSize: '20px',
          fontWeight: 'bolder',
          marginBottom: '0.5rem',
          marginLeft: '1rem',
          cursor: 'pointer',
        }}
      >
        Table of Contents:
      </p>
      <div className="toc-scrollable">
        <ul>{renderTocItems(headings)}</ul>
      </div>
    </div>
  );
};

export default TableOfContents;
