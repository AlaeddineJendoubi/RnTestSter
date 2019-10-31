/* @flow */
import * as React from "react";
import { StatusBar, View, Text, Image, ImageBackground, StyleSheet, Dimensions, Alert} from "react-native";
//Importing Button element from react-native-elements library
import {Button} from "react-native-elements"
//Importing useState, useEffect Hook from react , to use it to set our states
import{ useState , useEffect} from 'react';
//Setting & importing the background image from assets folder
import backgroundImage from "../../assets/pylon.jpg";
//Getting the device width and height
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const MainView = () => {
  //setting ,initialisation droneSpeed state  to the value of 10
  const [droneSpeed, setDroneSpeed] = useState(10);
  //setting ,initialisation detectionsNumber state
  const [detectionsNumber, setDetectionsNumber] = useState(0);
  //setting ,initialisation boxs array state
  const [boxs, setBoxs] = useState([]);
  //Incremanting , updadting droneSpeed state
  increaseDroneSpeed = () => {
    setDroneSpeed (droneSpeed +0.5)
  };
  //Decremanting , updadting droneSpeed state if speed is > 1
  decreaseDroneSpeed = () => {
    if(droneSpeed >1){
      setDroneSpeed (droneSpeed -0.5)
    }
    else {
      alert(" WARNING: Drone Will Stop ")
    }
  };

  // creating a component of a list of detection boxs
  function ListOfDetetectionBoxs(props) {
      //creating a list of box detections that will be returned as a ui component
      const content = props.boxs.map((box) =>
        <View key={Math.random()} style={{
          position: 'absolute',  //absolute position so that the box's position is absolute
          borderWidth: 4,
          borderColor: "red",
          backgroundColor: "transparent",
          width: 50,
          height: 50,
          left:box.left,
          top:box.top
          }}/>
        );
      return (
        <View>
          {content}
        </View>
      );
    }
    //rendering the List Of Detetection Boxs
    renderDetections = () => {
      // creating an erray that will later be filled by the ListOfDetetectionBoxs component
      const detections = [];
      // filling the detections list with a list of detections to populate the ListOfDetetectionBoxs component
      detections.push(
        <ListOfDetetectionBoxs key={"detect"} boxs={boxs} />
      );
      return detections;
    };
  //Filling the boxs list with static values d. Display a list of AI detections boxes
  /*To add a new box detection set it's new Left and Top position
  and comment Dynamic box generation
  */
  /*
  const boxs = [
    {left: 30, top:50},
    {left: 300, top:200},
    {left: 30, top:300},
    {left: 233, top:553},
    {left: valueHere, top:valueHere},
  ];
  */

  // Populating the array of boxs depending on detectionsNumber state
  generateRandomDetections =() => {
      //Setting a random integer of detections with a min of 1 and a max of 50
      setDetectionsNumber(Math.floor(Math.random() * (50 - 1) + 1) )
      //Filling the list with random top and left position integers that does't surpace the screen size depending in the detectionsNumber
      for(let i=0; i<detectionsNumber ;i++){
        boxs[i] = {'left':Math.floor(Math.random() * (deviceWidth - deviceWidth/10)) + 1,'top':Math.floor(Math.random() * (1000 - 500)) + 1};
      }

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
            Speed : {droneSpeed}
          </Text>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Increase"
            onPress={this.increaseDroneSpeed}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            title="Detect"
            onPress= {this.generateRandomDetections}
          />
        </View>
      </ImageBackground>
        {this.renderDetections()}
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
