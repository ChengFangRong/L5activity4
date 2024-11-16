import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, SectionList, TouchableOpacity } from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const dataSource = [

    {data:[

            {
                name: 'Birthday' ,
                description: 'Fall 5',
                image: require('./img/Fall.png'),
            },
            {
                name: 'Clinic Visit' ,
                description: 'Summer 9',
                image: require('./img/Summer.png'),

            },

        ],
        title: "Important Dates ", bgColor: 'antiquewhite', icon: 'calendar'},

    {data:[

            {
                name: 'Crab Cakes' ,
                description: 'Crab, bread crumbs, and egg formed into patties then fried to a golden brown.',
                image: require('./img/Crab_Cakes.png'),
            },
            {
                name: 'Duck Feather' ,
                description: 'Its so colorful',
                image: require('./img/Duck_Feather.png'),
            },
            {
                name: 'Lobster' ,
                description: 'A large ocean-dwelling crustacean with a strong tail',
                image: require('./img/Lobster.png'),
            },
            {
                name: 'Pomegranate' ,
                description: 'Within the fruit are clusters of juicy seeds.',
                image: require('./img/Pomegranate.png'),
            },
            {
                name: 'Squid Ink' ,
                description: 'Squid use this ink to confuse would-be predators.',
                image: require('./img/Squid_Ink.png'),
            },
            {
                name: 'Tom Kha Soup' ,
                description: 'These flavors are incredible!',
                image: require('./img/Tom_Kha_Soup.png'),
            },

        ],
        title: "Loved Gifts ", bgColor: 'lightpink', icon: 'heart'},

    {data:[

            {
                name: 'Octopus' ,
                description: 'A mysterious and intelligent creature.',
                image: require('./img/Octopus.png'),
            },
            {
                name: 'Squid' ,
                description: 'A deep sea creature that can grow to enormous size.',
                image: require('./img/Squid.png'),
            },


        ],
        title: "Liked Gifts ", bgColor: 'bisque', icon: 'heart'},

    {data:[

            {
                name: 'Amaranth' ,
                description: 'A purple grain cultivated by an ancient civilization.',
                image: require('./img/Amaranth.png'),
            },
            {
                name: 'Quartz' ,
                description: 'A clear crystal commonly found in caves and mines.',
                image: require('./img/Quartz.png'),
            },
            {
                name: 'Salmonberry' ,
                description: 'A spring-time berry with the flavor of the forest.',
                image: require('./img/Salmonberry.png'),
            },
            {
                name: 'Sea Cucumber' ,
                description: 'A slippery, slimy creature found on the ocean floor.',
                image: require('./img/Sea_Cucumber.png'),
            },
            {
                name: 'Super Cucumber' ,
                description: 'A rare, purple variety of sea cucumber.',
                image: require('./img/Super_Cucumber.png'),
            },


        ],
        title: "Hated Gifts ", bgColor: 'darksalmon', icon: 'minus'},


]









const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'beige',


    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        padding: 5
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
    }
});


const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={[styles.container, {flexDirection: 'row'}]}>
            <View style={[styles.textStyle, {flex:2, flexDirection: 'column'}]}>
                <Text style={[styles.textStyle, {flex:1}]}>{item.name}</Text>
                <Text style={[styles.description, {flex:1}]}>{item.description}</Text>
            </View>

            <Image source={item.image} style={{ width: 100, height: 100}} />
        </TouchableOpacity>
    );
}


const App = () => {
    return (
        <View style={{padding: 20, paddingTop: 40, paddingBottom: 100}}>
            <Button title="Add to Favourites"></Button>

            <ScrollView>
                <View style={[{marginBottom:20, margin: 10 }]}>
                    <View style={{borderWidth: 1,}}>
                    <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Elliott</Text>
                    <Image source={require('./img/Elliott.png')} style={{ width: 350, height: 380}}/>
                    </View>


                    <StatusBar hidden={true} />
                    <SectionList sections={dataSource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgColor, icon}}) => (
                             <Text style={[styles.headerText, { backgroundColor:bgColor}]}><Icon name={icon} size={20}/> {title}<Icon /></Text>

                         )}/>


                </View>




            </ScrollView>

        </View>
    );
};

export default App;






