import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

const Home = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View style={{width: '100%', height: 290, ...styles.shadow}}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{flex: 1, alignItems: 'center'}}></ImageBackground>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderHeader()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Home;
