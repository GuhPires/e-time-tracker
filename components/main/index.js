import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Timer from '../Timer';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.blockData}>
                    <Text style={styles.intervalLabel}>INTERVAL!</Text>
                    <View style={styles.rowView}>
                        <Text style={styles.intervalLabel}>TIME REMAINING:</Text>
                        <Text style={styles.intervalTime}>HH : MM : SS</Text>
                    </View>
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
            </View>
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
        marginTop: '10%',
        alignItems: 'center'
    },
    intervalLabel: {
        fontSize: 16,
        color: '#bdbdbd',
        marginTop: 2
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginTop: 10,
        marginBottom: 15
        // backgroundColor: 'red' 
    },
    intervalTime: {
        fontSize: 16,
        color: '#007aff'
    },  
    photo: {
        width: 150,
        height: 150,
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