import {useEffect,useState} from 'react';
import yelp from '../Api/yelp';

export default()=>{
  const[results,setResults]=useState('');
  const[errorMessage, setErrorMessage]=useState('');
  const  searchApi= async (searchTerm)=>{
    try{
      const response=await yelp.get('/search',{
        params:{
          limit:50,
          term:searchTerm,
          location:'US'

        }
      })
      setResults(response.data.businesses);
      }catch{
        setErrorMessage('Something went wrong');
      }

    };
    useEffect(()=>{
      searchApi('pasta');
    },[])

    return [searchApi,results,errorMessage];

}