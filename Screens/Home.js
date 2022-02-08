import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, ImageBackground, Button, TouchableOpacity, StatusBar} from 'react-native';

export default class Home extends Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
            source={require("../assets/recipes/bibingka.jpg")}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
              opacity: 1,
              flex:1,
              justifyContent:'flex-end'
            }}>
          </ImageBackground>
        <View style={{
          width: 220,
          height: 440,
          position: 'absolute',
          bottom: 0}}>
                
          <Text style={{ fontSize: 48, color:"white" }}>CookBook</Text>
          <Text style={{ fontSize: 17, color:"white" }}>"Filipino Recipes in One App"</Text>
          
        </View>
        <View  style={{
          width: 300,
          height: 220,
          position: 'absolute',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          bottom: 0}}>
        <TouchableOpacity>
        <View  style={{width: 300, height: 50}} >
        <Button
            title="Go to Recipes"
            onPress={() =>
              this.props.navigation.navigate('NavRec')
            }
          />
        </View>
        </TouchableOpacity>
        <View  style={{width: 300, height: 50}} >
          <Button
            title="Go to Categories"
            onPress={() =>
              this.props.navigation.navigate('NavCat')
            }   
          />
          </View>
          <TouchableOpacity>
          <View  style={{width: 300, height: 50}} >
          <Button
            title="Go to Favourites"
            onPress={() =>
              this.props.navigation.navigate('NavFav')
            }
          />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View  style={{width: 300, height: 50}} >
          <Button
            title="Go to Plan"
            onPress={() =>
              this.props.navigation.navigate('NavPlan')
            }
          />
          </View>
        </TouchableOpacity>
        </View>
        </View>      
      );
    }
}
        

