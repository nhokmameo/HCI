import React, { useState, Component } from 'react';
import {
    StyleSheet, Text, View, ScrollView, Image, Dimensions,
    TouchableOpacity, AppRegistry, FlatList, Alert, TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';



class FlatListItem extends Component {

    render() {
        // console.log(this.props.item.day)
        switch (this.props.item.day) {
            case "Thứ 7": {
                return (
                    <TouchableOpacity style={styles.itemt7}>
                        {/* <View style={styles.item}> */}

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.month}</Text>
                        </View>

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontSize: 30, fontWeight: "800" }}>{this.props.item.date}</Text>
                        </View>

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.day}</Text>
                        </View>

                        {/* </View> */}
                    </TouchableOpacity>
                );
            }

            case "C.Nhật": {
                return (
                    <TouchableOpacity style={styles.itemCN}>
                        {/* <View style={styles.item}> */}

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.month}</Text>
                        </View>

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontSize: 30, fontWeight: "800" }}>{this.props.item.date}</Text>
                        </View>

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.day}</Text>
                        </View>

                        {/* </View> */}
                    </TouchableOpacity>
                );
            }

            default: {
                return (
                    <TouchableOpacity style={styles.item}>
                        {/* <View style={styles.item}> */}

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.month}</Text>
                        </View>

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontSize: 30, fontWeight: "800" }}>{this.props.item.date}</Text>
                        </View>

                        <View style={styles.title}>
                            <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.day}</Text>
                        </View>

                        {/* </View> */}
                    </TouchableOpacity>
                );
            }
        }
        // 
    }
}

// export default FlatListItem;
const DATA = [
    {
        key: "a1",
        month: "Tháng 7",
        date: "1",
        day: "Thứ 2"
    },
    {
        key: "a2",
        month: "Tháng 7",
        date: "2",
        day: "Thứ 3"
    },
    {
        key: "a3",
        month: "Tháng 7",
        date: "3",
        day: "Thứ 4"
    },
    {
        key: "a4",
        month: "Tháng 7",
        date: "4",
        day: "Thứ 5"
    },
    {
        key: "a5",
        month: "Tháng 7",
        date: "5",
        day: "Thứ 6"
    },
    {
        key: "a6",
        month: "Tháng 7",
        date: "6",
        day: "Thứ 7"
    },
    {
        key: "a7",
        month: "Tháng 7",
        date: "7",
        day: "C.Nhật"
    },
];


// const Item = ({ month }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{month}</Text>
//   </View>
// );

// const Item2 = ({ date }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{date}</Text>
//   </View>
// );

// const Item3 = ({ day }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{day}</Text>
//   </View>
// );



// class TimeItem extends Component {

//     // handelSeleted = (seletedID) => {
//     //     this.setState({
//     //         time: seletedID
//     //     })
//     // }


//     render() {
//         // const [time, setTime] = useState('');
//         return (
//             <TouchableOpacity onPress={() => {

//             }
//             }

//                 style={styles.timeItem}>
//                 {/* <View style={styles.item}> */}

//                 <View style={styles.title}>
//                     <Text style={{ color: 'white', fontWeight: "800" }}>{this.props.item.time}</Text>
//                 </View>



//                 {/* </View> */}
//             </TouchableOpacity>
//         );
//     }
// }
// // export default TimeItem;
// const TIME = [
//     {
//         key: "a1",
//         time: "1:00",

//     },
//     {
//         key: "a2",
//         time: "2:00",
//     },
//     {
//         key: "a3",
//         time: "3:00",

//     },
//     {
//         key: "a4",
//         time: "4:00",

//     },
//     {
//         key: "a5",
//         time: "5:00",
//     },
//     {
//         key: "a6",
//         time: "6:00",

//     },
//     {
//         key: "a7",
//         time: "7:00",

//     },
// ];

export default class bookingScreen extends Component {
    state = {
        count: 60,
        time1: '1:00',
        time2: '2:00',
        time3: '3:00',
        time4: '4:00',
        time5: '5:00',
        time6: '6:00',
        time7: '7:00',
        time8: '8:00',
        time9: '9:00',
        time10: '10:00',
        time11: '11:00',
        time12: '12:00',
        value: '0:00'

    }



    // componentWillMount() {
    //     this.setState({
    //         time: this.
    //     })
    // }



    // // const[count, setCount] = useState(60);

    // increase = () => {
    //     this.setState(count + 5);
    // };

    // decrease = () => {
    //     this.setState(count - 5);
    // };


    render() {

        const {

            count,
            time1,
            time2,
            time3,
            time4,
            time5,
            time6,
            time7,
            time8,
            time9,
            time10,
            time11,
            time12,
            value

        } = this.state;
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.headerContainer}>
                    <Appbar.BackAction style={styles.backIcon} onPress={() => { }} />
                    <Appbar.Content style={styles.titleHeader} title="Sân Viettel" />
                </Appbar.Header>
                <ScrollView>

                    <View style={styles.imageContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <View style={styles.imageView}>
                                <Image style={styles.image} source={require('../assets/images/soccer.png')} />
                                <Text>Bóng đá</Text>
                            </View>

                            <View style={styles.imageView}>
                                <Image style={styles.image} source={require('../assets/images/tennis.png')} />
                                <Text>Tennis</Text>
                            </View>

                            <View style={styles.imageView} >
                                <Image style={styles.image} source={require('../assets/images/badminton.png')} />
                                <Text>Cầu lông</Text>
                            </View>

                            <View style={styles.imageView} >
                                <Image style={styles.image} source={require('../assets/images/swimming.png')} />
                                <Text>Bơi lội</Text>
                            </View>

                            <View style={styles.imageView} >
                                <Image style={styles.image} source={require('../assets/images/volleyball.png')} />
                                <Text>Bóng chuyền</Text>
                            </View>

                        </ScrollView>
                    </View>

                    <View style={styles.calendar}>
                        <FlatList
                            data={DATA}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.key}
                            renderItem={({ item, index }) => {
                                return (
                                    <FlatListItem item={item} index={index}>

                                    </FlatListItem>
                                )
                            }}

                        />
                    </View>

                    <View style={styles.timer}>
                        <View style={styles.timeStart}>
                            <Text>Thời Gian Bắt Đầu</Text>
                            <Text style={{ fontSize: 20, marginTop: 10 }}>
                                {this.state.value}
                            </Text>
                        </View>
                        <View style={styles.timeStart}>
                            <Text>Thời Gian Chơi</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.setState({ count: count - 5 });
                                    }}
                                >
                                    <AntDesign style={{ marginTop: 10, marginRight: 10 }} name="minuscircleo" size={20} color="black" />
                                </TouchableWithoutFeedback>
                                <Text style={{ fontSize: 20, marginTop: 10 }}> {count} min</Text>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.setState({ count: count + 5 });
                                    }}
                                >
                                    <AntDesign style={{ marginTop: 10, marginLeft: 10 }} name="pluscircleo" size={20} color="black" />
                                </TouchableWithoutFeedback>
                            </View>

                        </View>
                    </View>


                    <View style={styles.timeContanier}>

                        {/* <FlatList
                            data={TIME}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.key}
                            renderItem={({ item, index }) => {
                                return (
                                    <TimeItem item={item} index={index}>

                                    </TimeItem>
                                )
                            }}

                        /> */}


                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={(value) => this.setState({ value: time1 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time1}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={(value) => this.setState({ value: time2 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time2}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={(value) => this.setState({ value: time3 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time3}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={(value) => this.setState({ value: time4 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time4}</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={(value) => this.setState({ value: time5 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time5}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={(value) => this.setState({ value: time6 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time6}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={(value) => this.setState({ value: time7 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time7}</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={(value) => this.setState({ value: time8 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time8}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={(value) => this.setState({ value: time9 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time9}</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={(value) => this.setState({ value: time10 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time10}</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={(value) => this.setState({ value: time11 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time11}</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={(value) => this.setState({ value: time12 })}>
                                <View style={styles.timeItem}>
                                    <Text style={styles.title}>{time12}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* </TouchableOpacity> */}

                        </ScrollView>

                    </View>




                    <View style={styles.playGround}>

                        <View style={styles.eachGround}>
                            <TouchableOpacity>
                                <View style={{
                                    height: 100,
                                    width: 180,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    marginLeft: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,


                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'green' }}>Sân 1</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{
                                    height: 100,
                                    width: 180,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    marginLeft: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10

                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'green' }}>Sân 3</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{
                                    height: 100,
                                    width: 180,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    marginLeft: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10

                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'green' }}>Sân 5</Text>
                                </View>
                            </TouchableOpacity>


                        </View>


                        <View style={styles.eachGround}>
                            <TouchableOpacity>
                                <View style={{
                                    height: 100,
                                    width: 180,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10

                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'green' }}>Sân 2</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{
                                    height: 100,
                                    width: 180,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10

                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'green' }}>Sân 4</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{
                                    height: 100,
                                    width: 180,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10

                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'green' }}>Sân 6</Text>
                                </View>
                            </TouchableOpacity>

                        </View>


                    </View>

                    <View style={styles.promo}>

                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Chương trình khuyến mãi</Text>
                        <Text style={{ fontSize: 15, color: '#fca12a', fontWeight: '800' }}>Trưa năng động 15%</Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={{
                            width: Dimensions.get('screen').width / 2,
                            height: 60,
                            borderRightColor: 'grey',
                            borderRightWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={{ fontSize: 15, fontWeight: '800' }}>Tổng tiền: </Text>
                            <Text style={{ fontSize: 15, color: 'red', fontWeight: '800' }}>65.000 đ </Text>

                        </View>
                        <TouchableOpacity>
                            <View style={{
                                width: Dimensions.get('screen').width / 2,
                                height: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'green',

                            }}>
                                <Text style={{ fontSize: 15, fontWeight: '800', color: 'white' }}>Đặt lịch</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View >
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    headerContainer: {
        backgroundColor: 'white',
    }
    ,
    titleHeader: {
        //marginLeft: -50
    },
    imageContainer: {
        height: 130,
        width: Dimensions.get('screen').width,
        // borderColor: 'black',
        // borderWidth: 1,

    },
    image: {
        width: 40,
        height: 40,

    },
    imageView: {
        // borderColor: 'black',
        // borderWidth: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        alignItems: "center"

    },
    button: {
        justifyContent: "space-evenly"
    },

    calendar: {
        //flex: 1,
        marginTop: 10,

    },
    timeContanier: {
        marginTop: 10,
        width: Dimensions.get('screen').width,
        height: 65,
        // borderColor: 'black',
        // borderWidth: 1,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 140,
        // borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4,
        backgroundColor: 'green',

    },
    itemt7: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 140,
        // borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4,
        backgroundColor: 'orange',


    },

    itemCN: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 140,
        // borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4,
        backgroundColor: 'red',

    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        margin: 12,

    },

    timer: {
        width: Dimensions.get("screen").width,
        height: 80,
        flexDirection: 'row',
        marginTop: 10,
        borderColor: 'grey',
        borderWidth: 1

    },
    timeStart: {
        width: Dimensions.get("screen").width / 2,
        // borderWidth: 1,
        // borderColor: 'black',
        borderRightColor: 'grey',
        borderRightWidth: 1,
        height: 80,
        alignItems: 'center',
        justifyContent: "center"
    },
    timeItem: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4,
        backgroundColor: 'green',

    },
    playGround: {
        width: Dimensions.get('screen').width,
        height: 340,
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: 10,
        // alignItems: 'flex-start',
        // justifyContent: 'space-around',
        flexDirection: "row",


    },
    eachGround: {
        width: Dimensions.get("screen").width / 2,
        height: 340,

        // borderColor: 'black',
        // borderWidth: 1,
    },
    promo: {
        width: Dimensions.get('screen').width,
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    footer: {
        width: Dimensions.get("screen").width,
        height: 60,
        borderColor: 'grey',
        //borderWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',

    }

});
