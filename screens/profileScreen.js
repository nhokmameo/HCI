import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavigationService from "../service/navigation";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Fab } from "native-base";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.profile}>
          {/* Header */}
          <View style={styles.header}>
            <View
              style={{
                height: 50,
                marginTop: 20,
                width: "100%",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 20, marginLeft: 25, marginTop: 20 }}>
                Thông tin cá nhân
              </Text>
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate("profileDetail");
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 25,
                    marginLeft: 160,
                  }}
                  source={require("../assets/images/editIcon.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={{ height: 170, width: "100%", flexDirection: "row" }}>
              {/* Avatar iCon */}
              <View
                style={{
                  height: "85%",
                  width: "35%",
                  borderRadius: 20,
                  borderWidth: 1,
                  alignItems: "center",
                  alignContent: "center",
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <Image
                  style={{ width: 100, height: 130, marginTop: 5 }}
                  source={require("../assets/images/avatarIcon.png")}
                />
              </View>

              {/* Information */}
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  flexDirection: "column",
                }}
              >
                <Text style={{ fontSize: 25 }}>Danh Nguyen</Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/images/PhoneICON.png")}
                  />
                  <Text> +84 999 899 888 99</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/images/mailIcon.png")}
                  />
                  <Text> god@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Body */}

          <View style={styles.Body}>
            {/* Sport like */}
            <TouchableOpacity>
              <View style={styles.BodyContent}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 20,
                    marginTop: 25,
                  }}
                  source={require("../assets/images/heartIcon.png")}
                />
                <View
                  style={{
                    width: "70%",
                    flexDirection: "column",
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 20 }}>
                    Môn thể thao bạn thích
                  </Text>
                  <Text
                    style={{ fontSize: 12, marginLeft: 10, color: "#BDBBB9" }}
                  >
                    Bóng đá, cầu lông, bơi lội
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Yard like */}
            <TouchableOpacity>
              <View style={styles.BodyContent}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                  source={require("../assets/images/yardIcon.png")}
                />
                <View
                  style={{
                    width: "70%",
                    flexDirection: "column",
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 20 }}>
                    Sân yêu thích
                  </Text>
                  <Text
                    style={{ fontSize: 12, marginLeft: 10, color: "#BDBBB9" }}
                  >
                    Sân Viettel
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Rule */}
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate("FAQs");
              }}
            >
              <View style={styles.BodyContent}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 10,
                    marginTop: 20,
                  }}
                  source={require("../assets/images/questionIcon.png")}
                />
                <View style={{ width: "70%", flexDirection: "column" }}>
                  <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 25 }}>
                    FAQs
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* History */}
            <TouchableOpacity>
              <View style={styles.BodyContent}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                    marginTop: 30,
                  }}
                  source={require("../assets/images/historyIcon.png")}
                />
                <View style={{ width: "70%", flexDirection: "column" }}>
                  <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30 }}>
                    Lịch sử
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Log out */}
            <TouchableOpacity>
              <View style={styles.BodyContent}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 20,
                    marginTop: 30,
                  }}
                  source={require("../assets/images/logoutIcon.png")}
                />
                <View style={{ width: "70%", flexDirection: "column" }}>
                  <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30 }}>
                    Log out
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Bottom */}
          <View style={styles.Bottom}>
            <TouchableOpacity>
              <View>
                <Icon
                  style={[
                    { width: 30, height: 30, marginTop: 16, color: "#81857F" },
                  ]}
                  size={35}
                  name={"ios-home"}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate("profileScreen");
              }}
            >
              <View>
                <Icon
                  style={[
                    { width: 30, height: 30, marginTop: 16, color: "#81857F" },
                  ]}
                  size={35}
                  name={"ios-person"}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "column",
  },

  header: {
    flexDirection: "column",
    width: "100%",
  },

  Body: {
    width: "100%",
    flexDirection: "column",
    marginTop: 5,
    backgroundColor: "#F1EEEB",
    height: 500,
  },

  BodyContent: {
    marginTop: 10,
    justifyContent: "center",
    width: "100%",
    height: 80,
    flexDirection: "row",
    backgroundColor: "white",
  },

  Bottom: {
    flexDirection: "row",
    bottom: 0,
    borderTopWidth: 0.9,
    width: "100%",
    height: 20,
    borderColor: "grey",
    position: "absolute",
    backgroundColor: "white",
    justifyContent: "space-around",
  },
});
