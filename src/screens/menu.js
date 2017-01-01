import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AdMobBanner } from 'react-native-admob';

export default class MenuScreen extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarsPress.bind(this)}>
          <Text style={styles.menuText}>Lịch Tháng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Lịch Năm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
          <Text style={styles.menuText}>Kế Hoạch Của Bạn</Text>
        </TouchableOpacity>
            <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-7478414194492896/2920136723"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError}/>
      </View>
    );
  }

  onCalendarsPress() {
    this.props.navigator.push({
      screen: 'Calendars',
      title: 'Lịch Tháng'
    });
  }

  onCalendarListPress() {
    this.props.navigator.push({
      screen: 'CalendarsList',
      title: 'Lịch Năm'
    });
  }

  onAgendaPress() {
    this.props.navigator.push({
      screen: 'Agenda',
      title: 'Kế Hoạch'
    });
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1
  },
  menuText: {
    fontSize: 18
  }
});