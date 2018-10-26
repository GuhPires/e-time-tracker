import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ScrollView } from 'react-native';

import Main from './components/Main';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screenH: 0
        }
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenH: contentHeight });
    }

    render() {
        console.log('Device Heigh: ', height, ' Device Width: ', width, ' State: ', this.state.screenH);
        const scrollEnabled = this.state.screenH > height;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1, width: '100%'}} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                    <Main />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
