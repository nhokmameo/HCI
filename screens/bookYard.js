import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

class BookYard extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <ScrollView style={styles.profile}>
          {/* Header */}
          <View style={styles.header}>
            {/* Avatar iCon */}
            <View style={{ width: "100%" }}>
              <ImageBackground
                style={{ width: "100%", height: 300 }}
                source={require("../assets/images/yardImage.jpg")}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: "3%",
                      marginTop: "3%",
                    }}
                    source={require("../assets/images/back2.png")}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    marginLeft: "5%",
                    marginBottom: 20,
                    marginTop: "40%",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 25 }}>
                    Sân Viettel
                  </Text>
                  <Text style={{ color: "white", fontSize: 15 }}>
                    158 Hoàng Hoa Thám, Phường 12
                  </Text>
                  <Text style={{ color: "white" }}>
                    Quận Tân Bình, Hồ Chí Minh
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          {/* Body */}

          <View style={styles.Body}>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 40,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontSize: 15 }}>4.0</Text>
              <FontAwesome
                name="star"
                color="#FEBC1B"
                size={23}
                style={{ marginHorizontal: 6 }}
              />
              <FontAwesome
                name="star"
                color="#FEBC1B"
                size={23}
                style={{ marginHorizontal: 6 }}
              />
              <FontAwesome
                name="star"
                color="#FEBC1B"
                size={23}
                style={{ marginHorizontal: 6 }}
              />
              <FontAwesome
                name="star"
                color="#FEBC1B"
                size={23}
                style={{ marginHorizontal: 6 }}
              />
              <FontAwesome
                name="star"
                color="#F1EEEB"
                size={23}
                style={{ marginHorizontal: 6 }}
              />
              <Text style={{ fontSize: 15, color: "#4F9E2B" }}>
                {" "}
                150 lượt đánh giá
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 40,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "#010401" }}>
                {" "}
                Điện thoại:{" "}
              </Text>
              <Text style={{ fontSize: 18, color: "#010401" }}>
                +84 776 884 985
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 40,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "#010401" }}> Giờ: </Text>
              <Text style={{ fontSize: 18, color: "#010401" }}>
                Mở 05:00 AM- Đóng 22:00 PM
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 40,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "#010401" }}>
                {" "}
                Ngày hoạt động:{" "}
              </Text>
              <Text style={{ fontSize: 18, color: "#010401" }}>
                Thứ 2- Chủ Nhật
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 40,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "#010401" }}> Giá sân: </Text>
              <Text style={{ fontSize: 18, color: "#C61818" }}>
                ₫ 65.000/ giờ
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 40,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#010401",
                  marginLeft: 30,
                  marginTop: 10,
                }}
              >
                {" "}
                Các giờ đông khách
              </Text>
            </View>

            <View>
              <Image
                style={{ width: "100%", height: 110, marginTop: 15 }}
                source={require("../assets/images/columnChart.png")}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookingScreen");
              }}
            >
              <View
                style={[
                  {
                    backgroundColor: "#4FBA34",
                    width: "65%",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "95%",
                    flexDirection: "row",
                    height: 60,
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 35,
                    marginLeft: 10,
                  },
                ]}
              >
                <Text style={{ color: "#fff", padding: 5, fontSize: 20 }}>
                  Đặt Sân
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <BookYard {...props} navigation={navigation} />;
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
    height: 530,
  },

  Bottom: {
    flexDirection: "row",
    bottom: 0,
    borderTopWidth: 0.9,
    width: "100%",
    height: 60,
    borderColor: "grey",
    position: "absolute",
    backgroundColor: "white",
    justifyContent: "space-around",
  },
});
