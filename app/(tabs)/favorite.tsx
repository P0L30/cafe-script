"use client";
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

export default function Favorite() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const cafeProductList = [
    { id: 1, attributes: { name: 'Coffee' } },
    { id: 2, attributes: { name: 'Tea' } },
    { id: 3, attributes: { name: 'Pastries' } },
    { id: 4, attributes: { name: 'Sandwiches' } },
    { id: 5, attributes: { name: 'Ice Coffee' } },
    { id: 6, attributes: { name: 'Ice Tea' } },
    { id: 7, attributes: { name: 'Cake' } },
    { id: 8, attributes: { name: 'Lunch' } },
  ];
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
        <Text style={styles.speech}>Favorite</Text>
        <Link href="./notification">
        <Icon name="bell" style={styles.headerIcon}/>
        </Link>
      </View>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Search For Your Favorite Product" />
        <TouchableOpacity style={styles.Apply}><Icon name="search" style={styles.search}/></TouchableOpacity>
      </View>
      <View style={styles.productBox}>
      {cafeProductCardList.map((product) => (
        <View style={styles.productCard}>
        <Image
          source={require("@/assets/images/logo.png")} style={styles.productImg}
        />
        <View style={styles.productInfoBox}>
          <View style={styles.productNameAndPrice}>
            <Text style={styles.productName}>{product.attributes.name}</Text>
            <Text style={styles.productPrice}>${product.attributes.price}</Text>
          </View>
          <Text>Lorem ipsum dolor sit amet cons </Text>
        </View>
        </View>
              ))}
      </View>
      <View style={styles.tabBar}>
      <TouchableOpacity>
          <Link href="./home">
            <Icon name="home" style={styles.tabBarIcon}/>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./order">
            <Icon name="shopping-cart" style={styles.tabBarIcon}/>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Link href="/favorite">
            <Icon name="heart" style={styles.tabBarIcon1}/>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./profile">
            <Icon name="user" style={styles.tabBarIcon}/>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    color: "black",
    fontSize: 25
  },
  tabBarIcon1: {
    color: "white",
    fontSize: 25
  },
  search: {
  color: "#543A20",
  fontSize: 25
  },
inputBox: {
  width: "100%",
  height: "6%",
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  top: "11%",
  paddingHorizontal: "5%"
},
Apply: {
  backgroundColor: "#CE9760",
  width: "20%",
  height: "100%",
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
input: {
  color: "#543A20",
  width: "80%",
  height: "100%",
  borderColor: "#CE9760",
  borderWidth: 1,
  padding: 10,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  backgroundColor: "white"
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
  productInfoBox: {
    width: "90%",
    height: "auto",
    gap: 15
  },
  productNameAndPrice: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  productPrice: {
    color: "#39260B",
    fontWeight: "600",
    fontSize: 16,
  },
  productName: {
    fontWeight: "600",
    fontSize: 18,
    color: "white"
  },
  productImg: {
    width: 85,
    height: 79,
  },
  productBox: {
    width: "90%",
    height: "50%",
    position: "absolute",
    top: "20%",
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: "#CE9760",
    width: "48%",
    height: "45%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "3%",
    borderRadius: 7,
    marginBottom: "5%",
  },
  headerIcon: {
    color: "white",
    fontSize: 30,
  },
  speech: {
    fontWeight: "700",
    fontSize: 30,
    color: "white"
  },
  header: {
width: "90%",
height: "auto",
position: "absolute",
top: "5%",
display: "flex",
flexDirection: "row",
justifyContent: "space-between",
gap: 15,
alignItems: "center",
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
