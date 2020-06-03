import React from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';


const ResultsDetails = ({result}) => {
 
  return (
      <View style={styles.container}>
        <Image style={styles.ImageStyle} source={{ uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
  <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews </Text>
     
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
   marginHorizontal:5,
   marginBottom:10
  },
  ImageStyle:{
    height:100,
    width:180,
    borderRadius:5
  },
  name:{
    fontWeight:"bold",
    
  }
  
})

export default ResultsDetails;