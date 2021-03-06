import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
                    <Text style={styles.timerTime}>{this.props.arrivingTime ? new Date(this.props.arrivingTime).toLocaleTimeString() : 'HH : MM : SS'}</Text>
                </View>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timerLabel}>LEFT AT:</Text>
                    <Text style={styles.timerTime}>{this.props.leavingTime ? new Date(this.props.leavingTime).toLocaleTimeString() : 'HH : MM : SS'}</Text>
                </View>
                {this.state.moreContent && 
                <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                    <View style={styles.showMoreBlock}>
                        <Text style={styles.showMoreLabel}>TOTAL INTERVAL TIME:</Text>
                        <Text style={styles.showMoreTime}>{this.props.calculatedIntervalTime ? this.props.calculatedIntervalTime : 'HH : MM : SS'}</Text>
                    </View>
                    <View style={styles.showMoreBlock}>
                        <Text style={styles.showMoreLabel}>TOTAL WORKED HOURS:</Text>
                        <Text style={styles.showMoreTime}>{this.props.calculatedTime ? this.props.calculatedTime : 'HH : MM : SS'}</Text>
                    </View>
                </View>}
                <TouchableOpacity onPress={this.showMore.bind(this)}>
                    <Text style={styles.showMore}>{!this.state.moreContent ? 'SHOW MORE' : 'SHOW LESS'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '82%',
        marginVertical: '5%'
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
        marginTop: 10
    },
    showMoreBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%',
        paddingVertical: 5
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