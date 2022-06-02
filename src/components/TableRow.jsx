import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    width: "60%",
  },
  xyz: {
    width: "40%",
  },
});

const data = {
  id: "5df3180a09ea16dc4b95f910",
  items: [
    {
      sr: 1,
      desc: "desc1",
      xyz: 5,
    },
    {
      sr: 2,
      desc: "desc2",
      xyz: 6,
    },
  ],
};

const TableRow = ({ data }) => {
  console.log(data);
  const rows = data.items.map((item) => (
    <View style={styles.row} key={item.sr.toString()}>
      <Text style={styles.description}>{item.desc}</Text>
      <Text style={styles.xyz}>{item.xyz}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;
