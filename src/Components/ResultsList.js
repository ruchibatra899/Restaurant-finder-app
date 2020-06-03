import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails'
import {withNavigation} from 'react-navigation'

const ResultsList = ({ title, results,navigation}) => {
  console.log(results);
 if(!results.length)
  return null;
  

  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={()=>{
                navigation.navigate('ResultsShow',{id: item.id})}}>
           <ResultsDetails result={ item } />
           </TouchableOpacity>
          )
        }}
      />
   </View>
  );
}
const styles=StyleSheet.create({
  
  viewStyle:{
    
  },
  header:{
    fontSize:24,
    fontWeight:"bold"
  } 
})

export default withNavigation(ResultsList);