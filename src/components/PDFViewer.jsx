import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PdfForm = () => {
  return (
    <>
      <h1>PDFForm</h1>
      <Document>
        <Page>
          <Text>hola</Text>
        </Page>
      </Document>
    </>
  );
};

export default PdfForm;
