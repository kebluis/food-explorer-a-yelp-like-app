import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const RestaurantDetail = ({ uri = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg", name, rating, reviewCount }) => {
  return (
    <View style={styles.detailContainer}>
      <Image style={styles.sampleImage} source={{ uri }} />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingItem}>
          <AntDesign style={styles.marginSpacing} name="star" size={16} color="gold" />
          <Text>{rating}</Text>
        </View>
        <View style={styles.ratingItem}>
          <AntDesign style={styles.marginSpacing} name="user" size={14} color="black" />
          <Text>{reviewCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    margin: 16,
  },
  sampleImage: {
    width: 160,
    height: 80,
    borderRadius: 10,
  },
  title: {
    fontWeight: "700",
    marginVertical: 8,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingItem: {
    flex: 1,
    flexDirection: "row",
  },
  marginSpacing: {
    marginRight: 8,
  }
});

export default RestaurantDetail;
