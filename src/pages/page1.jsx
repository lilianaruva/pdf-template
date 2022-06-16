import React from "react";

const Page1 = () => {
  return (
    <>
      <h1
        style={{
          paddingTop: "4pt",
          paddingLeft: "191pt",
          textIndent: "0pt",
          textAlign: "center",
        }}
      >
        Attention:
      </h1>
      <p
        className="s1"
        style={{
          paddingTop: "8pt",
          paddingLeft: "27pt",
          textIndent: " 0pt",
          textAlign: "left",
        }}
      >
        Copy A of this form is provided for informational purposes only. Copy A
        appears in red, similar to the official IRS form. The official printed
        version of Copy A of this IRS form is scannable, but the online version
        of it, printed from this website, is not. Do <b> not </b>
        <a href="http://www.irs.gov/form1099" className="s3" target="_blank">
          print and file copy A downloaded from this website; a penalty may be
          imposed for filing with the IRS information return forms that can’t be
          scanned. See part O in the current General Instructions for Certain
          Information Returns, available at
        </a>
        <span
          style={{
            color: "#00f",
            fontFamily: "Arial, sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            textDecoration: "underline",
            fontSize: "11.5pt",
          }}
        >
          www.irs.gov/form1099
        </span>
        , for more information about penalties.
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "8pt",
          paddingLeft: "27pt",
          textIndent: "0pt",
          textAlign: "left",
        }}
      >
        Please note that Copy B and other copies of this form, which appear in
        black, may be downloaded and printed and used to satisfy the requirement
        to provide the information to the recipient.
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "7pt",
          paddingLeft: "28pt",
          textIndent: "0pt",
          textAlign: "left",
        }}
      >
        <a href="http://www.IRS.gov/orderforms" className="s3" target="_blank">
          To order official IRS information returns, which include a scannable
          Copy A for filing with the IRS and all other applicable copies of the
          form, visit
        </a>
        <a href="http://www.IRS.gov/orderforms" className="s2" target="_blank">
          www.IRS.gov/orderforms
        </a>
        . Click on
        <span style={{ color: "#00f" }}>
          {" "}
          Employer and Information Returns
        </span>{" "}
        , and we’ll mail you the forms you request and their instructions, as
        well as any publications you may order.
      </p>
      <p
        style={{
          paddingTop: "7pt",
          paddingLeft: "28pt",
          textIndent: "0pt",
          textAlign: "left",
        }}
      >
        <a href="http://www.IRS.gov/FIRE)" className="s3" target="_blank">
          Information returns may also be filed electronically using the IRS
          Filing Information Returns Electronically (FIRE) system (visit
        </a>
        <a href="http://www.IRS.gov/FIRE)" className="s2" target="_blank">
          www.IRS.gov/FIRE
        </a>
        <a href="http://www.IRS.gov/AIR)" className="s3" target="_blank">
          ) or the IRS Affordable Care Act Information Returns (AIR) program
          (visit www.IRS.gov/AIR).
        </a>
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "7pt",
          paddingLeft: "28pt",
          textIndent: "0pt",
          textAlign: "left",
        }}
      >
        See IRS Publications 1141, 1167, and 1179 for more information about
        printing these tax forms.
      </p>
    </>
  );
};

export default Page1;
