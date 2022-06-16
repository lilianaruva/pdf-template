import "./styles.css";
import PDFtemplate from "./components/PDFtemplate";
import { Document, PDFDownloadLink } from "@react-pdf/renderer";
import InstructionsPage from "./components/InstructionsPage";
import PDFdoc from "./components/PDFdoc";

const MyDoc = () => (
  <Document>
    <PDFdoc></PDFdoc>
  </Document>
);

export default function App() {
  return (
    <div>
      <PDFdoc></PDFdoc>
    </div>
  );
}
