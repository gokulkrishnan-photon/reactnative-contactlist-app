import React from "react";
import { StyleSheet, View, Image, Text } from "react-native"

const rowDirection = {
    0 : 'row',
    1 : 'row-reverse'
};

const ContactListItem = ({profileImage, fullName, index}) => (

    <View style={[styleSheet.container,{flexDirection:rowDirection[index%2]}]} key={fullName}>
        <Image source={{uri: profileImage}} style={styleSheet.image}/>
        <Text style={styleSheet.label}> {fullName} </Text>
    </View>
);

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        flexDirection: "row",
        marginBottom: 10
    },
    label: {
        color: "black",
        fontSize: 16,
        marginLeft: 10
    },
    image: {
        borderRadius: 25,
        width: 50,
        height: 50,
        marginLeft: 10
    }
});

export default ContactListItem;