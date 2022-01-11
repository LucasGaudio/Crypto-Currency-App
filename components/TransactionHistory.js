import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants';

class TransactionHistory extends React.PureComponent {
  render() {
    const {customContainerStyle, history} = this.props;

    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: SIZES.base,
          }}
          onPress={() => console.log(item)}>
          <Image
            source={icons.transaction}
            style={{width: 30, height: 30, tintColor: COLORS.primary}}
          />

          <View style={{flex: 1, marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.black, ...FONTS.h3}}>
              {item.description}
            </Text>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              {item.date}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: item.type == 'B' ? COLORS.green : COLORS.black,
                ...FONTS.h4,
              }}>
              {item.amount} {item.currency}
            </Text>
            <Image
              source={icons.right_arrow}
              style={{width: 20, height: 20, tintColor: COLORS.gray}}
            />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          ...styles.container,
          ...customContainerStyle,
        }}>
        <Text style={{...FONTS.h2}}>Transaction History</Text>
        <FlatList
          contentContainerStyle={{marginTop: SIZES.radius}}
          data={history}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: COLORS.lightGray,
                }}></View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
});

export default TransactionHistory;
