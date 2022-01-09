import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {Home} from '../screens';
import {COLORS, icons} from '../constants';

import TabOption from '../components/TabOption';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const TabBarCustomButtom = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{width: 70, height: 70, borderRadius: 35}}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOption icon={icons.home} text="HOME" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOption
              icon={icons.pie_chart}
              text="PORTFOLIO"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButtom {...props} />,
        }}
      />

      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOption
              icon={icons.line_graph}
              text="PRICES"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOption
              icon={icons.settings}
              text="SETTINGS"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
