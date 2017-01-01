import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import moment from 'moment';
require('moment/locale/vi');
moment.locale('vi')
import { Calendar } from 'react-native-calendars';
import { AdMobBanner } from 'react-native-admob';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_date: new moment ().format("YYYY-MM-DD"),
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Thời gian hiện tại {new moment ().format("hh:mm a DD-MM-YYYY")} </Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          displayLoadingIndicator
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
        />
        <View style={{ alignItems: 'center', bottom: 0, position: 'absolute', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
            <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-7478414194492896/2920136723"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError}/>
        </View>
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  }
});
