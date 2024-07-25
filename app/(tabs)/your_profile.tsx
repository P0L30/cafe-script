"use client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
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
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Link href="./profile">
          <Icon name="chevron-left" style={styles.backButton} />
        </Link>
        <Text style={styles.speech}>Your Profile</Text>
        <Link href="./notification">
          <Icon name="bell" style={styles.headerIcon} />
        </Link>
      </View>
      <View style={styles.profileBox}>
        <Image
          source={require("@/assets/images/starter.png")}
          style={styles.profile}
        />
        <Text style={styles.username}>Bat-Od .E</Text>
        <TouchableOpacity style={styles.editBox}>
          <Icon name="pencil" style={styles.edit} />
        </TouchableOpacity>
      </View>
      <View style={styles.basicInfoBox}>
        <Text style={styles.basicInfo}>Basic info</Text>
        <View style={styles.InfoBox}>
          <Text style={styles.infoName}>Name</Text>
          <TextInput
            placeholder="Bat-Od Enkhbat"
            style={styles.input}
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.InfoBox}>
          <Text style={styles.infoName}>Birthday</Text>
          <TextInput
            placeholder="August 25, 2008"
            style={styles.input}
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.InfoBox}>
          <Text style={styles.infoName}>Gender</Text>
          <TextInput
            placeholder="Male"
            style={styles.input}
            placeholderTextColor={"white"}
          />
        </View>
      </View>
      <View style={styles.contactInfoBox}>
        <Text style={styles.basicInfo}>Contact info</Text>
        <View style={styles.InfoBox}>
          <Text style={styles.infoName}>Email</Text>
          <TextInput
            placeholder="Batod825@gmail.com"
            style={styles.input}
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.InfoBox}>
          <Text style={styles.infoName}>Phone</Text>
          <TextInput
            placeholder="88592905"
            style={styles.input}
            placeholderTextColor={"white"}
          />
        </View>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Link href="./home" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="home" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./order" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="shopping-cart" style={styles.tabBarIcon} />
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
        <TouchableOpacity style={styles.tab}>
          <Link href="/profile" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="user" style={styles.tabBarIcon1} />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactInfoBox: {
    width: "90%",
    height: "20%",
    gap: 40,
    position: "absolute",
    bottom: "20%",
  },
  input: {
    width: "80%",
    height: "200%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    padding: 3,
    paddingHorizontal: 10,
  },
  infoName: {
    color: "white",
    fontSize: 15,
  },
  InfoBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  basicInfoBox: {
    width: "90%",
    height: "20%",
    gap: 40,
    position: "absolute",
    top: "30%",
  },
  basicInfo: {
    color: "white",
    fontSize: 25,
  },
  tab1: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  bt: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  listItem1: {
    width: "90%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "20%",
  },
  BoxName: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  smallbox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  listItem: {
    width: "90%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  listBox: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "35%",
    gap: 10,
  },
  iconboxList: {
    backgroundColor: "#CE9760",
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  editBox: {
    backgroundColor: "#CE9760",
    borderRadius: 40,
    width: 23,
    height: 23,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    position: "absolute",
    top: "55%",
    right: "39%",
  },
  edit: {
    color: "white",
    fontSize: 15,
  },
  profileBox: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10%",
    gap: 10,
  },
  backButton: {
    color: "#CE9760",
    fontSize: 30,
  },
  tab: {
    backgroundColor: "#543A20",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
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
  headerIcon: {
    color: "white",
    fontSize: 30,
  },
  speech: {
    fontWeight: "700",
    fontSize: 25,
    color: "white",
  },
  username: {
    color: "white",
    fontWeight: "600",
    fontSize: 22,
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
  profile: {
    width: 110,
    height: 110,
    borderRadius: 50,
  },
});
