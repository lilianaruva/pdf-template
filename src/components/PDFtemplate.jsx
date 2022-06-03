import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import TableRow from "./TableRow";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: "1px solid black",
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    border: "1px solid black",
    display: "flex",
    fontSize: "9.5px",
    fontFamily: "Arial",
    width: "711px",
    height: "450.9px",
  },
  firstColumn: {
    display: "flex",
    flexDirection: "column",
    width: "325px",
  },
  firstColumnDividerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "325px",
    minHeight: "56px",
  },
  firstColumnDivider: {
    width: "50%",
    border: "1px solid black",
    paddingLeft: "5px",
  },
  firstColumnLastRow: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    paddingLeft: "5px",
    minHeight: "45px",
  },
  secondColumn: {
    display: "flex",
    flexDirection: "column",
    width: "124.8px",
  },
  rowl: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    paddingLeft: "5px",
    minHeight: "34px",
  },
  infoRow: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    paddingLeft: "5px",
    height: "138.3px",
  },
});

const PdfForm = () => {
  return (
    <>
      <h1>PDFForm</h1>
      <Document>
        <Page size="letter" style={styles.page}>
          <View style={styles.tableContainer}>
            <View style={styles.firstColumn}>
              <View style={styles.infoRow}>
                <Text>
                  FILER’S name, street address, city or town, state or province,
                  country, ZIP or foreign postal code, and telephone no.
                </Text>
                <Text>...</Text>
              </View>
              <View style={styles.firstColumnDividerContainer}>
                <View style={styles.firstColumnDivider}>
                  <Text>
                    Check to indicate if FILER is a (an): Payment settlement
                    entity (PSE) Electronic Payment Facilitator (EPF)/Other
                    third party
                  </Text>
                  <Text></Text>
                </View>
                <View style={styles.firstColumnDivider}>
                  <Text>
                    Check to indicate transactions reported are: Payment card
                    Third party network
                  </Text>
                  <Text></Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text>PAYEE’S name</Text>
                <Text>...</Text>
                <Text>Street address (including apt. no.)</Text>
                <Text>...</Text>
                <Text>
                  City or town, state or province, country, and ZIP or foreign
                  postal code
                </Text>
                <Text>...</Text>
              </View>
              <View style={styles.firstColumnLastRow}>
                <Text>PSE’S name and telephone number</Text>
              </View>
              <View style={styles.firstColumnLastRow}>
                <Text>Account number (see instructions)</Text>
              </View>
            </View>
            <View style={styles.secondColumn}>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>PAYEE’S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>
                  1a Gross amount of payment card/third party network
                  transactions
                </Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>1b Card Not Present transactions </Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>3 Number of payment transactions</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>5a January</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>5c March</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>5e May</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>5g July</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>5i September</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>5k November</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>6 State </Text>
                <Text>$4500</Text>
              </View>
            </View>
            <View style={styles.secondColumn}>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
              <View style={styles.rowl}>
                <Text>FILER'S TIN</Text>
                <Text>$4500</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PdfForm;
