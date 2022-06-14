import "./styles.css";
import PDFtemplate from "./components/PDFtemplate";
import { Document, PDFDownloadLink } from "@react-pdf/renderer";
import InstructionsPage from "./components/InstructionsPage";

const MyDoc = () => (
  <Document>
    <InstructionsPage></InstructionsPage>
  </Document>
);

export default function App() {
  return (
    <div>
      <Document>
        <InstructionsPage></InstructionsPage>
      </Document>

      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}
