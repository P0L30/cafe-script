"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Fontisto";
import {
  View,
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

  // Initialize Cloudinary instance
  const cld = new Cloudinary({ cloud: { cloudName: "dsfypbtbn" } });

  // Transform the image
  const img = cld
    .image("starter")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <AdvancedImage cldImg={img} style={styles.background} />
      <Icon name="coffeescript" style={styles.logo} />
      <View style={styles.namebox}>
        <Text style={styles.name}>Cafe script</Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Link href="./explore" style={styles.button1}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  namebox: {
    position: "absolute",
    top: 370,
  },
  name: {
    fontFamily: "Playwrite",
    color: "#CE9760",
    fontSize: 40,
    fontWeight: "500",
  },
  imagebox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: "25%",
    right: "33%",
    color: "#CE9760",
    fontSize: 120,
  },
  buttonBox: {
    position: "absolute",
    bottom: 50,
  },
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  button: {
    width: 242,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    width: 242,
    height: 53,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#543A20",
  },
  background: {
    width: "120%",
    height: "100%",
    opacity: 0.4,
  },
});
