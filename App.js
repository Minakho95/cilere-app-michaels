import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  // CUSTOM FONTS
  let [fontsLoaded] = useFonts({
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    rominamedium: require("./assets/fonts/rominamedium.ttf"),
    "FarnhamDisplay-RegItalSwashAlt": require("./assets/fonts/FarnhamDisplay-RegItalSwashAlt.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>MY PRIVI</Text>
        </View>
        <View style={styles.section}>
          {/* ICONS */}
          <View style={styles.icons}>
            <View style={styles.otherIcons}>
              <AntDesign name="hearto" size={22} />
              <View style={styles.redIcon}>
                <Ionicons name="ios-ellipse" size={10} color={"red"} />
              </View>
            </View>
            <View>
              <EvilIcons name="refresh" size={37} />
            </View>
            <View style={styles.otherIcons}>
              <AntDesign name="setting" size={22} style={styles.otherIcon} />
            </View>
          </View>
          {/* CONTENT */}
          <View style={styles.sectionContent}>
            <View
              style={{
                width: "100%",
                textAlign: "center",
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "rominamedium",
                  textAlign: "center",
                }}
              >
                FIONA ZHANG
              </Text>
              <View style={styles.priviCoin}>
                <Image
                  source={require("./assets/picture.png")}
                  style={styles.picture}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.textArea,
                    {
                      color: "#EA9D73",
                      fontSize: 20,
                      fontFamily: "FarnhamDisplay-RegItalSwashAlt",
                      textAlign: "center",
                    },
                  ]}
                >
                  2000 PriviCoins earned
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", borderBottomWidth: 1 }}>
              <View style={styles.textArea}>
                <Text style={{ fontFamily: "FarnhamDisplay-RegItalSwashAlt" }}>
                  Any questions or concerns ? Contact us
                </Text>
                <Text style={{ fontFamily: "Lato-Light" }}>
                  WeChat customer service xxxxx
                </Text>
                <Text style={{ fontFamily: "Lato-Light" }}>
                  Working hours: daily 10:00am - 6:00pm (Paris time)
                </Text>
                <Text style={{ fontFamily: "Lato-Light" }}>
                  Monday to Friday
                </Text>
              </View>
              <View style={styles.textArea}>
                <Text style={{ fontFamily: "FarnhamDisplay-RegItalSwashAlt" }}>
                  WorldWide safe delivery
                </Text>
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={[{ color: "#fff" }]}>SPECIAL REQUEST</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.textArea}>
                <Text
                  style={[
                    {
                      width: 260,
                      textAlign: "center",
                      fontFamily: "Lato-Light",
                    },
                  ]}
                >
                  More information about ou service fees & our membership
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontFamily: "Lato-Light",
  },
  section: {
    height: "90%",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  priviCoin: {
    flexDirection: "row",
    alignSelf: "center",
  },
  picture: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  icons: {
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  otherIcons: {
    marginTop: 3,
  },
  redIcon: {
    alignSelf: "center",
    bottom: 10,
  },
  sectionContent: {
    alignItems: "center",
  },
  textArea: {
    padding: 10,
    alignItems: "center",
  },
  buttonStyle: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
    backgroundColor: "#080875",
    fontFamily: "Lato-Light",
  },
});
