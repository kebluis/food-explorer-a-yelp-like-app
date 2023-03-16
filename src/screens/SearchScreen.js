import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../component/SearchBar";
import { getSearchedRestaurants } from "../api/yelp";
import RestaurantDetail from "../component/RestaurantDetail";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const { navigate } = useNavigation();

  const [searchValue, setSearchValue] = useState("");
  const [isInitial, setIsInitial] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchSubmit();
    return () => {
      setIsInitial(true);
    };
  }, []);

  const searchSubmit = async () => {
    setLoading(true);
    const response = await getSearchedRestaurants(searchValue);
    setIsInitial(!searchValue);
    setRestaurants(response.businesses ?? []);
    setLoading(false);
  };

  const lastItem = (index) => {
    return { paddingBottom: index === restaurants.length - 1 ? 140 : 0 };
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
        <>
          <Text style={styles.header}>
            {isInitial ? "Recommended" : "Top Results"}
          </Text>

          <FlatList
            columnWrapperStyle={styles.recommended}
            data={restaurants}
            numColumns={2}
            keyExtractor={(restaurants) => restaurants.id}
            renderItem={({ item, index }) => {
              const { name, image_url, rating, review_count, id } = item;
              return (
                <TouchableOpacity
                  onPress={() => navigate("Restaurant", { id })}
                >
                  <View style={lastItem(index)}>
                    <RestaurantDetail
                      name={name}
                      uri={image_url}
                      rating={rating}
                      reviewCount={review_count}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 16,
    fontSize: 24,
    fontWeight: "700",
  },
  recommended: {
    justifyContent: "space-between",
  },
});

export default SearchScreen;
