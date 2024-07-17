"use client";
import { useState } from 'react'
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
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
      <View style={styles.header}>
      <Link href="./home">
            <Icon name="chevron-left" style={styles.backButton}/>
          </Link>
        <Text style={styles.headerText}>Cart</Text>
        <Link href="./notification">
        <Icon name="bell" style={styles.bell}/>
        </Link>
      </View>
      <View style={styles.Order}>
        <View>
          <Text style={styles.muOrder}>My Order</Text>
          <Text style={styles.orderText}>You have 3  <Text style={styles.SpecialorderText}>items</Text> in your cart</Text>
        </View>
        <View style={styles.orderBox}>
          <ScrollView style={styles.orderboxScroll}>
        {cafeProductCardList.map((product) => (
        <View style={styles.order}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.productImg}
       />
        <View style={styles.OrderInfoCount}>
          <View style={styles.orderInfo}> 
            <Text style={styles.orderName}>{product.attributes.name}</Text>
            <Text style={styles.MilkOrWater}>With Milk</Text>
            <Text style={styles.productPrice}>${product.attributes.price}</Text>
          </View>
          <View style={styles.count}>
            <TouchableOpacity onPress={handleDecrement} style={styles.addtakeout}><Text style={styles.minusadd}>-</Text></TouchableOpacity>
            <Text style={styles.amount}>{count}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.addtakeout}><Text style={styles.minusadd}>+</Text></TouchableOpacity>
          </View>
        </View>
        </View>
              ))}
              </ScrollView>
        </View>
      </View>
      <View style={styles.discountandprice}>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Enter Coupan Code here" />
        <TouchableOpacity style={styles.Apply}><Text style={styles.color}>Apply</Text></TouchableOpacity>
      </View>
      <View style={styles.priceAndTypeBox}>
      <View style={styles.typeBox}>
      <Text>Sub-total</Text>
      <Text>Shipping</Text>
      <Text>Total</Text>
      </View>
      <View style={styles.priceBox}>
      <Text>$44</Text>
      <Text>$6</Text>
      <Text>$50</Text>
      </View>
      </View>
      </View>
      <View style={styles.tabBar}>
      <TouchableOpacity>
          <Link href="./home">
            <Icon name="home" style={styles.tabBarIcon}/>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Link href="/order">
            <Icon name="shopping-cart" style={styles.tabBarIcon1}/>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./favorite">
            <Icon name="heart" style={styles.tabBarIcon}/>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./profile">
            <Icon name="user" style={styles.tabBarIcon}/>
          </Link>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button2}>
          <Link href="./checkout" style={styles.button1}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Finalize Order</Text>
            </View>
          </Link>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "white",
  },
  button1: {
    width: 380,
    height: 53,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "90%",
    height: "6%",
    borderRadius: 10,
    borderColor: "#CE9760",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    position: 'absolute',
    bottom: "13%"
  },
  finalizeOrder: {
    color: "white",
    borderColor: "#CE9760",
    width: "90%",
    height: "6%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    fontFamily: 'sans-serif',
    borderWidth: 1,
    position: "absolute",
    bottom: "12.5%",
    borderRadius: 9,
    fontSize: 18,
    fontWeight: '600'
  },
  typeBox: {
    gap: 10
  },
  priceBox: {
    gap: 10
  },
  priceAndTypeBox: {
    display: "flex",
    flexDirection: "row"
  },
  color: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },
  inputBox: {
    width: "100%",
    height: "55%",
    display: "flex",
    flexDirection: "row",
  },
  Apply: {
    backgroundColor: "#543A20",
    width: "30%",
    height: "45%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: "#543A20",
    width: "70%",
    height: "45%",
    borderColor: "#39260B",
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    },
  discountandprice: {
    backgroundColor: "#CE9760",
    width: "90%",
    height: "24%",
    position: "absolute",
    bottom: "19.8%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 20
  },
  amount: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
  minusadd: {
    color: 'white',
    fontSize: 20,
  },
  addtakeout :{
    width: 25,
    height: 25,
    borderRadius: 8,
    backgroundColor: "#543A20",
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row",
    width: "40%",
  },
  OrderInfoCount: {
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  productPrice: {
    color: "#39260B",
    fontSize: 14,
    fontWeight: '600'
  },
  MilkOrWater: {
    fontSize: 10,
    color: "#543A20",
    fontWeight: '600'
  },
  orderName: {
    color: 'white',
    fontSize: 16,
    fontWeight: "700"
  },
  orderInfo: {
    display: "flex",
    justifyContent: "center",
    height: "90%",
    gap: 10
  },
  orderBox: {
    display: 'flex',
    gap: 10,
    width: "100%"
  },
  orderboxScroll: {
width: "100%",
height: "50%",
gap: 10,
  },
  order: {
    backgroundColor: '#CE9760',
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    marginBottom: 10,
  },
  productImg: {
    width: "20%",
    height: "90%"
  },
  SpecialorderText: {
    color: "#CE9760",
    fontSize: 11,
    fontWeight: "600",
  },
  orderText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
},
  muOrder: {
    color: "white",
    fontWeight: "600",
    fontSize: 22
  },
  Order: {
    width: "90%",
    height: "70%",
    position: "absolute",
    top: "14%",
    gap: 15
  },
  bell: {
    color: "white",
    fontSize: 25
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700"
  },
  header: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "8%"
  },
  backButton :{
    color: "#CE9760",
    fontSize: 30,
  },
  tab: {
    backgroundColor: "#543A20",
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  tabBarIcon: {
    color: "black",
    fontSize: 25
  },  
  tabBarIcon1: {
    color: "white",
    fontSize: 25
  },
  tabBar: {
    width: "100%",
    height: "8%",
    backgroundColor: "#CE9760",
    position: "absolute",
    bottom: 0,
    justifyContent: 'space-around',
    alignItems :'center',
    display: "flex",
    flexDirection: 'row'
  },
 body: {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#543A20",
  color: "white",
 },

});
