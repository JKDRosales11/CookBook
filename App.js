import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Home from './Screens/Home';
import Recipes from './Screens/Recipes';
import Categories from './Screens/Categories';
import Plan from './Screens/Plan';
import Favourites from './Screens/Favourites';
import Breakfast from './category/Breakfast';
import Snacks from './category/Snacks';
import Desserts from './category/Desserts';
import Lunch from './category/Lunch';
import Dinner from './category/Dinner';
import Ampalaya from './recipes/Ampalaya';
import AdobongSitaw from './recipes/AdobongSitaw';
import BananaQue from './recipes/BananaQue';
import Bibingka from './recipes/Bibingka';
import BukoPie from './recipes/BukoPie';
import ChickenCurry from './recipes/ChickenCurry';
import AdobongIsda from './recipes/AdobongIsda';
import GinataangAlimasag from './recipes/GinataangAlimasag';
import Goto from './recipes/Goto';
import Longsilog from './recipes/Longsilog';
import Pinakbet from './recipes/Pinakbet';
import Salad from './recipes/Salad';
import Sinangag from './recipes/Sinangag';
import Spag from './recipes/Spag';
import TinolangManok from './recipes/TinolangManok';
import TinolangTahong from './recipes/TinolangTahong';
import Turon from './recipes/Turon';
import Ukoy from './recipes/Ukoy';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component{
  render() {
    return (
      <NavigationContainer>
      <StatusBar style= "auto" />
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
          <Stack.Screen name="NavRec" component={NavRec} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Home"
            }}/>
          <Stack.Screen name="NavCat" component={NavCat} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Home"
            }}/>
          <Stack.Screen name="NavFav" component={NavFav} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Home"
            }}/>
          <Stack.Screen name="NavPlan" component={NavPlan} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Home"
            }}/>
             <Stack.Screen name="Breakfast" component={Breakfast} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="Snacks" component={Snacks} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="Desserts" component={Desserts} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="Lunch" component={Lunch} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="Dinner" component={Dinner} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="Ampalaya" component={Ampalaya} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="AdobongSitaw" component={AdobongSitaw} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
            <Stack.Screen name="BananaQue" component={BananaQue} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Bibingka" component={Bibingka} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
              <Stack.Screen name="BukoPie" component={BukoPie} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
              <Stack.Screen name="ChickenCurry" component={ChickenCurry} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="AdobongIsda" component={AdobongIsda} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="GinataangAlimasag" component={GinataangAlimasag} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Goto" component={Goto} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Longsilog" component={Longsilog} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Pinakbet" component={Pinakbet} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Salad" component={Salad} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Sinangag" component={Sinangag} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Spag" component={Spag} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="TinolangManok" component={TinolangManok} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="TinolangTahong" component={TinolangTahong} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Turon" component={Turon} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
             <Stack.Screen name="Ukoy" component={Ukoy} options={{
              headerRight: props => <Logo {...props} />,
              headerTitle: "Back"
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class NavRec extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Recipes"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Recipes') {
            iconName = focused
              ? 'md-restaurant'
              : 'pizza';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'book';
          }
          else if (route.name === 'Favourites') {
            iconName = focused ? 'heart-circle' : 'heart';
          }
          else if (route.name === 'Plan') {
            iconName = focused ? 'calendar' : 'bulb';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Plan" component={Plan} />
      </Tab.Navigator>
    );
  }
}

class NavCat extends Component {
  render() {
    return (
      <Tab.Navigator  initialRouteName="Categories"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Recipes') {
            iconName = focused
              ? 'md-restaurant'
              : 'pizza';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'book';
          }
          else if (route.name === 'Favourites') {
            iconName = focused ? 'heart-circle' : 'heart';
          }
          else if (route.name === 'Plan') {
            iconName = focused ? 'calendar' : 'bulb';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Categories" component={Categories} />  
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Plan" component={Plan} />
      </Tab.Navigator>
    );
  }
}

class NavFav extends Component {
  render() {
    return (
      <Tab.Navigator  initialRouteName="Favourites"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Recipes') {
            iconName = focused
              ? 'md-restaurant'
              : 'pizza';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'book';
          }
          else if (route.name === 'Favourites') {
            iconName = focused ? 'heart-circle' : 'heart';
          }
          else if (route.name === 'Plan') {
            iconName = focused ? 'calendar' : 'bulb';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Categories" component={Categories} />  
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Plan" component={Plan} />
      </Tab.Navigator>
    );
  }
}

class NavPlan extends Component {
  render() {
    return (
      <Tab.Navigator  initialRouteName="Plan"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Recipes') {
            iconName = focused
              ? 'md-restaurant'
              : 'pizza';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'book';
          }
          else if (route.name === 'Favourites') {
            iconName = focused ? 'heart-circle' : 'heart';
          }
          else if (route.name === 'Plan') {
            iconName = focused ? 'calendar' : 'bulb';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Categories" component={Categories} />  
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Plan" component={Plan} />
      </Tab.Navigator>
    );
  }
}

class Logo extends Component {
  render() {
    return (
     <Image
        style={{ width: 40, height: 40 , marginRight: 30}}
        source={require('./assets/logo.png')}
      /> 
    );
  }
}
