import { StyleSheet, Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default styles = StyleSheet.create({
 fullsize: {
   width: "100%",
   height: "100%"
 },
 smallpic: {
   marginTop: "auto",
   marginBottom: "auto",
   marginRight: "auto",
   marginLeft: "auto",
   width: Dimensions.get('window').width/2,
   height: Dimensions.get('window').width/2,
   borderRadius: 80
 },
 smallsize: {
   marginTop: "auto",
   marginBottom: "auto",
   marginRight: "auto",
   marginLeft: "auto",
   width: Dimensions.get('window').width/2,
   height: Dimensions.get('window').width/2,
   borderRadius: 100,
   overflow: "hidden",
   zIndex: 100,
 },
 text: {
   alignSelf: "center",
   fontSize: 16
 },
 flash: {
   borderColor: "lightgrey",
   borderRadius: 50,
   borderWidth: 3,
   padding: 15,
   paddingLeft: 20,
   paddingRight: 20,
   position: "absolute",
   zIndex: 10,
   alignSelf: "flex-end",
   marginTop: 20,
   right: 20
 },
 share: {
   marginTop: isIphoneX()?30:10,
   backgroundColor: '#fff',
   borderRadius: 50,
   padding: 15,
   alignSelf: "center",
   width: "17%",
   alignItems: "center",
   borderWidth: 3,
   borderColor: "grey",
   opacity: 0.3,
   position: "absolute",
   zIndex: 10
 },
 delete: {
   backgroundColor: '#fff',
   borderRadius: 50,
   padding: 15,
   alignSelf: "flex-end",
   alignItems: "center",
   bottom: 20,
   right: 50,
   width: "17%",
   borderWidth: 3,
   borderColor: "grey",
   opacity: 0.3,
   position: "absolute",
   zIndex: 10
 },
 toggleSquare: {
   backgroundColor: '#fff',
   borderRadius: 50,
   padding: 15,
   alignSelf: "flex-end",
   alignItems: "center",
   bottom: 20,
   right: 50,
   width: "17%",
   borderWidth: 3,
   borderColor: "grey",
   opacity: 0.3,
   position: "absolute",
   zIndex: 10
 },
 buttonbar:{
   bottom: 5,
   width: "100%",
   position: "absolute",
   alignItems: "center",
   justifyContent: "center",
   display:"flex",
   flexDirection: "row"
 },
 capture: {
   backgroundColor: '#fff',
   borderRadius: 50,
   padding: 35,
   borderWidth: 3,
   borderColor: "grey",
   opacity: 0.3,
   marginBottom: 5
 },
 save : {
   backgroundColor: '#fff',
   borderRadius: 50,
   padding: 25,
   paddingLeft: 27,
   paddingRight: 27,
   borderWidth: 3,
   borderColor: "grey",
   opacity: 0.3,
   marginBottom: 5
 },
 switchPics: {
   backgroundColor: '#fff',
   borderRadius: 50,
   borderWidth: 3,
   borderColor: "grey",
   position: "absolute",
   padding: 15,
   left: 50,
   opacity: 0.3,
 },
 flatbar: {
   width: "100%",
   right: 10,
   top: "40%",
   justifyContent: "flex-end",
   position: "absolute",
   display:"flex",
   flexDirection: "row"
 }
});
