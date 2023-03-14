import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const RestaurantDetail = ({ uri, name, rating, reviewCount }) => {
  return (
    <View style={styles.detailContainer}>
      <Image style={styles.sampleImage} source={{ uri }} />
      <Text style={styles.title}>{name}</Text>
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
    marginBottom: 8,
    borderRadius: 10,
  },
  title: {
    fontWeight: "700",
  },
  rating: {

  }
});

export default RestaurantDetail;
