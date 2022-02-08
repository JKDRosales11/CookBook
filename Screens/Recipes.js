import React, { Component } from 'react';
import { ScrollView,StyleSheet, View,TouchableOpacity, Text, Image,ImageBackground, Button } from 'react-native';

export default class Recipes extends Component {
render(){ 
  return(
    <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row',  alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Ampalaya')}>
            <ImageBackground
                style={{width:113, height:120, marginLeft:5, marginRight:5,}}
                source={require('../assets/recipes/ampalaya.jpg')}          
            />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('AdobongSitaw')}>
            <ImageBackground
                style={{width:113, height:120, marginRight:5}}
                source={require('../assets/recipes/adobong-sitaw.jpg')}           
            /> 
        </TouchableOpacity>     
            <View  style={{width: 120, height: 125}} >
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('BananaQue')}>
                <ImageBackground 
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/banana-que.jpg')}
                />
                </TouchableOpacity>
            </View>
        </View>  

        <View style={{ width: 100, height: 700,position: 'absolute', marginLeft:30,bottom: 0}}>
        
          <TouchableOpacity activeOpacity = { .5 } onPress={() =>
              this.props.navigation.navigate('Ampalaya')
            }   
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Ampalaya</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{ width: 100, height: 700,position: 'absolute', marginLeft:150,bottom: 0}}>
          <TouchableOpacity activeOpacity = { .5 } onPress={() =>
              this.props.navigation.navigate('AdobongSitaw')
            }   
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Adobong Sitaw</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{ width: 100, height: 700,position: 'absolute', marginLeft:270,bottom: 0}}>
          <TouchableOpacity activeOpacity = { .5 } onPress={() =>
              this.props.navigation.navigate('BananaQue')
            }   
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Banana Que</Text>
          </View>
        </TouchableOpacity>
        </View>


        <View style={{flex: 1, flexDirection: 'row',  alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Bibingka')}>
            <ImageBackground  
                style={{width:113, height:120, marginLeft:5, marginRight:5}}
                source={require('../assets/recipes/bibingka.jpg')}       
            />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('BukoPie')}>
                <ImageBackground  
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/buko-pie.jpg')}           
                />
        </TouchableOpacity>
            <View  style={{width: 120, height: 125}} >
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('ChickenCurry')}>
                <ImageBackground  
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/chicken-curry.jpg')}
                />   
        </TouchableOpacity>
            </View> 
        </View>  
        {/* </View>   */}

     {/* <View style={{ width: 100, height: 700,position: 'absolute', bottom: 0}}>
        
        <TouchableOpacity activeOpacity = { .5 } onPress={() =>
            this.props.navigation.navigate('Ampalaya')
          }   
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Bibingka</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={{ width: 100, height: 700,position: 'absolute', marginLeft:120,bottom: 0}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={() =>
            this.props.navigation.navigate('Ampalaya')
          }   
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Buko Pie</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={{ width: 100, height: 700,position: 'absolute', marginLeft:240,bottom: 0}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={() =>
            this.props.navigation.navigate('Ampalaya')
          }   
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Banana Que</Text>
        </View>
      </TouchableOpacity>
      </View> */}





        <View style={{flex: 1, flexDirection: 'row',  alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('GinataangAlimasag')}>
            <ImageBackground 
                style={{width:113, height:120,marginLeft:5, marginRight:5}}
                source={require('../assets/recipes/ginataang-alimasag.jpg')}       
            />
        </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Goto')}>
            <ImageBackground 
                style={{width:113, height:120, marginRight:5}}
                source={require('../assets/recipes/goto.jpeg')}           
            />
            </TouchableOpacity>
            
            <View  style={{width: 120, height: 125}}>
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Longsilog')}>
                <Image
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/longsilog.jpg')}
                />
            </TouchableOpacity>
            </View>
        </View>  




        <View style={{flex: 1, flexDirection: 'row',  alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Pinakbet')}>
            <ImageBackground 
                style={{width:113, height:120,marginLeft:5, marginRight:5}}
                source={require('../assets/recipes/pinakbet.jpg')}       
            />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Salad')}>
            <ImageBackground 
                style={{width:113, height:120, marginRight:5}}
                source={require('../assets/recipes/salad.jpg')}           
            />
            </TouchableOpacity>
            <View  style={{width: 120, height: 125}} >
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Sinangag')}>
                <ImageBackground 
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/sinangag.jpg')}
                />
                </TouchableOpacity>
            </View>
        </View>  


        <View style={{flex: 1, flexDirection: 'row',  alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('TinolangManok')}>
            <ImageBackground 
                style={{width:113, height:120,marginLeft:5, marginRight:5}}
                source={require('../assets/recipes/tinola-manok.jpg')}       
            />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('TinolangTahong')}>
            <ImageBackground 
                style={{width:113, height:120, marginRight:5}}
                source={require('../assets/recipes/tinolang-tahong.jpg')}           
            />
        </TouchableOpacity>
            <View  style={{width: 120, height: 125}}>
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Turon')}>
                <ImageBackground 
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/turon.jpg')}
                />
            </TouchableOpacity>
            </View>
        </View>  



        
        <View style={{flex: 1, flexDirection: 'row',  alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Ukoy')}>
            <ImageBackground 
                style={{width:113, height:120,marginLeft:5, marginRight:5}}
                source={require('../assets/recipes/ukoy.jpg')}       
            />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('AdobongIsda')}>
            <ImageBackground 
                style={{width:113, height:120, marginRight:5}}
                source={require('../assets/recipes/adobong-isda.jpg')}           
            />
            </TouchableOpacity>
            <View  style={{width: 120, height: 125}} >
            <TouchableOpacity activeOpacity = { .5 } onPress={ () =>
        this.props.navigation.navigate('Spag')}>
                <ImageBackground 
                    style={{width:113, height:120, marginRight:5}}
                    source={require('../assets/recipes/spag.jpg')}
                />
                </TouchableOpacity>
            </View>
        </View>  
    </ScrollView> 
  );
}
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 30,
      width: 115,
      alignItems: 'center',
  
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 22
      
    }
  });

