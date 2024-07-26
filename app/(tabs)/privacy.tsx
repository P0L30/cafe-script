"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <View style={styles.policyBox}>
        <Text style={styles.title}>Terms & Conditions </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor
          eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis
          dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit
          mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
          Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh
          quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat
          tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum
          condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus
          nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus
          pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
          Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh
          quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat
          tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum
          condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus
          nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus
          pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  policyBox: {
    width: "90%",
    height: "65%",
    gap: 15,
  },
  text: {
    color: "gray",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "left",
  },
  title: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
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
