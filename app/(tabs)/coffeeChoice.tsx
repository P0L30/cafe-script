"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/FontAwesome";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import Slider from "@react-native-community/slider";
import { useEffect } from "react";

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

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/starter.png")}
        style={styles.background}
      />
      <View style={styles.containerHeaderText}>
        <Link href="./home">
          <Icon1 name="chevron-left" style={styles.arrow} />
        </Link>
        <Text style={styles.headerText}>Liberica Coffee</Text>
        <Icon name="hearto" style={styles.notification} />
      </View>
      <View style={styles.style}></View>
      <View style={styles.nameBox}>
        <Text style={styles.name}>ingredients</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#CE9760"
        maximumTrackTintColor="#CE9760"
        thumbTintColor="#CE9760"
        thumbImage={require("@/assets/images/logo.png")}
      />
      <Text style={styles.headerTextForSize}>Coffee Size</Text>
      <View style={styles.sizeBox}>
        <View style={styles.smallSizeBox}>
          <View style={styles.smallSize}>
            <Icon1 name="coffee" style={styles.cupSizesmall} />
          </View>
          <Text style={styles.size}>Small</Text>
        </View>
        <View style={styles.mediumSizeBox}>
          <View style={styles.mediumSize}>
            <Icon1 name="coffee" style={styles.mediumCup} />
          </View>
          <Text style={styles.size}>Medium</Text>
        </View>
        <View style={styles.largeSizeBox}>
          <View style={styles.laregSize}>
            <Icon1 name="coffee" style={styles.largeCup} />
          </View>
          <Text style={styles.size}>Large</Text>
        </View>
      </View>
      <View style={styles.amountBox}>
        <View style={styles.addTakeOutBox}>
          <Text style={styles.color}>-</Text>
        </View>
        <Text style={styles.text1}>1</Text>
        <View style={styles.addTakeOutBox}>
          <Text style={styles.color}>+</Text>
        </View>
      </View>
      <View style={styles.endBox}>
        <Text style={styles.price}>$20</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.ButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: "70%",
    height: 40,
    position: "absolute",
    top: "45%",
    flex: 1,
    alignSelf: "center",
  },
  headerTextForSize: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    bottom: "38%",
  },
  size: {
    color: "#CE9760",
    fontSize: 15,
  },
  largeCup: {
    color: "#39260B",
    fontSize: 80,
  },
  laregSize: {
    width: "80%",
    height: "70%",
    backgroundColor: "#CE9760",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  largeSizeBox: {
    width: "40%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
  },
  mediumCup: {
    color: "#39260B",
    fontSize: 55,
  },
  mediumSize: {
    width: "80%",
    height: "50%",
    backgroundColor: "#CE9760",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  mediumSizeBox: {
    width: "30%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
  },
  cupSizesmall: {
    color: "#39260B",
    fontSize: 30,
  },
  smallSize: {
    width: "65%",
    height: "35%",
    backgroundColor: "#CE9760",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallSizeBox: {
    width: "25%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
  },
  sizeBox: {
    width: "90%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "18%",
  },
  text1: {
    color: "white",
    fontSize: 22,
  },
  color: {
    color: "#39260B",
    fontSize: 30,
  },
  addTakeOutBox: {
    backgroundColor: "#CE9760",
    width: 32,
    height: 32,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4,
  },
  amountBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "27%",
    alignItems: "center",
    position: "absolute",
    bottom: "12%",
  },
  price: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
  },
  ButtonText: {
    color: "#39260B",
    fontSize: 20,
    fontWeight: "600",
  },
  addToCartButton: {
    backgroundColor: "#CE9760",
    width: "80%",
    height: "70%",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  endBox: {
    width: "90%",
    height: "10%",
    position: "absolute",
    bottom: "0%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameBox: {
    position: "absolute",
    top: "37%",
  },
  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  notification: {
    color: "white",
    fontSize: 20,
  },
  arrow: {
    color: "#CE9760",
    fontSize: 20,
  },
  containerHeaderText: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "6%",
  },
  style: {
    width: 100,
    height: 100,
    borderRadius: 50,
    transform: [{ scaleX: 5 }],
    backgroundColor: "#543A20",
    position: "absolute",
    top: "31%",
  },
  background: {
    width: "100%",
    height: "39%",
    position: "absolute",
    top: 0,
  },
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#543A20",
    overflow: "hidden",
  },
  sliderContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
function setIcon(value: any) {
  throw new Error("Function not implemented.");
}
