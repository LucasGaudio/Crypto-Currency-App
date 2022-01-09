import React from 'react';
import {View, Image, Text} from 'react-native';

import {COLORS, FONTS} from '../constants';

class TabOption extends React.PureComponent {
  render() {
    const {icon, text, focused} = this.props;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? COLORS.primary : COLORS.black,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.primary : COLORS.black,
            ...FONTS.body5,
          }}>
          {text}
        </Text>
      </View>
    );
  }
}

export default TabOption;
