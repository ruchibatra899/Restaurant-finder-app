import React ,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../Api/yelp'

const ResultsShowScreen = ({navigation}) => {
  const id =navigation.getParam('id');
  const[result,setResult]=useState(null);

 

  const getResult = async (id)=>{
    const response =await yelp.get(`/${id}`);
    setResult(response.data);
  }
  useEffect(()=>{
    getResult(id);
  },[]);
  if(!result)
  {
    return null;
  }

  return (
      <View style={styles.container}>
        <FlatList
          data={result.photos}
          keyExtractor={(photo)=>photo}
          renderItem={({item})=>{
            return <Image style ={styles.image} source={{uri:item}}/>
          }}
        />
    </View>
  );
};
const styles=StyleSheet.create({
  image:{
    height:200,
    width:300,
    marginVertical:10,
    marginHorizontal:10
  }
  
})

export default ResultsShowScreen;