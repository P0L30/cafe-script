"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const cafeProductList = [
    { id: 1, attributes: { name: "Coffee" } },
    { id: 2, attributes: { name: "Tea" } },
    { id: 3, attributes: { name: "Pastries" } },
    { id: 4, attributes: { name: "Sandwiches" } },
    { id: 5, attributes: { name: "Ice Coffee" } },
    { id: 6, attributes: { name: "Ice Tea" } },
    { id: 7, attributes: { name: "Cake" } },
    { id: 8, attributes: { name: "Lunch" } },
  ];
  const cafeProductCardList = [
    { id: 1, attributes: { name: "Flat White", price: "6.45" } },
    { id: 2, attributes: { name: "Caffe Mocha", price: "6.45" } },
    { id: 3, attributes: { name: "Cappuccino", price: "5.95" } },
    { id: 4, attributes: { name: "Caffe Latte", price: "5.95" } },
  ];
  const cld = new Cloudinary({ cloud: { cloudName: "dsfypbtbn" } });
  const img = cld
    .image("starter")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));
  const product = cld
    .image("latte")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));
  const discount = cld
    .image("discount")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <AdvancedImage cldImg={img} style={styles.profile} />
        <View>
          <Text style={styles.username}>Poleo</Text>
          <Text style={styles.speech}>Good Morning!</Text>
        </View>
        <View style={styles.iconBox}>
          <Icon name="search" style={styles.headerIcon} />
          <Link href="./notification">
            <Icon name="bell" style={styles.headerIcon} />
          </Link>
        </View>
      </View>
      <View style={styles.discount}>
        <View style={styles.disbox}>
          <Text style={styles.dis}>Get 20% Discount On your First Order!</Text>
          <Text style={styles.discountInfo}>
            Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
            mattis{" "}
          </Text>
        </View>
        <AdvancedImage cldImg={discount} style={styles.disImg} />
      </View>
      <View style={styles.category}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.category1}
        >
          {cafeProductList.map((product) => (
            <TouchableOpacity key={product.id} style={styles.categoryBT}>
              <Text style={styles.categoryItems}>
                {product.attributes.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.productBox}>
        {cafeProductCardList.map((product) => (
          <View style={styles.productCard}>
            <Link href="./coffeeChoice" style={styles.productCard1}>
              <AdvancedImage
                cldImg={cld
                  .image("latte")
                  .format("auto")
                  .quality("auto")
                  .resize(auto().gravity(autoGravity()))}
                style={styles.productImg}
              />
              <View style={styles.productInfoBox}>
                <View style={styles.productNameAndPrice}>
                  <Text style={styles.productName}>
                    {product.attributes.name}
                  </Text>
                  <Text style={styles.productPrice}>
                    ${product.attributes.price}
                  </Text>
                </View>
                <Text>Lorem ipsum dolor sit amet cons </Text>
              </View>
            </Link>
          </View>
        ))}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Link href="/home" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="home" style={styles.tabBarIcon1} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./order" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="shopping-cart" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./favorite" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="heart" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./profile" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="user" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tab1: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    color: "black",
    fontSize: 25,
  },
  tabBarIcon1: {
    color: "white",
    fontSize: 25,
  },
  tab: {
    backgroundColor: "#543A20",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  tabBar: {
    width: "100%",
    height: "8%",
    backgroundColor: "#CE9760",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  productInfoBox: {
    width: "90%",
    height: "auto",
    gap: 15,
  },
  productNameAndPrice: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  productPrice: {
    color: "#39260B",
    fontWeight: "600",
    fontSize: 16,
  },
  productName: {
    fontWeight: "600",
    fontSize: 18,
    color: "white",
  },
  productImg: {
    width: 85,
    height: 79,
    marginLeft: "25%",
  },
  productBox: {
    width: "90%",
    height: "50%",
    position: "absolute",
    bottom: "10%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productCard: {
    backgroundColor: "#CE9760",
    width: "48%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    borderRadius: 7,
    marginBottom: "5%",
  },
  productCard1: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBT: {
    marginLeft: 10,
  },
  categoryItems: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  category1: {
    position: "absolute",
    width: "100%",
    top: "42%",
  },
  category: {
    position: "absolute",
    width: "90%",
    top: "35%",
  },
  discountInfo: {
    fontWeight: "400",
    fontSize: 12,
    color: "white",
  },
  dis: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
  },
  disbox: {
    width: "50%",
    height: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  disImg: {
    width: "40%",
    height: "100%",
  },
  discount: {
    backgroundColor: "#CE97607D",
    width: "90%",
    height: "18%",
    borderRadius: 10,
    position: "absolute",
    top: "15%",
    display: "flex",
    flexDirection: "row",
    paddingVertical: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
  },
  headerIcon: {
    color: "white",
    fontSize: 30,
  },
  speech: {
    fontWeight: "300",
    fontSize: 18,
    color: "white",
  },
  username: {
    color: "white",
    fontWeight: "600",
    fontSize: 22,
  },
  header: {
    width: "90%",
    height: "auto",
    position: "absolute",
    top: "5%",
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#543A20",
    color: "white",
  },
  profile: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
});
