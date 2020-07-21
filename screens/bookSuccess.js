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
import { Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class FAQs extends Component {

    render() {
        return (
            <View>
                <Appbar.Header style={{
                    backgroundColor: "white", justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <Appbar.BackAction style={{}}
                        onPress={() => {
                            NavigationService.navigate("homeScreen");
                        }}
                    />
                    <Appbar.Content title="Home" />
                </Appbar.Header>

                <ScrollView style={{ width: "100%", height: 560, }}>
                    <View style={{ width: "100%", }} >

                        <View style={{ width: "100%", height: 120, flexDirection: 'row' }}>
                            <Image
                                style={{ width: 60, height: 60, marginTop: '10%', marginLeft: '10%' }}
                                source={require("../assets/images/badminton.png")} />
                            <View style={{ flexDirection: 'column', marginTop: '8%' }}>
                                <Text style={{ fontSize: 23, marginLeft: '5%' }}>Sân Viettel</Text>
                                <Text style={{ fontSize: 13, marginTop: '5%', marginLeft: '5%' }}>2020.16.19-11:58AM</Text>
                            </View>
                        </View>

                        <View style={{ width: "100%", height: 70, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, color: '#239515' }}>Thành Công</Text>
                        </View>

                        {/* body */}

                        <View style={{ width: "100%", flexDirection: 'column' }}>

                            <View style={{ marginLeft: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18 }}>Địa chỉ: </Text>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 18, color: '#879286' }}>150 Hoàng Hoa Thám, Phường 12,</Text>
                                    <Text style={{ fontSize: 18, color: '#879286' }}>Quận Tân Bình,Hồ Chí Minh</Text>
                                </View>
                            </View>

                            <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18 }}>Người đặt: </Text>
                                <Text style={{ fontSize: 18, marginLeft: '20%', color: '#879286' }}>Danh</Text>
                            </View>

                            <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18 }}>Mã đặt sân: </Text>
                                <Text style={{ fontSize: 18, marginLeft: '17%', color: '#879286' }}>DA5972291328</Text>
                            </View>

                            <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18 }}>Thời điểm đặt sân: </Text>
                                <Text style={{ fontSize: 18, marginLeft: '2%', color: '#879286' }}>11:58 AM-06.19.2020</Text>
                            </View>

                            <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18 }}>Số sân đặt: </Text>
                                <Text style={{ fontSize: 18, marginLeft: '18%', color: '#879286' }}>1 Sân</Text>
                            </View>

                            <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18 }}>Thời gian sử dụng: </Text>
                                <View style={{ flexDirection: 'column', marginLeft: '3%' }}>
                                    <Text style={{ fontSize: 18, color: '#879286' }}>06:30 PM-7:30 PM</Text>
                                    <Text style={{ fontSize: 18, color: '#879286' }}>06.19.2020</Text>
                                </View>
                            </View>

                            <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', width: '100%' }}>
                                <Text style={{ fontSize: 18, color: 'red' }}>Tổng tiền: </Text>
                                <Text style={{ fontSize: 18, marginLeft: '21%', color: 'red' }}>₫ 65.000</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{ width: 150, height: 150, marginTop: '10%' }}
                                    source={require("../assets/images/barCode.png")} />
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({

});
