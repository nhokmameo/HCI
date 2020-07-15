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
import NavigationService from '../service/navigation';



const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default class profileDetail extends Component {

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.profile}>
          {/* Header */}
          <View style={styles.header}>

            <View style={{ height: 50, marginTop: 20, width: "100%",flexDirection:'row' }}>
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate("profileScreen");
                }}
              >
                <Image
                  style={{ width: 20, height: 20, marginTop: 25,marginLeft:20 }}
                  source={require("../assets/images/backIcon.png")} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, marginLeft: 25, marginTop: 20 }}>Chỉnh sửa trang cá nhân</Text>
            </View>
          </View>


          {/* Body */}

          <View style={styles.Body}>

            {/* Avatar*/}
      
              <View style={styles.BodyContent}>
                <View style={{ width: "70%", flexDirection: 'row' }}>
                  <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 20,marginLeft:30 }}>Ảnh đại diện</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 20,marginLeft:120,color:'blue' }}>Chỉnh sửa</Text>
                  </TouchableOpacity>
                </View>
              <View style={{ width: '100%', height: 300, marginTop: 15, alignItems:'center', borderRadius: 100 }}>
                  <Image
                    style={{ width: 200, height: 200, marginTop: 15, borderRadius: 100 }}
                    source={require("../assets/images/avatarProfile.jpg")} />
                </View>
              </View>


            {/* Detail */}
              <View style={styles.BodyContent2}>
                <View style={{width:"70%",flexDirection:'column'}}>

                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{fontSize:25,marginLeft:10}}>Chi tiết</Text>
                        <TouchableOpacity>
                          <Text style={{ fontSize: 18, marginLeft: 170,marginTop:10 ,color: 'blue' }}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                      <Text style={{ fontSize: 18, marginLeft: 10 }}>Tên</Text>
                      <Text style={{ fontSize: 16, marginLeft: 70, color: '#BDBBB9' }}>Ngư Tiếu thiên</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                      <Text style={{ fontSize: 18, marginLeft: 10 }}>Liên hệ</Text>
                      <Text style={{ fontSize: 16, marginLeft: 40, color: '#BDBBB9' }}>039625486123</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                      <Text style={{ fontSize: 18, marginLeft: 10 }}>Email</Text>
                      <Text style={{ fontSize: 16, marginLeft: 55, color: '#BDBBB9' }}>god@gmail.com</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                      <Text style={{ fontSize: 18, marginLeft: 10 }}>Mật khẩu</Text>
                      <Text style={{ fontSize: 16, marginLeft: 25, color: '#BDBBB9' }}>******</Text>
                    </View>

                    
                </View>

              </View>


          </View>

        </ScrollView>


      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "column",
  },

  header: {
    flexDirection: "column",
    width: "95%",
    borderBottomWidth: 0.9,
    marginLeft:10,
    height:80,
  },

  Body: {
    width: "100%",
    flexDirection: "column",
    marginTop: 5,
  },

  BodyContent: {
    marginTop: 10,
    width: "95%",
    height: 300,
    flexDirection: "column",
    backgroundColor: "white",
    borderBottomWidth:0.9,
    marginLeft:10,
  },

  BodyContent2: {
    marginTop: 10,
    width: "95%",
    flexDirection: "column",
    backgroundColor: "white",
    marginLeft: 10,
  },

});
