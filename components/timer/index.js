import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Timer extends React.Component {
    render(){
        return (
            <View style={styles.timerContainer}>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timerLabel}>ARRIVED AT:</Text>
                    <Text style={styles.timerTime}>HH : MM : SS</Text>
                </View>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timerLabel}>LEFT AT:</Text>
                    <Text style={styles.timerTime}>HH : MM : SS</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('clicked')}>
                    <Text style={styles.showMore}>SHOW MORE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timerContainer: {
       alignItems: 'center',
       justifyContent: 'center',
       marginVertical: 20
    },
    timerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 260,
        marginVertical: 25
    },
    timerLabel: {
        fontSize: 18,
        color: '#bdbdbd'
    },
    timerTime: {
        fontSize: 25,
        color: '#007aff'
    },
    showMore: {
        fontSize: 12,
        color: '#007aff'
    }
})