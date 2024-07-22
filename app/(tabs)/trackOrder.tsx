"use client";
import { useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import { StatusImage } from '../../assets/images/statusImage'
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
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>Track Order</Text>
      </View>
      <View style={styles.timeBox}>
        <View style={styles.timeHeader}>
          <View style={styles.imgBox}>
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 33.9168C9.98561 33.9168 3.08334 27.0145 3.08334 18.5002C3.08334 9.98577 9.98561 3.0835 18.5 3.0835C27.0143 3.0835 33.9167 9.98577 33.9167 18.5002C33.9167 27.0145 27.0143 33.9168 18.5 33.9168ZM18.5 30.8335C25.3116 30.8335 30.8333 25.3117 30.8333 18.5002C30.8333 11.6886 25.3116 6.16683 18.5 6.16683C11.6885 6.16683 6.16667 11.6886 6.16667 18.5002C6.16667 25.3117 11.6885 30.8335 18.5 30.8335ZM20.0417 18.5002H26.2083V21.5835H16.9583V10.7918H20.0417V18.5002Z"
                fill="white"
              />
            </svg>
          </View>
          <View>
            <Text style={styles.timeTitle}>Estimated Delivery time</Text>
            <Text style={styles.timeText}>45 - 55 min</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View style={styles.statusBox}>
            <View style={styles.statusText}>
              <View style={styles.checkBox}>
                <Text style={styles.check}>✓</Text>
              </View>
              <View style={styles.statusBoxText}>
                <Text style={styles.statusTitle}>Order placed</Text>
                <Text style={styles.statusInfo}>23 march, 2024, 04:36 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.statusBox}>
            <View style={styles.statusText}>
              <View style={styles.checkBox}>
                <Text style={styles.check}>✓</Text>
              </View>
              <View style={styles.statusBoxText}>
                <Text style={styles.statusTitle}>In Progress</Text>
                <Text style={styles.statusInfo}>23 march, 2024, 04:40 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.statusBox}>
            <View style={styles.statusText}>
              <View style={styles.checkBox}>
                <Text style={styles.check}>✓</Text>
              </View>
              <View style={styles.statusBoxText}>
                <Text style={styles.statusTitle}>On Your way</Text>
                <Text style={styles.statusInfo}>23 march, 2024, 05:10 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.statusBox}>
            <View style={styles.statusText}>
              <View style={styles.checkBox}>
                <Text style={styles.check}>✓</Text>
              </View>
              <View style={styles.statusBoxText}>
                <Text style={styles.statusTitle}>Deliverd</Text>
                <Text style={styles.statusInfo}>23 march, 2024, 05:20 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button2}>
        <Link href="./trackOrder" style={styles.button1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Chat with Rider</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    borderColor: "#CE9760",
    borderWidth: 2,
    height: "30%",
    position: "absolute",
    bottom: "10%",
    left: "32.5%",
    zIndex: 1,
  },
  status: {
    gap: 40,
  },
  statusInfo: {
    color: "white",
    fontSize: 10,
  },
  statusTitle: {
    color: "white",
    fontSize: 18,
  },
  statusBoxText: {
    gap: 5,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  statusBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  timeBox: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    position: "absolute",
    bottom: "10%",
    zIndex: 2,
  },
  check: {
    color: "#39260B",
    fontSize: 30,
  },
  checkBox: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  timeText: {
    color: "#CE9760",
    fontSize: 25,
  },
  timeTitle: {
    color: "white",
    fontSize: 25,
  },
  timeHeader: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
  imgBox: {
    width: 60,
    height: 60,
    backgroundColor: "#CE9760",
    borderRadius: 50,
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
