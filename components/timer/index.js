import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moreContent: false
        }
    }

    showMore(e){
        e.preventDefault();
        this.setState({
            moreContent: !this.state.moreContent
        }, () => console.log('More Content: ', this.state.moreContent))
    }

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
                {this.state.moreContent && 
                <View style={{width: '100%', alignItems: 'center',backgroundColor: 'orange'}}>                    
                    <View style={styles.showMoreBlock}>
                        <Text style={styles.showMoreLabel}>INTERVAL AT:</Text>
                        <Text style={styles.showMoreTime}>HH : MM : SS</Text>
                        <Text style={styles.showMoreLabel}>TO:</Text>
                        <Text style={styles.showMoreTime}>HH : MM : SS</Text>
                    </View>
                    <View style={styles.showMoreBlock}>
                        <Text style={styles.showMoreLabel}>TOTAL INTERVAL TIME:</Text>
                        <Text style={styles.showMoreTime}>HH : MM : SS</Text>
                    </View>
                    <View style={styles.showMoreBlock}>
                        <Text style={styles.showMoreLabel}>TOTAL WORKED HOURS:</Text>
                        <Text style={styles.showMoreTime}>HH : MM : SS</Text>
                    </View>
                </View>}
                <TouchableOpacity onPress={this.showMore.bind(this)}>
                    <Text style={styles.showMore}>SHOW MORE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    timerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '82%',
        marginVertical: '2%'
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
        color: '#007aff',
        marginTop: 2
    },
    showMoreBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%',
        paddingVertical: 5,
        backgroundColor: 'red'
    },  
    showMoreLabel: {
        fontSize: 14,
        color: '#bdbdbd'
    },
    showMoreTime: {
        fontSize: 16,
        color: '#007aff'
    }
})