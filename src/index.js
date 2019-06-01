// src/index.js

import React, { Component } from 'react';
import { StyleSheet, View, Image, Button, Text, Dimensions } from 'react-native';

import Sound from 'react-native-sound';
import { Global } from '@jest/types';

const imagemFundo = require('./images/se_beber_nao_dirija_100x133.png');
const imagemBebum = require('./images/bebum_36x36.png');
const largura = {};
const altura = {};
const x = {};
const y = {};

const styles = StyleSheet.create({
  boxMain: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'#F00',
  },
  imgFundo: {
    flex:1,
    backgroundColor:'transparent',
    resizeMode:'stretch',
    position:'absolute',
    opacity:0.05,
    width:'99%',
    height:'99%',
    justifyContent:'center'
  },
  boxMain1: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding:2,
    width:'99%',
    height:'auto',
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'#000',
  },
  boxCredit: {
    flexDirection:'column',
    alignItems:'flex-start',
    width:'auto',
  },
  boxCredit1: {
    width:'auto',
    height:'auto',
  },
  fontCredit: {
    fontSize:9,
    fontWeight:"bold",
  },
  boxTitle: {
    width:'auto',
    height:'auto',
  },
  fontTitle: {
    fontSize:16,
    fontWeight:"bold",
    color: 'blue',
  },
});

export default class Page1 extends Component {

  constructor() {
    super();
    largura1=Math.round(Dimensions.get('window').width * 100) / 100;
    altura1=Math.round(Dimensions.get('window').height * 100) / 100;
  }
  
  state = { 
    largura:{},
    altura:{},
    x:{},
    y:{},
    width9:{},
  //imagemFundo: require('./images/se_beber_nao_dirija_100x133.png'),
  //image2: require('../images/drunk3.gif'),
  //image9: {}
};
  
  async Tocar() {
    const requireAudio = require('./sounds/siren.mp3');
    const sound = new Sound(requireAudio, (error) => {
    if (error) {
      console.log('error', error);
      return;
    }
    sound.play(() => sound.release());
    });
  }
  
  render() {

    return (
      <View id='main' style={ styles.boxMain }>
        
        <Image style={ styles.imgFundo } source={imagemFundo} />
        
        <View style={ styles.boxMain1 }>

          <View style={ styles.boxCredit1 }>

            <View style={ styles.boxCredit1 }>
              <Text style={ styles.fontCredit } >Nokengo</Text>
            </View>
            
            <View style={ styles.boxCredit1 }>
              <Text style={ styles.fontCredit } >Paulo C. Levy</Text>
            </View>

          </View>
          
          <View style={ styles.boxTitle }>
            <Text style={ styles.fontTitle }>Bafômetro Virtual</Text>
          </View>
                      
            <Image style={{ backgroundColor: '#FCC', resizeMode:'center' }} source={imagemBebum} />
          
        </View>
        
        <View
          style={{ width:'auto', marginTop:5, padding:5, backgroundColor:'#CFC'}}
          onLayout={event => {
            this.setState({
              largura: Math.round(event.nativeEvent.layout.width * 100) / 100,
              altura: Math.round(event.nativeEvent.layout.height * 100) / 100,
              x: Math.round(event.nativeEvent.layout.x * 100) / 100,
              y: Math.round(event.nativeEvent.layout.y * 100) / 100,
            })
          }}
        >
          <Text>Dimensões:</Text>
          <Text>window = {`${largura1}`}  -  {`${altura1}`}</Text>
          <Text>view = {`${this.state.largura}`}  -  {`${this.state.altura}`}</Text>
          <Text>view = {`${this.state.x}`}  -  {`${this.state.y}`}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 'auto' }}>
          <Text>Home</Text>
          <Button 
            title="Tocar Alerta"
            onPress={ async() => { await this.Tocar(); }}
          />
        </View>

      </View>
    )
  }
};