import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { FontAwesome, EvilIcons, AntDesign } from "@expo/vector-icons";
const hp = Dimensions.get("screen").height;
const wp = Dimensions.get("screen").width;
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

const { width } = Dimensions.get("window");

class FlatlistItem extends Component {
  state = {
    distance: "",
    time_travel: "",
  };

  componentDidMount() {
    fetch(
      "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:ChIJsQdrFzEndTERXq6bN0uyUrc&destinations=place_id:" +
        this.props.item.place_id +
        "&key=AIzaSyDn2ruHQmquB33aoQK3d0QLsGsN6bLLm1c"
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.rows[0].elements[0].distance.text)
        this.setState({
          distance: json.rows[0].elements[0].distance.text,
          time_travel: json.rows[0].elements[0].duration.text,
        });
      })
      .catch((error) => console.error(error));
    // console.log("index",this.props.item.place_id)
  }

  render() {
    return (
      <View style={styles.listing}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("BookingYard");
          }}
        >
          <View>
            <SharedElement id={"item." + this.props.item.place_id + ".photo"}>
              <Image
                style={[styles.image]}
                resizeMode="cover"
                source={require("../assets/images/stadium.jpg")}
              />
            </SharedElement>
            <View style={styles.details}>
              <View style={styles.rating}>
                <FontAwesome name="motorcycle" color="black" />
                <Text style={styles.ratingLabel}>
                  {`${this.state.time_travel} - ${this.state.distance}`}
                </Text>
              </View>
              <View style={styles.rating}>
                <FontAwesome name="star" color="rgb(255, 56, 92)" />
                <Text style={styles.ratingLabel}>
                  {`${this.props.item.rating} (${this.props.item.user_ratings_total})`}
                </Text>
              </View>
            </View>
            <Text style={styles.title}>{this.props.item.name}</Text>
            <Text style={styles.title_address}>{this.props.item.vicinity}</Text>
            <View
              style={{
                flexDirection: "row",
                paddingTop: hp * 0.001,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={[styles.price, { marginTop: hp * 0.0055 }]}>
                Sân: 65.000đ/h
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title_tag}>-15% </Text>
                <FontAwesome
                  name="tag"
                  size={15}
                  color="red"
                  style={{ marginTop: hp * 0.002 }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class Home extends Component {
  state = {
    search: "",
    isLoading: true,
    currentTab1: true,
    currentTab2: false,
    currentTab3: false,
    currentTab4: false,
    currentTab5: false,
    currentTab: null,
    list_url: [
      "sân+bóng+mini",
      "sân+tennis",
      "sân+cầu+lông",
      "hồ+bơi",
      "sân+bóng+chuyền",
    ],
    tab1: [],
    tab2: [],
    tab3: [],
    tab4: [],
    tab5: [],
  };

  async componentDidMount() {
    for (var i = 0; i < this.state.list_url.length; i++) {
      await fetch(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=10.844938,106.810092&opennow=true&rankby=distance&type=stadium,point_of_interest,establishment&keyword=" +
          this.state.list_url[i] +
          "&key=AIzaSyDn2ruHQmquB33aoQK3d0QLsGsN6bLLm1c&language=vi"
      )
        .then((response) => response.json())
        .then((json) => {
          switch (i) {
            case 0: {
              this.setState({ tab1: json.results });
              break;
            }
            case 1: {
              this.setState({ tab2: json.results });
              break;
            }
            case 2: {
              this.setState({ tab3: json.results });
              break;
            }
            case 3: {
              this.setState({ tab4: json.results });
              break;
            }
            case 4: {
              this.setState({ tab5: json.results });
              break;
            }
            default: {
              console.log("tab", i);
              break;
            }
          }
        })
        .catch((error) => console.error(error));
      await this.setState({
        currentTab: this.state.tab1,
        isLoading: false,
      });
    }
    // await console.log('tab1:', this.state.tab1)
    // console.log('tab4:', this.state.tab5)
  }

  handelCategorySelected = (val) => {
    switch (val) {
      case "1": {
        this.setState({
          currentTab1: true,
          currentTab2: false,
          currentTab3: false,
          currentTab4: false,
          currentTab5: false,
          currentTab: this.state.tab1,
        });
        break;
      }
      case "2": {
        this.setState({
          currentTab2: true,
          currentTab1: false,
          currentTab3: false,
          currentTab4: false,
          currentTab5: false,
          currentTab: this.state.tab2,
        });
        break;
      }
      case "3": {
        this.setState({
          currentTab3: true,
          currentTab1: false,
          currentTab2: false,
          currentTab4: false,
          currentTab5: false,
          currentTab: this.state.tab3,
        });
        break;
      }
      case "4": {
        this.setState({
          currentTab4: true,
          currentTab1: false,
          currentTab2: false,
          currentTab3: false,
          currentTab5: false,
          currentTab: this.state.tab4,
        });
        break;
      }
      case "5": {
        this.setState({
          currentTab5: true,
          currentTab1: false,
          currentTab2: false,
          currentTab3: false,
          currentTab4: false,
          currentTab: this.state.tab5,
        });
        break;
      }
      default: {
        console.log("val", val);
      }
    }
  };

  updateSearch = (search) => {
    this.setState({
      search: search,
    });
  };

  render() {
    const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <ActivityIndicator size="large" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <View
          style={[
            styles.header,
            { paddingTop: Platform.OS === "ios" ? hp * 0.04 : null },
          ]}
        >
          <View style={styles.header_user}>
            <Text style={styles.textHeader}>Hi Admin!</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("Search");
                }}
              >
                <AntDesign
                  name="search1"
                  size={hp * 0.03}
                  color="white"
                  style={{ marginRight: hp * 0.01 }}
                />
              </TouchableHighlight>
              <FontAwesome name="bell-o" size={hp * 0.03} color="white" />
            </View>
          </View>

        </View>
        <View style={styles.footer}>
          <View style={styles.categorical}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity
                onPress={() => {
                  this.handelCategorySelected("1");
                }}
              >
                <View
                  style={[
                    styles.categoricalButton,
                    {
                      backgroundColor: this.state.currentTab1
                        ? "green"
                        : "white",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoricalText,
                      { color: this.state.currentTab1 ? "white" : "black" },
                    ]}
                  >
                    Bòng Đá
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handelCategorySelected("2");
                }}
              >
                <View
                  style={[
                    styles.categoricalButton,
                    {
                      backgroundColor: this.state.currentTab2
                        ? "green"
                        : "white",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoricalText,
                      { color: this.state.currentTab2 ? "white" : "black" },
                    ]}
                  >
                    Tennis
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handelCategorySelected("3");
                }}
              >
                <View
                  style={[
                    styles.categoricalButton,
                    {
                      backgroundColor: this.state.currentTab3
                        ? "green"
                        : "white",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoricalText,
                      { color: this.state.currentTab3 ? "white" : "black" },
                    ]}
                  >
                    Cầu Lông
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handelCategorySelected("4");
                }}
              >
                <View
                  style={[
                    styles.categoricalButton,
                    {
                      backgroundColor: this.state.currentTab4
                        ? "green"
                        : "white",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoricalText,
                      { color: this.state.currentTab4 ? "white" : "black" },
                    ]}
                  >
                    Bơi Lội
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handelCategorySelected("5");
                }}
              >
                <View
                  style={[
                    styles.categoricalButton,
                    {
                      backgroundColor: this.state.currentTab5
                        ? "green"
                        : "white",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoricalText,
                      { color: this.state.currentTab5 ? "white" : "black" },
                    ]}
                  >
                    B.Chuyền
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.location}>
            <EvilIcons name="location" size={24} color="#ff6969" />
            <Text style={{ fontSize: 18, color: "#ff6969" }}>Quận 9</Text>
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <FlatList
              data={this.state.currentTab}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <FlatlistItem
                    item={item}
                    index={index}
                    navigation={navigation}
                  ></FlatlistItem>
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <Home {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5
  },
  header_user: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: wp * 0.9,
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    marginLeft: wp * 0.04,
    marginTop: hp * 0.01,
    marginBottom: hp * 0.01,
    alignItems: "center",
  },
  footer: {
    flex: 12,
    flexDirection: "column",
  },
  categorical: {
    height: hp * 0.06,
    width: "100%",
  },
  textHeader: {
    fontSize: hp * 0.03,
    color: "white",
    fontWeight: "400",
  },
  categoricalText: {
    fontSize: hp * 0.02,
    margin: 5,
  },
  categoricalButton: {
    width: wp * 0.25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 30,
    marginTop: hp * 0.014,
    marginLeft: 5,
    marginRight: 5,
  },
  listing: {
    marginBottom: 16,
    width: width - 32,
  },
  image: {
    height: hp * 0.35,
    width: width - 32,
    marginVertical: 8,
  },
  title: {
    fontFamily: "CerealMedium",
    fontSize: 20,
  },
  price: {
    fontFamily: "CerealMedium",
    fontSize: 16,
    color: "red",
  },
  title_address: {
    fontFamily: "CerealMedium",
    fontSize: 15,
  },
  title_tag: {
    fontFamily: "CerealMedium",
    fontSize: 15,
    color: "red",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: {
    fontFamily: "CerealBook",
    marginLeft: 4,
  },
  superhost: {
    borderColor: "black",
    borderRadius: 30,
    borderWidth: 1,
    padding: 4,
  },
  superhostLabel: {
    fontSize: 10,
    fontFamily: "CerealMedium",
  },
});
