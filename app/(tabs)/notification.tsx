"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <View style={styles.dateAndread}>
        <Text style={styles.dateStatus}>Today</Text>
        <Text style={styles.markAllRead}>Mark all read</Text>
      </View>
      <View style={styles.dateAndread2}>
        <Text style={styles.dateStatus}>Yesterday</Text>
        <Text style={styles.markAllRead}>Mark all read</Text>
      </View>
      <View style={styles.orderBox}>
        <ScrollView style={styles.scroll}>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.notificationImg}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.discountName}>adasdasdas</Text>
              <Text style={styles.discountQty}>asdas</Text>
            </View>
            <View>
              <Text style={styles.status}>1h</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.notificationImg}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.discountName}>adasdasdas</Text>
              <Text style={styles.discountQty}>asdas</Text>
            </View>
            <View>
              <Text style={styles.status}>1h</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.notificationImg}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.discountName}>adasdasdas</Text>
              <Text style={styles.discountQty}>asdas</Text>
            </View>
            <View>
              <Text style={styles.status}>1h</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.orderBox1}>
        <ScrollView style={styles.scroll}>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.notificationImg}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.discountName}>adasdasdas</Text>
              <Text style={styles.discountQty}>asdas</Text>
            </View>
            <View>
              <Text style={styles.status}>1h</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.notificationImg}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.discountName}>adasdasdas</Text>
              <Text style={styles.discountQty}>asdas</Text>
            </View>
            <View>
              <Text style={styles.status}>1h</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.notificationImg}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.discountName}>adasdasdas</Text>
              <Text style={styles.discountQty}>asdas</Text>
            </View>
            <View>
              <Text style={styles.status}>1h</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateAndread2: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "56%",
  },
  markAllRead: {
    fontSize: 14,
    color: "gray",
    fontWeight: "600",
  },
  dateStatus: {
    color: "gray",
    fontWeight: "600",
    fontSize: 25,
  },
  dateAndread: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "16%",
  },
  imgBox: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    color: "#8D8B8B",
    fontSize: 14,
    fontWeight: "600",
  },
  orderLocationAndStatus: {
    width: 100,
    height: 30,
    backgroundColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  orderStatus: {
    color: "#543A20",
    fontSize: 12,
    fontWeight: "500",
  },
  productPrice: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "600",
  },
  discountQty: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
  discountName: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  infoBox: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    height: "80%",
  },
  scroll: {
    width: "100%",
    height: "auto",
  },
  item: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderColor: "#CE9760",
    borderBottomWidth: 1,
    paddingHorizontal: "5%",
  },
  notificationImg: {
    width: 50,
    height: 50,
  },
  orderBox1: {
    width: "100%",
    height: "40%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: "0%",
  },
  orderBox: {
    width: "100%",
    height: "86%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "21%",
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
