import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Availability = ({ isOpen }) => {
  return (
    <View style={[styles.container, isOpen ? styles.open : styles.close]}>
      <Text>{isOpen ? "Open" : "Closed"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  open: {
    backgroundColor: 'darkseagreen'
  },
  close: {
    backgroundColor: 'indianred'
  },
});

export default Availability;
