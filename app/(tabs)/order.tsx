"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import { useCallback, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import FontAwesome5 from "@expo/vector-icons/Ionicons";
import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const STRINGS_ARRAY = [
  "Robusta",
  "Liberica",
  "Cirtus",
  "Robusta",
  "Liberica",
  "Cirtus",
];

const MAPPED_STRINGS = STRINGS_ARRAY.map((str, index) => ({ str, index }));

const WIDTH_CARD = Dimensions.get("window").width * 0.85;
const ITEM_HEIGHT = 70;
const WIDTH_SCREEN = Dimensions.get("window").width;

const SHADOW = {
  shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
};

interface IMappedStrings {
  str: string;
  index: number;
}

const SwipeApp = () => {
  const [exampleArray, setExampleArray] =
    useState<IMappedStrings[]>(MAPPED_STRINGS);

  const handleRemoveCard = useCallback((title: IMappedStrings) => {
    setExampleArray((prev) => {
      console.log({ prev, title });
      return prev.filter((item) => item.index !== title.index);
    });
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.containerHeaderText]}>
        <Link href="./home">
          <Icon name="chevron-left" style={styles.arrow} />
        </Link>
        <Text style={styles.headerText}>Cart</Text>
        <Link href="./notification">
          <Icon name="bell" style={styles.notification} />
        </Link>
      </View>
      <View style={styles.middleTextBox}>
        <Text style={styles.myOrder}>My Order</Text>
        <Text style={styles.text}>
          You have {exampleArray?.length} in your cart
        </Text>
      </View>
      <View style={styles.viewContainer}>
        <ScrollView style={styles.viewContainer1}>
          {exampleArray.map((title) => (
            <FieldSwipe
              key={title.index}
              title={title}
              onRemove={handleRemoveCard}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.discountandprice}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Coupan Code here"
          />
          <TouchableOpacity style={styles.Apply}>
            <Text style={styles.color}>Apply</Text>
          </TouchableOpacity>
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
      <TouchableOpacity style={styles.button2}>
        <Link href="./checkout" style={styles.button1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Finalize Order</Text>
          </View>
        </Link>
      </TouchableOpacity>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Link href="./home" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="home" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Link href="/order" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="shopping-cart" style={styles.tabBarIcon1} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./favorite" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="heart" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./profile" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="user" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default SwipeApp;

interface IFieldSwipe {
  title: IMappedStrings;
  onRemove: (title: IMappedStrings) => void;
}

const FieldSwipe: React.FC<IFieldSwipe> = ({ title, onRemove }) => {
  const swipeTranslateX = useSharedValue(0);
  const pressed = useSharedValue(false);
  const itemHeight = useSharedValue(ITEM_HEIGHT);
  const marginVertical = useSharedValue(20);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      if (event.translationX < 0) {
        swipeTranslateX.value = event.translationX;
      }
    })
    .onFinalize(() => {
      const isShouldDismiss = swipeTranslateX.value < -WIDTH_SCREEN * 0.3;
      if (isShouldDismiss) {
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        swipeTranslateX.value = withTiming(
          -WIDTH_SCREEN,
          undefined,
          (isDone) => {
            if (isDone) {
              runOnJS(onRemove)(title);
            }
          }
        );
      } else {
        swipeTranslateX.value = withSpring(0);
      }
      pressed.value = false;
    });

  const transformStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: swipeTranslateX.value },
      { scale: withTiming(pressed.value ? 1.15 : 1) },
    ],
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: swipeTranslateX.value < -WIDTH_SCREEN * 0.7 ? 0 : 1,
  }));

  const itemHeightStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
    marginVertical: marginVertical.value,
  }));
  const cld = new Cloudinary({ cloud: { cloudName: "dsfypbtbn" } });
  const product = cld
    .image("latte")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={itemHeightStyle}>
        <Animated.View style={[styles.iconContainer, opacityStyle]}>
          <FontAwesome5 name="trash" size={25} color="white" />
        </Animated.View>
        <Animated.View style={[styles.fieldContainer, transformStyle]}>
          <AdvancedImage cldImg={product} style={styles.itemIMG} />
          <View style={styles.itemInfo}>
            <Text style={styles.text}>{title.str}</Text>
            <Text>With Milk</Text>
            <Text>$20</Text>
          </View>
          <View style={styles.amountBox}>
            <View style={styles.addTakeOutBox}>
              <Text style={styles.color}>+</Text>
            </View>
            <Text style={styles.text1}>1</Text>
            <View style={styles.addTakeOutBox}>
              <Text style={styles.color}>-</Text>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

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
    position: "absolute",
    bottom: "13%",
  },
  typeBox: {
    gap: 10,
  },
  priceBox: {
    gap: 10,
  },
  priceAndTypeBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  inputBox: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Apply: {
    backgroundColor: "#543A20",
    width: "30%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#543A20",
    width: "70%",
    height: "100%",
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
    bottom: "20%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
    gap: 40,
  },
  tab: {
    backgroundColor: "#543A20",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  tab1: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    color: "black",
    fontSize: 25,
  },
  tabBarIcon1: {
    color: "white",
    fontSize: 25,
  },
  tabBar: {
    width: "100%",
    height: "8%",
    backgroundColor: "#CE9760",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  text1: {
    color: "white",
    fontSize: 16,
  },
  color: {
    color: "white",
    fontSize: 20,
  },
  addTakeOutBox: {
    backgroundColor: "#543A20",
    width: 25,
    height: 25,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4,
  },
  itemInfo: {
    marginRight: "20%",
  },
  itemIMG: {
    width: "25%",
    height: "80%",
  },
  middleTextBox: {
    width: "90%",
    paddingTop: "10%",
  },
  myOrder: {
    fontWeight: "600",
    fontSize: 22,
    color: "white",
  },
  notification: {
    color: "white",
    fontSize: 20,
  },
  arrow: {
    color: "#CE9760",
    fontSize: 20,
  },
  container: {
    backgroundColor: "#543A20",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: "14%",
  },
  text: {
    fontSize: 13,
    color: "white",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  containerHeaderText: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fieldContainer: {
    backgroundColor: "#CE9760",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: "140%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  iconContainer: {
    position: "absolute",
    height: ITEM_HEIGHT,
    right: "10%",
    justifyContent: "center",
  },
  viewContainer: {
    width: "100%",
    paddingLeft: "5%",
    height: "39%",
  },
  viewContainer1: {
    width: "100%",
  },
  amountBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "27%",
    alignItems: "center",
  },
});
