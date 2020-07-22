import React, { Component } from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Animated, ScrollView
} from 'react-native';
import NavigationService from '../service/navigation';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
export default class homeScreen extends Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000,
        useNativeDriver: true
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    width: Dimensions.get('screen').width,
                    height: 120, backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>Hi,Danh!</Text>
                    <FontAwesome name="user" size={24} color="white" style={{ marginLeft: '50%' }} onPress={() => {
                        NavigationService.navigate("profileScreen");
                    }} />
                    <MaterialCommunityIcons name="bell" size={24} color="white" style={{ marginRight: 20 }} />
                </View>

                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: -40,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginBottom: 20,
                            height: 36,
                            // position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                // backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                // borderWidth: 1,
                                // borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#D2D3D4",
                                    fontSize: 15
                                }}
                            >
                                Đặt lịch
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                // borderWidth: 1,
                                // borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                // style={{
                                //     color: active === 0 ? "#fff" : "#D2D3D4",
                                // }}

                                style={{
                                    color: active === 0 ? "#D2D3D4" : "#fff",
                                    fontSize: 15
                                }}
                            >
                                Khuyến mãi
                            </Text>
                        </TouchableOpacity>
                    </View>


                    {/* <ScrollView> */}

                    <Animated.View
                        style={{
                            // justifyContent: "center",
                            // alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabOne
                                }
                            ]
                        }}
                        onLayout={event =>
                            this.setState({
                                translateY: event.nativeEvent.layout.height
                            })
                        }
                    >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{
                                width: Dimensions.get('screen').width,
                                height: 50, flexDirection: 'row',

                            }}>
                                <View style={{
                                    width: 80, height: '90%', borderColor: 'grey', borderWidth: 1,
                                    borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'
                                }}>
                                    <Text style={{ color: 'white' }}>Bóng đá</Text>
                                </View>


                                <View style={{
                                    width: 80, height: '90%', borderColor: 'grey', borderWidth: 1, marginLeft: 20,
                                    borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'
                                }}>
                                    <Text style={{ color: 'white' }}>Tennis</Text>
                                </View>


                                <View style={{
                                    width: 80, height: '90%', borderColor: 'grey', borderWidth: 1, marginLeft: 20,
                                    borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'
                                }}>
                                    <Text style={{ color: 'white' }}>Bơi lội</Text>
                                </View>

                                <View style={{
                                    width: 80, height: '90%', borderColor: 'grey', borderWidth: 1, marginLeft: 20,
                                    borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'
                                }}>
                                    <Text style={{ color: 'white' }}>Cầu lông</Text>
                                </View>
                            </View>
                        </ScrollView>


                        <ScrollView style={{ width: '100%', height: '100%' }}>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>100.000 - 200.000₫</Text>
                                            {/* <Text>Giảm 10% khi đặt 2 sân trở lên</Text> */}
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10, marginLeft: "20%" }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>100.000 - 200.000₫</Text>
                                            {/* <Text>Giảm 10% khi đặt 2 sân trở lên</Text> */}
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10, marginLeft: "20%" }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>100.000 - 200.000₫</Text>
                                            {/* <Text>Giảm 10% khi đặt 2 sân trở lên</Text> */}
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10, marginLeft: "20%" }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>100.000 - 200.000₫</Text>
                                            {/* <Text>Giảm 10% khi đặt 2 sân trở lên</Text> */}
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10, marginLeft: "20%" }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>100.000 - 200.000₫</Text>
                                            {/* <Text>Giảm 10% khi đặt 2 sân trở lên</Text> */}
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10, marginLeft: "20%" }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>

                            </TouchableOpacity>

                        </ScrollView>


                        <View style={{ marginTop: 20 }}>
                            {/* <Image
                                    source={require("./cat.jpg")}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15
                                    }}
                                /> */}
                        </View>
                    </Animated.View>

                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabTwo
                                },
                                {
                                    translateY: -translateY
                                }
                            ]
                        }}
                    >
                        <ScrollView style={{ width: '100%', height: '100%' }}>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>Giảm 10% khi đặt 2 sân trở lên</Text>
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>Giảm 10% khi đặt 2 sân trở lên</Text>
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>Giảm 10% khi đặt 2 sân trở lên</Text>
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>Giảm 10% khi đặt 2 sân trở lên</Text>
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate("bookYard");
                            }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                    <View style={{
                                        width: Dimensions.get('screen').width * 9 / 10,
                                        height: 80, borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row'
                                    }}>
                                        <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />

                                        <View style={{ justifyContent: 'center' }}>
                                            <Text>Sân Viettel</Text>
                                            <Text>Tân Bình - 1.1 Km</Text>
                                            <Text>Giảm 10% khi đặt 2 sân trở lên</Text>
                                        </View>


                                        <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#FEBC1B" size={15} />
                                                <FontAwesome name="star" color="#F1EEEB" size={15} />
                                            </View>


                                            <View style={{ flexDirection: 'column', height: 40, marginTop: 10 }}>
                                                <Text style={{ fontSize: 10, color: '#4F9E2B' }}> 150 reviews</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>

                    </Animated.View>
                    {/* </ScrollView> */}
                </View>
            </View>
        );
    }
}
