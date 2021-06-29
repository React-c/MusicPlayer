import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Iconf from 'react-native-vector-icons/Feather';
import MainPage from './MainScreen';
//import {Color, FontType, Icon} from '../src/common/constant/constant';
import { Icon } from '../src/common/constant/constant'

function Orderlistscreen() {
  return (<View style={styles.container}>
    <Text>Setting</Text>
  </View>)
}

function horizontal_list() {
  return(<View style={styles.container}>
    <Text>Menu</Text>
  </View>)
}

function book() {
  return (<View style={styles.container}>
    <Text>Search</Text>
  </View>)
}

function menu() {
  return (
    <View style={styles.container}>
    	<Text>Profile</Text>
    </View>
   
  );
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabview}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        // console.log(route.name)
        let iconName = '';
        //let iconName;
        //console.log( descriptors[route.key])
        if (route.name == 'Home') {
          iconName = Icon.Home
        } else if (route.name === 'Search') {
          iconName = Icon.Search
        } else if (route.name === 'Setting') {
          iconName = Icon.Setting
        } else if (route.name === 'Profile') {
          iconName = Icon.User
        }

        const onPress = () => {
          console.log('data==>', iconName);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Iconf
              name={iconName}
              color='orange'
              size={23}
              style={
                isFocused ? styles.activeicon : styles.defaulticon
              }></Iconf>
            <Text style={isFocused ? styles.activeFont : styles.defaultFont}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={MainPage}/>
      <Tab.Screen name="Search"  component={book} />
      <Tab.Screen name="Setting" component={Orderlistscreen} />
      <Tab.Screen name="Profile" component={menu}  />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function tabscreen() {
  return <MyTabs></MyTabs>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
  },
  activeFont: {
    color:'orange',
    fontFamily: 'SF-Pro-Text-Bold'
  },
  defaultFont: {
    color:'darkgrey',
    fontFamily: 'SF-Pro-Text-Bold'
  },
  activeicon: {
    color:'orange',
    // height: 40,
    // width: 40,
    // borderRadius: 40,
    // backgroundColor: Color.white,
    // paddingLeft: 10,
    paddingTop: 8,
    // backgroundColor:'pink'
  },
  defaulticon: {
    color:'darkgrey',
    // height: 40,
    // width: 40,
    // borderRadius: 40,
    // backgroundColor: Color.white,
    // paddingLeft: 10,
    paddingTop: 8,
  },
  // icontab:{
  //   height:40,
  //   width:40,
  //   borderRadius:40,
  //   backgroundColor:Color.white,
  //   paddingLeft:9,
  //   paddingTop:8,
  // },
  tabview: {
    flexDirection: 'row',
    backgroundColor:'white',
    borderTopLeftRadius:10,
     borderBottomRightRadius:10,
    height: '9%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'lightgrey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 2.0,
    elevation: 10,
    // position: 'relative',
  },
});
