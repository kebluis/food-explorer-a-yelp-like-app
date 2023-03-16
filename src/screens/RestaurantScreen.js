import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import moment from "moment";

import Availability from "../component/Availability";
import { getRestaurantDetails } from "../api/yelp";

import ImageModal from "react-native-image-modal";

const RestaurantScreen = ({ route }) => {
  const restaurantId = route.params.id;
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
  const [imageSize, setImageSize] = useState("cover");

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
          <View style={styles.rowCenter}>
            <Text style={styles.headerText}>{details.name}</Text>
            <Availability isOpen={details.hours[0].is_open_now} />
          </View>
          <Text>{details.location.display_address}</Text>
          {details.photos.length > 0 && (
            <FlatList
              horizontal
              data={details.photos}
              keyExtractor={(photos) => photos}
              renderItem={({ item }) => {
                return (
                  <ImageModal
                    resizeMode={imageSize ?? "contain"}
                    style={styles.headerImage}
                    source={{
                      uri:
                        item ??
                        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
                    }}
                    onOpen={() => setImageSize("contain")}
                    willClose={() => setImageSize("cover")}
                  />
                );
              }}
            />
          )}
          <View style={{ alignItems: "center" }}>
            <Text style={styles.availabilityHeader}>Working Hours:</Text>
            <FlatList
              data={details.hours[0].open}
              keyExtractor={(open) => `${restaurantId}-${open.day}`}
              renderItem={({ item }) => {
                return (
                  <View style={styles.availabilityContainer}>
                    <Text style={[styles.availabilityItem, styles.textAlignRight]}>
                      {daysOfTheWeek[item.day]} :
                    </Text>
                    <Text style={styles.availabilityItem}>
                      {moment(item.start, "HHmm").format("hh:mm A")} - {moment(item.end, "HHmm").format("hh:mm A")}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textAlignRight: {
    textAlign: "right",
  },
  detailContainer: {
    margin: 16,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
  },
  headerImage: {
    width: 175,
    height: 250,
    borderRadius: 10,
    marginVertical: 8,
    marginRight: 16,
  },
  availabilityHeader: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  availabilityContainer: {
    marginVertical: "auto",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  availabilityItem: {
    width: "50%",
    paddingRight: 20,
    marginVertical: 6
  },
});

export default RestaurantScreen;
