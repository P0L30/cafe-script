"use client";
import { useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/EvilIcons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

export default function HomeScreen() {
  const cafeProductCardList = [
    { id: 1, attributes: { name: "Flat White", price: "6.45" } },
    { id: 2, attributes: { name: "Caffe Mocha", price: "6.45" } },
    { id: 3, attributes: { name: "Cappuccino", price: "5.95" } },
    { id: 4, attributes: { name: "Caffe Latte", price: "5.95" } },
  ];
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
        <Text style={styles.headerText}>Checkout</Text>
      </View>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Deliver Address</Text>
        <View style={styles.addressBox}>
          <View style={styles.firstBox}>
            <View style={styles.iconBox}>
              <Icon name="location" style={styles.icon} />
            </View>
            <TextInput
              placeholder="Your Address"
              style={styles.address}
              placeholderTextColor={"white"}
            />
          </View>
          <TouchableOpacity style={styles.addAddress}>
            <Text style={styles.addressBtText}>Add</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Add Payment Method</Text>
        <View style={styles.addressBox}>
          <View style={styles.firstBox}>
            <View style={styles.iconBox}>
              <Text style={styles.text}>+</Text>
            </View>
            <View>
              <Text style={styles.cardTitle}>Add Card</Text>
              <Text style={styles.cardText}>Credit or debit</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addAddress}>
            <Link href="/addCard">
              <Text style={styles.addressBtText}>Add</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.productList}>Product List</Text>
      </View>
      <View style={styles.orderBox}>
        <ScrollView style={styles.scroll}>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <AdvancedImage cldImg={img} style={styles.productImg} />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.productName}>Robusta</Text>
              <Text style={styles.productQty}>With Milk</Text>
              <Text style={styles.productPrice}>$20</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <AdvancedImage cldImg={img} style={styles.productImg} />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.productName}>Robusta</Text>
              <Text style={styles.productQty}>With Milk</Text>
              <Text style={styles.productPrice}>$20</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <AdvancedImage cldImg={img} style={styles.productImg} />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.productName}>Robusta</Text>
              <Text style={styles.productQty}>With Milk</Text>
              <Text style={styles.productPrice}>$20</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Link href="./paymentDone" style={styles.button1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Continue Payment</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#39260B",
    fontSize: 40,
    marginBottom: "15%",
  },
  cardText: {
    color: "white",
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
  },
  firstBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#39260B",
  },
  button1: {
    width: 380,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "90%",
    height: "6%",
    borderRadius: 10,
    backgroundColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    position: "absolute",
    bottom: "2%",
  },
  textBox: {
    width: "90%",
    position: "absolute",
    top: "35%",
  },
  productList: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
  addressBtText: {
    color: "white",
  },
  addAddress: {
    width: 50,
    backgroundColor: "#CE9760",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  headerBox: {
    width: "90%",
    position: "absolute",
    top: "10%",
    gap: 15,
  },
  addressBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  address: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 40,
    padding: 5,
    color: "white",
  },
  icon: {
    fontSize: 35,
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: "#CE9760",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
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
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  productQty: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
  productName: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  infoBox: {
    width: "35%",
    gap: 10,
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderColor: "#CE9760",
    borderBottomWidth: 1,
    gap: 20,
  },
  productImg: {
    width: 100,
    height: 100,
  },
  orderBox: {
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
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
    backgroundColor: "#543A20",
  },
});
