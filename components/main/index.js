import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import Timer from '../Timer';

const { height, width } = Dimensions.get('window');

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screenH: 0
        }
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenH: contentHeight });
    }

    render(){
        console.log('Device Heigh: ', height, ' Device Width: ', width, ' State: ', this.state.screenH);
        const scrollEnabled = this.state.screenH > height;
        // const scrollEnabled = false;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1}} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                    <View style={styles.blockData}>
                        <View style={styles.photo}></View>
                        <TouchableOpacity>
                            <Text style={styles.userData}>Jhon Doe</Text>
                        </TouchableOpacity>
                        <Text style={styles.dateLabel}>{new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</Text>
                    </View>
                    <Timer/>
                    <View style={styles.blockWarpper}>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('clicked')}>
                            <Text style={styles.buttonText}>GET TIME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('clicked')}>
                            <Text style={styles.buttonText}>START INTERVAL</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    blockData: {
        width: '100%',
        alignItems: 'center'
    },  
    photo: {
        width: 150,
        height: 150,
        marginTop: '25%',
        borderWidth: 6,
        borderColor: '#bdbdbd',
        borderRadius: 100,
    },
    userData: {
        fontSize: 14,
        color: '#007aff',
        marginTop: 2
    },
    dateLabel: {
        fontSize: 12,
        color: '#bdbdbd',
        marginTop: 2
    },  
    blockWarpper: {
        alignItems: 'center',
        width: '100%',
        paddingVertical: '6%'
    },
    button: {
        width: '80%',
        height: 40,
        marginVertical: 10,
        backgroundColor: '#efeff4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        color: '#007aff'
    }
})