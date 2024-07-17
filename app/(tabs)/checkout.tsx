"use client";
import { useState } from 'react'
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
const [ count ,setCount ] = useState(0);
const handleIncrement = () => {
  setCount(count + 1);
};
const handleDecrement =() => {
  setCount(count - 1);
};

  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const cafeProductCardList = [
    { id: 1, attributes: { name: 'Flat White', price: '6.45' } },
    { id: 2, attributes: { name: 'Caffe Mocha', price: '6.45' } },
    { id: 3, attributes: { name: 'Cappuccino', price: '5.95' } },
    { id: 4, attributes: { name: 'Caffe Latte', price: '5.95' } },
  ];

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>Checkout</Text>
      </View>
      <View>
        <View>
            <Text>Deliver Address</Text>
            <View>
                <View style={styles.iconBox}><Icon name="location" style={styles.icon}/></View>
                <TextInput placeholder='Your Address'/>
            </View>
        </View>
      </View>
      {/* <View style={styles.orderBox}>
        <ScrollView style={styles.scroll}>
        <View style={styles.item}>
            <View style={styles.imgBox}>
            <Image
          source={require("@/assets/images/logo.png")} style={styles.productImg}
        />
            </View>
        <View style={styles.infoBox}>
            <Text style={styles.productName}>adasdasdas</Text>
            <Text style={styles.productQty}>asdas</Text>
            <Text style={styles.productPrice}>ada</Text>
            <Text style={styles.orderStatus}>sdasdasda</Text>
        </View>
        <View style={styles.orderLocationAndStatus}>
          <Text style={styles.status}>Track</Text>
        </View>
        </View>
        <View style={styles.item}>
            <View style={styles.imgBox}>
            <Image
          source={require("@/assets/images/logo.png")} style={styles.productImg}
        />
            </View>
        <View style={styles.infoBox}>
            <Text style={styles.productName}>adasdasdas</Text>
            <Text style={styles.productQty}>asdas</Text>
            <Text style={styles.productPrice}>ada</Text>
            <Text style={styles.orderStatus}>sdasdasda</Text>
        </View>
        <View style={styles.orderLocationAndStatus}>
          <Text style={styles.status}>Track</Text>
        </View>
        </View>
        </ScrollView>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 35,
    },
    iconBox: {
        width: 50,
        height: 50,
        backgroundColor: "#CE9760",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    imgBox: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#CE9760',
    },
    status: {
        color: 'white',
        fontSize: 14,
        fontWeight: "600"
    },
    orderLocationAndStatus: {
        width: 100,
        height: 30,
        backgroundColor: '#CE9760',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    orderStatus: {
        color: "gray",
        fontSize: 12,
        fontWeight: "500",
    },
    productPrice: {
        color: '#543A20',
        fontSize: 20,
        fontWeight: "600"
    },
    productQty: {
        fontSize: 12,
        fontWeight: "500",
        color: 'gray'
    },
    productName: {
        fontSize: 20,
        fontWeight: "600",
        color: '#543A20'
    },
    infoBox: {
        width: '35%',
        
    },
    scroll: {
        width: "100%",
        height: "auto",
      },
    item: {
        width: "94%",
        height: 'auto',
        marginLeft: '3%',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        padding: 10,
        borderColor: '#CE9760',
        borderBottomWidth: 1
    },
    productImg: {
        width: 100,
        height: 100,
    },
    orderBox: {
        width: "100%",
        height: "86%",
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: 'center',
    },
    headerText: {
        color: "white",
        fontSize: 25,
        fontWeight: '700',
        marginTop: "10%"
    },
    headerbox: {
        width: '100%',
        backgroundColor: "#543A20",
        height: '14%',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
 body: {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#543A20"
 },

});
