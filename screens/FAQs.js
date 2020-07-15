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
import { Appbar } from 'react-native-paper';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class FAQs extends Component {

  render() {
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: "#439024", justifyContent: 'center' }}>
          <Appbar.BackAction
            onPress={() => {
              NavigationService.navigate("profileScreen");
            }}
          />
          <Appbar.Content title="FAQs" />
        </Appbar.Header>

        <ScrollView>
          <View style={styles.Body}>

            <View style={styles.BodyContent}>
              <Text style={{ fontSize: 18, color: '#010401' }}>1. GoSport là gì?</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10, marginBottom: 5 }}>. Là một ứng dụng cho phép bạn đặt sân thể thao</Text>
            </View>

            <View style={styles.BodyContent}>
              <Text style={{ fontSize: 18, color: '#010401' }}>2. Có cần những gì đặc biệt để sử dụng GoSport không?</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10 }}>. Bạn chỉ cần cài đặt App GoSport</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10, marginBottom: 5 }}>. Bạn cần đăng kí một tài khoản để sử dụng</Text>
            </View>

            <View style={styles.BodyContent}>
              <Text style={{ fontSize: 18, color: '#010401' }}>3. Tôi phải làm gì khi mất tài khoản?</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10 }}>. Bạn cần phải lập tức liên hệ với chúng tôi để khóa tài khoản đó</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10 }}>. Hotline: 0396258901</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10, marginBottom: 5 }}>. Email: Kronos2556@gmail.com</Text>
            </View>

            <View style={styles.BodyContent}>
              <Text style={{ fontSize: 18, color: '#010401' }}>4. GoSport có những ưu đãi gì?</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10 }}>. Có các khuyên mãi trong các khung giờ nhất định ( giảm tiền đặt sân,...)</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10, marginBottom: 5 }}>. GoSport sẽ tổ chức nhiều sự kiện dễ chơi dễ trúng như tặng vouncher giảm giá, các phần quà kèm theo</Text>
            </View>


            <View style={styles.BodyContent}>
              <Text style={{ fontSize: 18, color: '#010401' }}>5. GoSport có nhận tiền hoa hồng không?</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10, marginBottom: 5 }}>. Tất nhiên, Chúng tôi có nhận tiền hoa hồng, tối đa sẽ khoảng 15%</Text>
            </View>

            <View style={styles.BodyContent}>
              <Text style={{ fontSize: 18, color: '#010401' }}>6. Các bạn có thể nhận tư vấn qua:</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10 }}>. Hotline: 0396258901</Text>
              <Text style={{ fontSize: 15, color: '#010401', marginTop: 10, marginBottom: 5 }}>. Email: Kronos2556@gmail.com</Text>
            </View>

          </View>
        </ScrollView>
      </View >
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
    height: 850,
  },

  BodyContent: {
    marginTop: 15,
    marginLeft: 9,
    width: "100%",
    borderBottomWidth: 1,
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
