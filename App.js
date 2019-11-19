import React from "react";
import { FlatList, ActivityIndicator } from 'react-native';

import {  Image, Alert,Dimensions,ScrollView,  TouchableOpacity, TextInput, AppRegistry, StyleSheet,WebView, Text, View, Button } from "react-native";
import Constants from 'expo-constants';


export class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://devent.kr/app.php')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.result,

          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.content}>
            <View style={styles.content2}>

            <Image source={{uri: 'https://devent.kr/assets/no_img.png'}}
       style={{width: 20, height: 20}} />
              <Text>
                {'   '}{item.user_name}
              </Text>
            </View>

              <Text>
                {'\n'} {item.content}
              </Text>
            </View>

          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>

    );
  }
}


export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.container}>
        <Text style={styles.textStyle}>{'\n'}Clip</Text>

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            onMomentumScrollEnd ={
                () => {console.log('Scrolling is End')}
            }
        >
            <View style={styles.viewStyle1}>
              <View style={styles.container1}>
                <Text>{'\n'}{'\n'}</Text>

              </View>
            </View>
            <View style={styles.viewStyle1}>
              <View style={styles.container1}>
              <Text>{'\n'}{'\n'}</Text>

              </View>
            </View>
            <View style={styles.viewStyle1}>
              <View style={styles.container1}>
              <Text>{'\n'}{'\n'}</Text>

              </View>
            </View>
        </ScrollView>




      </View>
    <Text style={styles.textStyle}>{'\n'}Timeline</Text>
    <Fetch />



    </ScrollView>

    );
  }
}
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
  },
  containers: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    textAlign: 'center',

    width: "100%",
    height: "20%",
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 12,
    margin: 10,

    width: "auto",
    height: "auto",
  },
  content2: {
    flexDirection: 'row', // 혹은 'column'

  },
  container1: {
    borderRadius: 7,
    margin: 10,
    width: "60%",
    height: 160,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  mainfont: {
    fontSize:42,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  mainfont2: {
    fontSize:42,
    textAlign: 'center',

  },
  contentContainer: {
    paddingVertical: 20,
    backgroundColor: '#DCDCDC',

  },
  input: {
    fontSize:20,
    textAlign: 'center',
    color:'#000',
    borderColor:'#000'
  },
  viewStyle1: {
      backgroundColor : "#DCDCDC",
      width : screenWidth-20,
      height : "90%",
  },
  viewStyle2: {
      backgroundColor : "#DCDCDC",
      width : screenWidth,
      height : screenHeight,
      justifyContent: 'center',
      alignItems: 'center'
  },
  viewStyle3: {
      backgroundColor : "#DCDCDC",
      width : screenWidth,
      height : screenHeight,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textStyle: {
      fontSize : 24,
      padding : 15,
      color : 'black',
      textAlign: 'left'
  }
});
AppRegistry.registerComponent('register', () => register);
