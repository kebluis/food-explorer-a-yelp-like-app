import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ searchValue, onChange, onSubmit }) => {
  return (
    <View style={styles.inputContainer}>
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        size={20}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        value={searchValue}
        onChangeText={(value) => onChange(value)}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F0EEEE",
    alignItems: "center",
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  inputStyle: {
    flex: 1,
  },
});

export default SearchBar;
