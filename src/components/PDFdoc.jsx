import React from "react";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";
import "../pdf.css";

const PDFdoc = () => {
  return (
    <>
      <div className="pdfPage">
        <Page3 />
      </div>
    </>
  );
};

export default PDFdoc;
