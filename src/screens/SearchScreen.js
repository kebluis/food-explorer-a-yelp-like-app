import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../component/SearchBar";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchSubmit = () => {
    console.log(searchValue)
  }

  return (
    <View>
      <SearchBar searchValue={searchValue} onChange={setSearchValue} onSubmit={searchSubmit}/>
      <Text>{searchValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
