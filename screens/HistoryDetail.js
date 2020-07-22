import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Rating } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import bill from "../model/bill.json";
import category from "../model/category.json";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function (props) {
  const navigation = useNavigation();
  const route = useRoute();
  return <HistoryDetail {...props} navigation={navigation} route={route} />;
}

class HistoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderid: this.props.route.params.orderId,
      feedback: false,
      image_url: "",
      keyword: "",
    };
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  async componentDidMount() {
    // this.focusListener = this.props.navigation.addListener(
    //     'didFocus',
    //     async () => {
    // await this.setState({
    //   orderid: this.props.route.params.orderId,
    // });
    // if (bill[this.state.orderid].status === "COMPLETED") {
    //   bill[this.state.orderid].isFeedback
    //     ? null
    //     : this.setState({ feedback: true });
    // }
    switch (bill[this.state.orderid].category) {
      case 1: {
        this.setState({
          image_url: require("../assets/images/football.png"),
        });
        break;
      }
      case 2: {
        this.setState({
          image_url: require("../assets/images/tennis.png"),
        });
        break;
      }
      case 3: {
        this.setState({
          image_url: require("../assets/images/badminton.png"),
        });
        break;
      }
      case 4: {
        this.setState({
          image_url: require("../assets/images/swimming.png"),
        });
        break;
      }
      case 5: {
        this.setState({
          image_url: require("../assets/images/volleyball.png"),
        });
        break;
      }
      default: {
        console.log(bill[this.state.orderid].category);
      }
    }
  }

  render() {
    const { navigation } = this.props;
    // const imageURL = this.state.image_url
    // console.log(imageURL)
    if (
      bill[this.state.orderid].isFeedback &&
      bill[this.state.orderid].status === "COMPLETED"
    ) {
      return (
        // <Text>{bill.stadium}</Text>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.bgHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.profile}>
                <FontAwesome5 name="arrow-left" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerStyle}>History orders</Text>
          </View>
          <View style={styles.itemHandle}>
            <Image source={this.state.image_url} style={styles.image} />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={styles.title}>
                {bill[this.state.orderid].stadium}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.subtitle}>
                  {bill[this.state.orderid].date} -
                </Text>
                <Text style={styles.subtitle}>
                  {bill[this.state.orderid].start_time} -
                </Text>
                <Text style={[styles.subtitle, { color: "green" }]}>
                  {bill[this.state.orderid].status}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.itemHandleDetail}>
            <Rating
              imageSize={55}
              readonly
              startingValue={bill[this.state.orderid].rate}
              style={styles.rating}
            />
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Địa chỉ</Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].stadium_addr}
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Người đặt</Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].player}
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Mã Đặt Sân</Text>
              <Text style={styles.text}>: {bill[this.state.orderid].id}</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Thời điểm đặt sân</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "70%",
                  padding: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                  }}
                >
                  : {bill[this.state.orderid].start_time} -
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                  }}
                >
                  {bill[this.state.orderid].date}
                </Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Số sân đặt: </Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].court_num}
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Thời gian sử dụng</Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].time_play} phút
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={[styles.textHeader, { color: "red" }]}>
                Tổng tiền:{" "}
              </Text>
              <Text style={[styles.text, { color: "red" }]}>
                : {bill[this.state.orderid].price}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.bgHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.profile}>
                <FontAwesome5 name="arrow-left" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerStyle}>History orders</Text>
          </View>
          <ScrollView>
          <View style={styles.itemHandle}>
            <Image source={this.state.image_url} style={styles.image} />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={styles.title}>
                {bill[this.state.orderid].stadium}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.subtitle}>
                  {bill[this.state.orderid].date} -
                </Text>
                <Text style={styles.subtitle}>
                  {bill[this.state.orderid].start_time} -
                </Text>
                <Text style={[styles.subtitle, { color: "green" }]}>
                  {bill[this.state.orderid].status}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.itemHandleDetail}>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Địa chỉ</Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].stadium_addr}
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Người đặt</Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].player}
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Mã Đặt Sân</Text>
              <Text style={styles.text}>: {bill[this.state.orderid].id}</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Thời điểm đặt sân</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "70%",
                  padding: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                  }}
                >
                  : {bill[this.state.orderid].start_time} -
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                  }}
                >
                  {bill[this.state.orderid].date}
                </Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Số sân đặt: </Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].court_num}
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textHeader}>Thời gian sử dụng</Text>
              <Text style={styles.text}>
                : {bill[this.state.orderid].time_play} phút
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={[styles.textHeader, { color: "red" }]}>
                Tổng tiền:{" "}
              </Text>
              <Text style={[styles.text, { color: "red" }]}>
                : {bill[this.state.orderid].price}
              </Text>
            </View>
            <Rating
              showRating
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <View
              style={{
                borderWidth: 1,
                height: 100,
                borderRadius: 16,
                padding: 10,
                width: "98%",
              }}
            >
              <TextInput
                ref="input"
                placeholder="Write your feedback"
                clearButtonMode="always"
                value={this.state.keyword}
                onChangeText={(value) => this.setState({ keyword: value })}
                style={styles.input}
              />
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 16,
                  width: "40%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "green",
                }}
              >
                <Text style={{ fontSize: 20, color: "#fff" }}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edebe9",
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: 20,
  },
  image: {
    width: 52,
    height: 52,
    margin: 15,
  },
  item: {
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  itemHandle: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",

    marginBottom: 0.5,
    marginTop: 0.5,
    height: 112,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    padding: 10,
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    paddingLeft: 10,
    // fontWeight: '700',
    color: "#7a7876",
  },
  textRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: 3,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "700",
    padding: 6,
    width: "30%",
  },
  text: {
    width: "70%",
    fontSize: 20,
    padding: 6,
    // fontWeight: '700',
    color: "#000",
  },
  itemHandleDetail: {
    // flex: 1,
    width: "100%",
    // height: 500,
    flexDirection: "column",
    backgroundColor: "#fff",
    // marginLeft: 6,
    // marginRight: 6,
    marginBottom: 0.5,
    marginTop: 0.5,
    paddingLeft: 12,
    paddingTop: 7,
    paddingBottom: 7,
    // borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  rating: {
    marginBottom: 20,
    marginTop: 9,
  },
  bgHeader: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 10,
    height: "7.5%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    flexDirection: "row",
    position: "relative",
  },
  headerStyle: {
    fontSize: 25,
    textAlign: "center",
    marginLeft: "1%",
    color: "#000",
  },
  profile: {
    marginLeft: "7%",
    alignItems: "center",
  },
});
