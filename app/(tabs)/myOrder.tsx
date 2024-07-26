"use client";
import { useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

export default function HomeScreen() {
  const cld = new Cloudinary({ cloud: { cloudName: "dsfypbtbn" } });
  const img = cld
    .image("latte")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));
  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>My Order</Text>
      </View>
      <View style={styles.orderBox}>
        <ScrollView style={styles.scroll}>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <AdvancedImage cldImg={img} style={styles.productImg} />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.productName}>adasdasdas</Text>
              <Text style={styles.productQty}>asdas</Text>
              <Text style={styles.productPrice}>ada</Text>
              <Text style={styles.orderStatus}>sdasdasda</Text>
            </View>
            <View style={styles.orderLocationAndStatus}>
              <Text style={styles.status}>Track</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <AdvancedImage cldImg={img} style={styles.productImg} />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.productName}>adasdasdas</Text>
              <Text style={styles.productQty}>asdas</Text>
              <Text style={styles.productPrice}>ada</Text>
              <Text style={styles.orderStatus}>sdasdasda</Text>
            </View>
            <View style={styles.orderLocationAndStatus}>
              <Text style={styles.status}>Track</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#CE9760",
  },
  status: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  orderLocationAndStatus: {
    width: 100,
    height: 30,
    backgroundColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  orderStatus: {
    color: "gray",
    fontSize: 12,
    fontWeight: "500",
  },
  productPrice: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "600",
  },
  productQty: {
    fontSize: 12,
    fontWeight: "500",
    color: "gray",
  },
  productName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#543A20",
  },
  infoBox: {
    width: "35%",
  },
  scroll: {
    width: "100%",
    height: "auto",
  },
  item: {
    width: "94%",
    height: "auto",
    marginLeft: "3%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderColor: "#CE9760",
    borderBottomWidth: 1,
  },
  productImg: {
    width: 100,
    height: 100,
  },
  orderBox: {
    width: "100%",
    height: "86%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    marginTop: "10%",
  },
  headerbox: {
    width: "100%",
    backgroundColor: "#543A20",
    height: "14%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
