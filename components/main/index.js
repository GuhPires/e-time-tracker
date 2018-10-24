import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Timer from '../Timer';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.photo}></View>
                <Text style={styles.userData}>Jhon Doe</Text>
                <Text style={styles.dateLabel}>{new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</Text>
                <Timer/>
                <View style={styles.blockWarpper}>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('clicked')}>
                        <Text style={styles.buttonText}>GET TIME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('clicked')}>
                        <Text style={styles.buttonText}>LUNCH TIME</Text>
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
        alignItems: 'center',
        marginTop: '25%'
    },
    photo: {
        width: 150,
        height: 150,
        borderWidth: 6,
        borderColor: 'black',
        borderRadius: 100
    },
    userData: {
        marginVertical: 3,
        fontSize: 14,
        color: '#007aff',
    },
    dateLabel: {
        marginVertical: 3,
        fontSize: 12,
        color: '#bdbdbd'
    },  
    blockWarpper: {
        width: '80%',
        marginVertical: '6%'
    },
    button: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        backgroundColor: '#efeff4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#007aff'
    }
})