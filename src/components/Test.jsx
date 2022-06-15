import React, { useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import TableRow from "./TableRow";
import source from "../fonts/ARIAL.woff";

const InstructionsPage = () => {
  const registerFont = () => {
    // Register font
    Font.register({
      family: "Roboto",
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
    });
  };

  useEffect(() => {
    registerFont();
  }, []);

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    firstColumn: {
      display: "flex",
      flexDirection: "column",
      width: "8.66cm",
    },
    firstColumnLastRow: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      paddingLeft: "0.20cm",
      minHeight: "45px",
    },
    yearRow: {
      height: "0.84cm",
      border: "1px solid black",
      paddingLeft: "0.20cm",
      display: "flex",
      flexDirection: "column",
      width: "2.54cm",
      alignItems: "center",
    },
    containerNumberForm: {
      display: "flex",
      flexDirection: "row",
      margin: "12px 0 10px 0",
    },
    numberForm: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    dolarText: {
      fontWeight: "bold",
      fontSize: "10px",
      marginTop: "2px",
    },
    inputText: {
      color: "darkblue",
      fontSize: "10px",
    },
    divContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "2px",
      alignItems: "baseline",
    },
    titleForm: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    divPointer: {
      borderBottomStyle: "1px dashed black",
      borderWidth: "thin",
      display: "flex",
      flexDirection: "row",
    },
    descriptionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "right",
      marginTop: "5px",
    },
    descriptionResume: {
      display: "flex",
      alignContent: "right",
      textAlign: "right",
      marginTop: "12px",
      width: "2.33cm",
    },
    containerDescriptionForm: {
      display: "flex",
      flexDirection: "column",
      textAlign: "right",
      alignItems: "flex-end",
      paddingRight: "3px",
      height: "7.19cm",
      border: "1px solid black",
      borderStyle: "solid none solid solid",
      //alignContent: "center",
    },
    lastColumn: {
      width: "2.77cm",
      display: "flex",
      flexDirection: "column",
    },
    tallRow: {
      height: "1.05cm",
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      paddingLeft: "0.20cm",
    },
    lastsColumns: {
      display: "flex",
      flexDirection: "column",
    },

    simpleColumns: {
      display: "flex",
      flexDirection: "row",
    },

    page: {
      flexDirection: "row",
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      fontFamily: "Roboto",
      fontSize: "7px",
    },
    tableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      display: "flex",
      fontSize: "7px",
      width: "18.57cm",
      height: "11.42cm",
    },
    firstRow: {
      display: "flex",
      flexDirection: "column",
      height: "5.05cm",
      width: "18.54",
    },
    firstRow: {
      display: "flex",
      flexDirection: "row",
      height: "5.05cm",
      width: "8.64cm",
    },
    fRCol: {
      display: "flex",
      flexDirection: "column",
      height: "5.05cm",
      width: "8.64cm",
      border: "1px solid black",
    },
    infoRow: {
      display: "flex",
      flexDirection: "column",
      borderBottom: "1px solid black",
      paddingLeft: "0.20cm",
      height: "3.59cm",
    },
    firstColumnDividerContainer: {
      display: "flex",
      flexDirection: "row",
      width: "8.66cm",
      minHeight: "1.46cm",
    },
    firstColumnDivider: {
      width: "50%",
      paddingLeft: "0.20cm",
      borderLeft: "1px solid black",
    },
    rightBorder: {
      borderRight: "1px solid black",
    },
    fRcol2: {
      width: "3.56cm",
      height: "3cm",
    },
    formRow: {
      height: "2.11cm",
      borderTop: "1px solid black",
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
      paddingLeft: "0.20cm",
      display: "flex",
      flexDirection: "column",
      width: "2.55cm",
      alignContent: "space-between",
    },
    yearText: {
      fontSize: "10px",
      height: ".87cm",
    },
    grossAmount: {
      height: "1.20cm",
      display: "flex",
      flexDirection: "column",
      borderTop: "1px solid black",
      paddingLeft: "0.20cm",
    },
    rowl: {
      display: "flex",
      flexDirection: "column",
      borderTop: "1px solid black",
      paddingLeft: "0.20cm",
      height: ".84cm",
    },
    input: {
      display: "flex",
      flexDirection: "row",
    },
    number: {
      fontWeight: "bold",
    },
    text: {
      marginLeft: ".05cm",
      width: "2.97cm",
    },
    secondCol: {
      display: "flex",
      flexDirection: "row",
      height: "3px",
      width: "9.93cm",
    },
    containerTitleForm: {
      height: "3cm",
      width: "3.5cm",
      display: "flex",
      textAlign: "right",
      alignItems: "center",
      alignContent: "center",
    },
    sCfr: {
      display: "flex",
      height: "5.05cm",
      width: "9.93cm",
      border: "1px solid black",
    },
    secondRowFR: {
      display: "flex",
      width: "7.11cm",
      height: "2.11cm",
      borderTop: "1px solid black",
    },
  });

  return (
    <>
      <Page size="Letter" style={styles.page}>
        <View style={styles.tableContainer}>
          <View style={styles.firstRow}>
            <View style={styles.firstCol}>
              <View style={styles.fRCol}>
                <View style={styles.infoRow}>
                  <Text>
                    FILER’S name, street address, city or town, state or
                    province, country, ZIP or foreign postal code, and telephone
                    no.
                  </Text>
                  <Text style={styles.inputText}>test</Text>
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
              </View>
            </View>

            <View style={styles.sCfr}>
              <View style={styles.secondCol}>
                <View style={styles.fRcol2}>
                  <View style={styles.rowl}>
                    <Text>FILER'S TIN</Text>
                    <Text style={styles.inputText}>test</Text>
                  </View>
                  <View style={styles.rowl}>
                    <Text>PAYEE’S TIN</Text>
                    <Text style={styles.inputText}>test</Text>
                  </View>
                  <View style={styles.grossAmount}>
                    <View style={styles.input}>
                      <View style={styles.number}>
                        <Text>1a</Text>
                      </View>
                      <View style={styles.text}>
                        <Text>
                          Gross amount of payment card/third party network
                          transactions
                        </Text>
                      </View>
                    </View>
                    <View style={styles.divContainer}>
                      <Text style={styles.dolarText}>$</Text>
                      <Text style={styles.inputText}>test</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.fRcol3}>
                  <View style={styles.formRow}>
                    <Text>OMB No. 1545-2205</Text>
                    <View style={styles.containerNumberForm}>
                      <Text>Form</Text>
                      <Text style={styles.numberForm}>1099-K</Text>
                    </View>
                    <Text>(Rev. January 2022)</Text>
                  </View>
                  <View style={styles.yearRow}>
                    <Text>For calendar year</Text>
                    <Text style={styles.yearText}>2022</Text>
                  </View>
                </View>
                <View style={styles.containerTitleForm}>
                  <Text style={styles.titleForm}>
                    Payment Card and Third Party Network Transactions
                  </Text>
                </View>
              </View>
              <View style={styles.secondRowFR}>
                <View>
                  <View style={styles.rowl}>
                    <Text>1b Card Not Present transactions </Text>
                    <View style={styles.divContainer}>
                      <Text style={styles.dolarText}>$</Text>
                      <Text style={styles.inputText}>test</Text>
                    </View>
                  </View>
                  <View style={styles.rowl}>
                    <Text>3 Number of payment transactions</Text>
                    <Text style={styles.inputText}>test</Text>
                  </View>
                </View>
                <View></View>
              </View>
            </View>
          </View>
        </View>

       
      </Page>
    </>
  );
};

export default InstructionsPage;
