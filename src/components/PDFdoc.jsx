import React from "react";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import "../pdf.css";

const PDFdoc = () => {
  return (
    <>
      <div className="pdfPage">
        <Page2 />
      </div>
    </>
  );
};

export default PDFdoc;
