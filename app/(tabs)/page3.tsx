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
          source={require("@/assets/images/background3.png")}
          style={styles.background}
        />
      </View>
      <View style={styles.namebox}>
        <Text style={styles.name}>Flavorful bean</Text>
        <Text style={styles.name1}>journey</Text>
        <Text style={styles.info}>
          Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit mattis{" "}
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Link href="./signOrLog" style={styles.button1}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Next {">"}</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name1: {
    fontFamily: "Playwrite",
    color: "#CE9760",
    fontSize: 40,
    textAlign: "center",
    position: "absolute",
    top: 45,
  },
  info: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
  namebox: {
    position: "absolute",
    top: 200,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: "Playwrite",
    color: "#CE9760",
    fontSize: 40,
    textAlign: "center",
  },
  imagebox: {
    justifyContent: "center",
    alignItems: "center",
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
  button1: {
    width: 242,
    height: 53,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
