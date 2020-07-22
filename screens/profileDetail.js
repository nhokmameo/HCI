import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback, Animated, Alert
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from 'react-native-paper';



const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class ProfileDetail extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>

        <Appbar.Header style={{ backgroundColor: "white", justifyContent: 'center' }}>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content title="Chỉnh sửa trang cá nhân" />
          {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
        </Appbar.Header>

        <ScrollView style={styles.profile}>

          {/* Body */}

          <View style={styles.Body}>

            {/* Avatar*/}

            <View style={styles.BodyContent}>
              <View style={{ width: "100%", flexDirection: 'row', marginTop: "5%" }}>
                <Text style={{ fontSize: 18, marginLeft: "5%" }}>Ảnh đại diện</Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: "55%", color: 'blue' }}>Chỉnh sửa</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', height: 300, marginTop: "5%", alignItems: 'center' }}>
                <Image
                  style={{ width: 200, height: 200, borderRadius: 100 }}
                  source={require("../assets/images/avatarProfile.jpg")} />
              </View>
            </View>


            {/* Detail */}
            <View style={styles.BodyContent2}>
              <View style={{ width: "100%", flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row', marginTop: "5%" }}>
                  <Text style={{ fontSize: 25, marginLeft: "5%" }}>Chi tiết</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18, marginLeft: "58%", marginTop: "3%", color: 'blue' }}>Chỉnh sửa</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                  <Text style={{ fontSize: 18, marginLeft: 10 }}>Tên</Text>
                  <Text style={{ fontSize: 16, marginLeft: 70, color: '#807D79' }}>Danh Nguyen</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ fontSize: 18, marginLeft: 10 }}>Liên hệ</Text>
                  <Text style={{ fontSize: 16, marginLeft: 40, color: '#807D79' }}> 999 899 888 99</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ fontSize: 18, marginLeft: 10 }}>Email</Text>
                  <Text style={{ fontSize: 16, marginLeft: 55, color: '#807D79' }}>god@gmail.com</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ fontSize: 18, marginLeft: 10 }}>Mật khẩu</Text>
                  <Text style={{ fontSize: 16, marginLeft: 25, color: '#807D79' }}>******</Text>
                </View>


              </View>

            </View>


          </View>

        </ScrollView>


      </SafeAreaView>
    );
  };
}

export default function (props) {
  const navigation = useNavigation();
  return <ProfileDetail {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "column",
  },

  header: {
    flexDirection: "column",
    width: "95%",
    borderBottomWidth: 0.9,
    marginLeft: 10,
    height: 80,
    flex: 1,
  },

  Body: {
    width: "100%",
    flexDirection: "column",
    marginTop: 5,
    flex: 1,
  },

  BodyContent: {
    marginTop: 10,
    width: "95%",
    height: 300,
    flexDirection: "column",
    backgroundColor: "white",
    borderBottomWidth: 0.9,
    marginLeft: 10,
    flex: 1,
  },

  BodyContent2: {
    marginTop: 10,
    width: "95%",
    flexDirection: "column",
    backgroundColor: "white",
    marginLeft: 10,
    flex: 1,
  },

});
