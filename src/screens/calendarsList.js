import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';
import moment from 'moment';
import { AdMobBanner } from 'react-native-admob';
import{ View } from 'react-native';

export default class CalendarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	current_date: new moment ().format("YYYY-MM-DD"),
    }
  }

  render() {
    return (
      <View>
        <CalendarList current={this.state.current_date} pastScrollRange={24} futureScrollRange={24} />
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
}
