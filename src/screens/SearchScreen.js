import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import SearchBar from "../component/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchSubmit = async () => {
    setLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "NYC",
          term: searchValue,
          limit: 10,
        },
      });
      setLoading(false);
      setRestaurants(
        !!response.data.businesses ? [...response.data.businesses] : []
      );
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <View>
      <SearchBar
        searchValue={searchValue}
        onChange={setSearchValue}
        onSubmit={searchSubmit}
      />
      {loading && <ActivityIndicator />}
      {restaurants.length > 0 && !loading && (
        <FlatList
          data={restaurants}
          keyExtractor={(restaurants) => restaurants.id}
          renderItem={({item}) => {
            const { name, image_url: uri } = item;
            return (
              <View>
                <Image style={styles.tinyLogo} source={{ uri }} />
                <Text>{name}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 120,
  },
});

export default SearchScreen;
