"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";

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
          source={require("@/assets/images/background5.png")}
          style={styles.background}
        />
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.namebox}>
        <Text style={styles.name}>Register your Account</Text>
      </View>
      <View style={styles.inputbox}>
        <TextInput placeholder="E-mail Address" style={styles.input} />
        <TextInput placeholder="PassWord" style={styles.input} />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Link href="./homepage" style={styles.button1}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
      <View style={styles.Regbox}>
        <TouchableOpacity style={styles.registers}>
          <Icon name="facebook-f" style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.registers}>
          <Icon name="google" style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.registers}>
          <Icon name="twitter" style={styles.Icons} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerbox}>
        <Text style={styles.header}>Or Sign In With</Text>
      </View>
      <View style={styles.headerbox1}></View>
      <Text style={styles.forgot}>Forgot PassWord?</Text>
      <Text style={styles.bottomTetx}>
        Don't have an account ?{" "}
        <Link href="./register" style={styles.register}>
          Register
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    color: "#CE9760",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomTetx: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    position: "absolute",
    bottom: "5%",
  },
  forgot: {
    color: "#CE9760",
    fontWeight: "700",
    fontSize: 12,
    position: "absolute",
    right: "7%",
    top: "46%",
  },
  headerbox1: {
    position: "absolute",
    top: "64%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#DD9854",
    borderWidth: 1,
    height: "0%",
  },
  header: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  headerbox: {
    position: "absolute",
    top: "63%",
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    zIndex: 5,
    backgroundColor: "black",
  },
  Regbox: {
    width: "100%",
    height: 200,
    position: "absolute",
    bottom: "15%",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  registers: {
    width: 110,
    height: 76,
    backgroundColor: "#101215",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Icons: {
    color: "white",
    fontSize: 30,
  },
  inputbox: {
    width: "100%",
    height: "auto",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 270,
    gap: 10,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#16181C",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  namebox: {
    position: "absolute",
    top: 200,
  },
  name: {
    // fontFamily: "Playwrite",
    color: "white",
    fontSize: 35,
    fontWeight: "500",
  },
  imagebox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: 110,
    height: 80,
    top: 100,
    right: 160,
    opacity: 0.9,
  },
  buttonBox: {
    position: "absolute",
    bottom: "43%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    width: "90%",
    height: 65,
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
    opacity: 0.3,
  },
});
