import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'; 
const SearchBar =(props)=>{
  return <View style={styles.viewStyle}>
      <FontAwesome style={styles.iconStyle} name="search" size={24} color="black" />
      <TextInput 
        value={props.term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={props.onTermChange}
        placeholder={"Search"} style={styles.TextInputStyle} 
        onEndEditing={props.onTermSubmit}
      />
    </View>;
}

const styles=StyleSheet.create({
  TextInputStyle:{
    alignSelf:"center",
    flex:1,
    fontSize:30
  },
  viewStyle:{
   
    borderRadius:5,
    flexDirection:'row',
    backgroundColor:'#D3D3D3',
    marginTop:10,
    marginBottom:10
  },
  iconStyle:{
    marginTop:10,
    height:50,
    alignSelf:"center",
    marginHorizontal:10,
    fontSize:35

  }
})

export default SearchBar;