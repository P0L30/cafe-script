"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/FontAwesome";
// import RangeSlider from "react-native-range-slider";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

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
        <Link href="./notification">
          <Icon name="hearto" style={styles.notification} />
        </Link>
      </View>
      <View style={styles.style}></View>
      <View style={styles.nameBox}>
        <Text style={styles.name}>ingredients</Text>
      </View>
      {/* <View style={styles.sliderContainer}>
        <RangeSlider
          minValue={0}
          maxValue={100}
          tintColor={"#da0f22"}
          handleBorderWidth={1}
          handleBorderColor="#454d55"
          selectedMinimum={0}
          selectedMaximum={100}
          style={styles.slider}
          onChange={(data) => {
            console.log(data);
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  sliderContainer: {
    flex: 1,
    flexDirection: "row",
  },
  slider: {
    flex: 1,
    height: 70,
    padding: 10,
    backgroundColor: "#ddd",
  },
});
