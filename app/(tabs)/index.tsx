"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
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

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.imagebox}>
        <Image
          source={require("@/assets/images/starter.png")}
          style={styles.background}
        />
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
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
    width: 170,
    height: 110,
    top: "30%",
    right: "32%",
    opacity: 0.9,
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
    width: 420,
    height: "100%",
    opacity: 0.4,
  },
});
