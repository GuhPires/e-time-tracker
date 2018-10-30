import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Timer from '../Timer';

export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.INIT_INTERVAL = 3600000;    // 1 hour in mlliseconds

        this.state = {
            arrivingTime: '',
            leavingTime: '',
            calculatedTime: '',
            intervalTime: this.INIT_INTERVAL,           
            showInterval: this.calculateTime(this.INIT_INTERVAL),
            calculatedIntervalTime: '',
            interval: false
        }
    }

    getTime(e){
        e.preventDefault();
        let from = 'arrivingTime';
        if(this.state.arrivingTime){
          from = 'leavingTime';
        }
        this.setState({
          [from]: Date.now()
        }, () => {
            if(!this.state.leavingTime){
                return ;
            }
            let diff = ((this.state.leavingTime - this.state.arrivingTime) - (this.INIT_INTERVAL - this.state.intervalTime));
            this.setState({ calculatedTime:  this.calculateTime(diff)});
        });
      }

    calculateTime(time){
        // console.log('Time: ', time);
        let hours = parseInt(time / 3600000);
        let diff = time % 3600000;
        // console.log('Hours: ', hours, ' Diff: ', diff);
        let minutes = parseInt(diff / 60000);
        diff = diff % 60000;
        // console.log('Minutes: ', minutes, ' Diff: ', diff);
        let seconds = Math.round(parseInt(diff / 1000));
        // console.log('Seconds: ', seconds, ' Diff: ', diff);
        return `${hours.toString().padStart(2,0)}h : ${minutes.toString().padStart(2,0)}min : ${seconds.toString().padStart(2,0)}sec`;
    }

    toggleInterval(e){
        e.preventDefault();
        this.setState({ interval: !this.state.interval }, () => {
            if(this.state.interval){
                this.intervalTick = setInterval(() => this.setState({ intervalTime: this.state.intervalTime - 1000, showInterval: this.calculateTime(this.state.intervalTime - 1000) }), 1000);
            } else {
                clearInterval(this.intervalTick);
                this.setState({ calculatedIntervalTime: this.calculateTime(this.INIT_INTERVAL - this.state.intervalTime) })
            }
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={!this.state.interval ? styles.blockData : styles.blockDataInterval}>
                {this.state.interval && 
                    <React.Fragment>
                        <Text style={styles.intervalLabel}>INTERVAL!</Text>
                        <View style={styles.rowView}>
                            <Text style={styles.intervalLabel}>TIME REMAINING:</Text>
                            <Text style={styles.intervalTime}>{this.state.showInterval}</Text>
                        </View>
                    </React.Fragment>
                }
                    <View style={styles.photo}></View>
                    <TouchableOpacity>
                        <Text style={styles.userData}>Jhon Doe</Text>
                    </TouchableOpacity>
                    <Text style={styles.dateLabel}>{new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</Text>
                </View>
                
                <Timer arrivingTime={this.state.arrivingTime} leavingTime={this.state.leavingTime} calculatedTime={this.state.calculatedTime} calculatedIntervalTime={this.state.calculatedIntervalTime}/>
                
                <View style={styles.blockWarpper}>
                    <TouchableOpacity style={styles.button} onPress={this.getTime.bind(this)} disabled={!!this.state.leavingTime}>
                        <Text style={styles.buttonText}>GET TIME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.toggleInterval.bind(this)} disabled={!!this.state.leavingTime || !this.state.arrivingTime}>
                        <Text style={styles.buttonText}>{!this.state.interval ? 'START INTERVAL' : 'FINISH INTERVAL'}</Text>
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
        marginTop: '30%',
        alignItems: 'center'
    },
    blockDataInterval: {
        width: '100%',
        marginTop: '12%',
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