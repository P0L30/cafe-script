import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import Icon1 from "react-native-vector-icons/Fontisto";
import axios from "axios";

export default function RegisterScreen() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const userData = {
      fullName,
      email,
      password,
      avatar: "",
      address: "",
      paymentInfo: {},
      favorites: [],
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/pages/api/register",
        userData
      );
      Alert.alert("Success", "User registered successfully");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      Alert.alert("Error", errorMessage);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const cld = new Cloudinary({ cloud: { cloudName: "dsfypbtbn" } });
  const img = cld
    .image("background5")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <AdvancedImage cldImg={img} style={styles.background} />
      <Icon1 name="coffeescript" style={styles.logo} />
      <View style={styles.namebox}>
        <Text style={styles.name}>Register your Account</Text>
      </View>
      <View style={styles.inputbox}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="E-mail Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
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
        <Text style={styles.header}>Or Register With</Text>
      </View>
      <View style={styles.headerbox1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerbox1: {
    position: "absolute",
    top: "75%",
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
    top: "74%",
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
    bottom: 50,
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
    color: "#CE9760",
    fontSize: 50,
    top: "14%",
    right: "43%",
    opacity: 0.9,
  },
  buttonBox: {
    position: "absolute",
    bottom: 255,
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
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
});
