import React from "react";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";
import "../pdf.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { pdfjs } from "react-pdf";

const PDFdoc = () => {
  function savePDF() {
    const docElements = document.querySelector("#pdfPage");
    html2canvas(docElements, {
      onclone: (document) => {
        document.querySelector("#save-button").style.visibility = "hidden";
      },
    }).then((canvas) => {
      const img = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF();
      pdf.addImage(img, "JPEG", 0, 0, 210, 0);
      pdf.save("file.pdf");
    });
  }

  return (
    <>
      <div className="pdfPage" id="pdfPage">
        <Page3 />
      </div>
      <button id="save-button" onClick={savePDF}>
        aaaaaaaaaaaaaaaaaa
      </button>
    </>
  );
};

export default PDFdoc;
