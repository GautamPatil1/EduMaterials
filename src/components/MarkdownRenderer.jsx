import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItTOC from "markdown-it-table-of-contents";
import Sidebar from "./Sidebar.jsx";
import TableOfContents from "./TableOfContents.jsx";
import OffcanvasNavbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Login from "./Login.jsx";
import "./styles/MarkdownRenderer.css";

function MarkdownViewer({ user }) {
  const { subject, content } = useParams();
  const [markdownText, setMarkdownText] = useState("");
  const currentURL = window.location.href;
  const hasCAE = currentURL.includes("CAE");

  useEffect(() => {
    const githubBaseURL =
      "https://raw.githubusercontent.com/MisalPaav/TYMaterials/master/docs";
    if (subject && content) {
      var githubRawURL = githubBaseURL + "/" + subject + "/" + content + ".md";
    } else if (subject && !content) {
      githubRawURL = githubBaseURL + "/" + subject + "/index.md";
    } else {
      githubRawURL = githubBaseURL + "/index.md";
    }

    fetchMarkdownContent(githubRawURL);
  }, [subject, content]);

  const fetchMarkdownContent = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        setMarkdownText(await response.text());
      } else {
        throw new Error("Failed to fetch Markdown file");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderMarkdown = () => {
    const md = new MarkdownIt({ html: true })
      .use(MarkdownItAnchor)
      .use(MarkdownItTOC, { includeLevel: [1, 2] });
    return { __html: md.render(markdownText) };
  };

  return (
    <>
      <div id="navbar-container">
        <OffcanvasNavbar user={user} />
      </div>
      <div class="merch">
        gautam
      </div>

      <div className="MarkdownViewer">
        <div className="sidebar-container">
          <Sidebar user={user} />
        </div>
        <div className="content-container">
          {hasCAE ? (
            user ? (
              <div
                className="stackedit__html"
                dangerouslySetInnerHTML={renderMarkdown()}
              />
            ) : (
              <div className="SignIn">
                You Need to Sign In to view this Content.
                <br />
                <Login />
              </div>
            )
          ) : (
            <div
              className="stackedit__html"
              dangerouslySetInnerHTML={renderMarkdown()}
            />
          )}
          <div className="toc-container">
            <TableOfContents markdownText={markdownText} />
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>

      {/* <FixedButton /> */}
    </>
  );
}

export default MarkdownViewer;
