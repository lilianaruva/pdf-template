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

const PdfForm = () => {
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
    page: {
      flexDirection: "row",
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      fontFamily: "Roboto",
    },
    tableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      border: "1px solid black",
      borderStyle: "solid none solid solid",
      display: "flex",
      fontSize: "7px",
      width: "501.48px",
      height: "433.29px",
    },
    firstColumn: {
      display: "flex",
      flexDirection: "column",
      width: "235px",
    },
    firstColumnDividerContainer: {
      display: "flex",
      flexDirection: "row",
      width: "235px",
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
      width: "100px",
    },
    rowl: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      paddingLeft: "5px",
      minHeight: "33.22px",
    },
    infoRow: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      paddingLeft: "5px",
      height: "138.3px",
    },
    formRow: {
      height: "85px",
      border: "1px solid black",
      paddingLeft: "5px",
      display: "flex",
      flexDirection: "column",
      width: "93px",
      alignContent: "space-between",
    },
    yearRow: {
      height: "34px",
      border: "1px solid black",
      paddingLeft: "5px",
      display: "flex",
      flexDirection: "column",
      width: "93px",
      alignItems: "center",
    },
    containerNumberForm: {
      margin: "12px 0 10px 0",
    },
    numberForm: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    dolarText: {
      fontWeight: "bold",
      fontSize: "10px",
      marginTop: "2px",
    },
    yearText: {
      marginTop: "2px",
      fontSize: "10px",
    },
    inputText: {
      color: "darkblue",
      fontSize: "8px",
    },
    divContainer: {
      display: "flex",
      marginTop: "2px",
    },
    containerTitleForm: {
      height: "123px",
      display: "flex",
      textAlign: "right",
      alignItems: "center",
      alignContent: "center",
    },
    titleForm: {
      fontSize: "17px",
      fontWeight: "bold",
    },
    divPointer: {
      border: "1px dashed black",
      borderWidth: "thin",
      borderStyle: "none none dashed none",
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
      marginTop: "20px",
      width: "93px",
    },
    containerDescriptionForm: {
      display: "flex",
      flexDirection: "column",
      textAlign: "right",
      alignItems: "flex-end",
      paddingRight: "3px",
      height: "284.5px",
      border: "1px solid black",
      borderStyle: "solid none solid solid",
      //alignContent: "center",
    },
  });

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.tableContainer}>
          <View style={styles.firstColumn}>
            <View style={styles.infoRow}>
              <Text>
                FILER???S name, street address, city or town, state or province,
                country, ZIP or foreign postal code, and telephone no.
              </Text>
              <Text style={styles.inputText}>test</Text>
            </View>
            <View style={styles.firstColumnDividerContainer}>
              <View style={styles.firstColumnDivider}>
                <Text>
                  Check to indicate if FILER is a (an): Payment settlement
                  entity (PSE) Electronic Payment Facilitator (EPF)/Other third
                  party
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
              <Text>PAYEE???S name</Text>
              <Text style={styles.inputText}>test</Text>
              <Text>Street address (including apt. no.)</Text>
              <Text style={styles.inputText}>test</Text>
              <Text>
                City or town, state or province, country, and ZIP or foreign
                postal code
              </Text>
              <Text style={styles.inputText}>test</Text>
            </View>
            <View style={styles.firstColumnLastRow}>
              <Text>PSE???S name and telephone number</Text>
            </View>
            <View style={styles.firstColumnLastRow}>
              <Text>Account number (see instructions)</Text>
            </View>
          </View>
          <View style={styles.secondColumn}>
            <View style={styles.rowl}>
              <Text>FILER'S TIN</Text>
              <Text style={styles.inputText}>test</Text>
            </View>
            <View style={styles.rowl}>
              <Text>PAYEE???S TIN</Text>
              <Text style={styles.inputText}>test</Text>
            </View>
            <View style={styles.rowl}>
              <Text>
                1a Gross amount of payment card/third party network transactions
              </Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
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
            <View style={styles.rowl}>
              <Text>5a January</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5c March</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5e May</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5g July</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5i September</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5k November</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>6 State</Text>
              <View style={styles.divPointer}>
                <Text style={styles.inputText}>test</Text>
              </View>
              <View>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
          </View>
          <View style={styles.secondColumn}>
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
            <View style={styles.rowl}>
              <Text>2 Merchant category code</Text>
              <Text style={styles.inputText}>test</Text>
            </View>
            <View style={styles.rowl}>
              <Text>4 Federal income tax withheld</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5b February</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5d April</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5f June</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5h August</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5j October</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>5l December</Text>
              <View style={styles.divContainer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>7 State identification no. </Text>
              <View style={styles.divPointer}>
                <Text style={styles.inputText}>dasd.</Text>
              </View>
              <View>
                <Text style={styles.inputText}>sadad</Text>
              </View>
            </View>
          </View>
          <View style={styles.secondColumn}>
            <View style={styles.containerTitleForm}>
              <Text style={styles.titleForm}>
                Payment Card and Third Party Network Transactions
              </Text>
            </View>
            <View>
              <View style={styles.containerDescriptionForm}>
                <Text style={styles.descriptionTitle}>Copy B</Text>
                <Text style={styles.descriptionTitle}>For Payee</Text>
                <Text style={styles.descriptionResume}>
                  This is important tax information and is being furnished to
                  the IRS. If you are required to file a return, a negligence
                  penalty or other sanction may be imposed on you if taxable
                  income results from this transaction and the IRS determines
                  that it has not been reported.
                </Text>
              </View>
            </View>
            <View style={styles.rowl}>
              <Text>8 State income tax withheld</Text>
              <View style={styles.divPointer}>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
              <View>
                <Text style={styles.dolarText}>$</Text>
                <Text style={styles.inputText}>test</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </>
  );
};

export default PdfForm;
