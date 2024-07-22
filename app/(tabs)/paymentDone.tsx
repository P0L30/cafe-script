"use client";
import { useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/EvilIcons";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const cafeProductCardList = [
    { id: 1, attributes: { name: "Flat White", price: "6.45" } },
    { id: 2, attributes: { name: "Caffe Mocha", price: "6.45" } },
    { id: 3, attributes: { name: "Cappuccino", price: "5.95" } },
    { id: 4, attributes: { name: "Caffe Latte", price: "5.95" } },
  ];

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.CheckBox}>
        <Text style={styles.checkMark}>✓</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Payment Successful</Text>
        <Text style={styles.text}>Thank you for your purchase</Text>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Link href="/trackOrder" style={styles.button1}>
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
    color: "white",
    opacity: 0.7,
    fontSize: 15,
  },
  textBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "45%",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  CheckBox: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#CE9760",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20%",
  },
  checkMark: {
    color: "#543A20",
    fontSize: 125,
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
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#543A20",
  },
});
