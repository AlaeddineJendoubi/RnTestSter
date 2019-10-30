/* @flow */
import * as React from "react";
import { StatusBar, View, Text, Image, ImageBackground, StyleSheet, Dimensions, Alert} from "react-native";
//Importing Button element from react-native-elements library
import {Button} from "react-native-elements"

//Setting & importing the background image from assets folder
import backgroundImage from "../../assets/pylon.jpg";
//Getting the device width and height
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const MainView = () => {
increaseDroneSpeed = () => {

  };

  decreaseDroneSpeed = () => {

    };



  return (
    <View >
      <StatusBar barStyle="light-content" />
      <ImageBackground source={backgroundImage} style={styles.backgroundImageStyle}>
        <View style={styles.buttonViewStyle}>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Decrease"
            onPress= {this.decreaseDroneSpeed}
          />
          <Text style={styles.textStyle}>
            Speed : 10
          </Text>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Increase"
            onPress={this.increaseDroneSpeed}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            title="Detect"

          />
        </View>
      </ImageBackground>

    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImageStyle: {
    flex: 1,
    alignItems : 'center',
    width: deviceWidth,
    height: deviceHeight,
  },
  textStyle:{
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  buttonStyle: {
    width:100,
    marginLeft : '2%',
    alignItems: 'center'
  },
  buttonViewStyle: {
    marginTop :deviceHeight - deviceHeight/5,
    width : deviceWidth/2,
    height : deviceHeight/10,
    alignItems: 'center',
    justifyContent :'center',
    backgroundColor : 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row'
  }
});
export default MainView;
