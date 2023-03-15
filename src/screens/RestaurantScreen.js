import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { withNavigation } from "react-navigation";
import { getRestaurantDetails } from "../api/yelp";
const RestaurantScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  const restaurantId = navigation.getParam("id");

  useEffect(() => {
    if (!!restaurantId && !details) {
      getDetails();
    }
  }, [restaurantId, details]);

  const getDetails = async () => {
    setLoading(true);
    const response = await getRestaurantDetails(restaurantId);
    if (!!response) {
      setDetails(response);
    }
    setLoading(false);
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.detailContainer}>
          <Text style={styles.headerText}>{details.name}</Text>
          <Text>{details.location.display_address}</Text>
          <FlatList
            horizontal
            data={details.photos}
            keyExtractor={(photos) => photos}
            
            renderItem={({ item }) => {
              return (
                <Image style={styles.headerImage} source={{ uri: item }}  />
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    margin: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
  },
  headerImage: {
    width: 400,
    height: 250,
    borderRadius: 10,
    margin: 8,
  },
});

export default withNavigation(RestaurantScreen);
