import React from "react";
import ContactListItem from "./ContactListItem";
import { StyleSheet, View, ScrollView } from "react-native";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contactList: []};
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
        .then(response => response.json())
        .then(data => {
            this.setState({contactList: data.results});
        });
    }

    renderItems() {
        return this.state.contactList.map((c, i) => (
            <ContactListItem profileImage={c.picture.thumbnail} fullName={`${c.name.title} ${c.name.first} ${c.name.last}`} index={i}/>
        ));
    }

    render() {
        return <ScrollView style={styleSheet.container}>{this.renderItems()}</ScrollView>
    }
}

const styleSheet = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    }
});

export default ContactList;