import {useState , useEffect} from 'react'
//import {RAPID_API_KEY} from '@env'
import axios from 'axios'
import {isLoading} from "expo-font"
import Popularjobs from "../components/home/popular/Popularjobs";



//const rapidApiKey = RAPID_API_KEY;


// endpoint coming as prop in useFetch
const useFetch = (endpoint , query) =>{
    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': "62e298ac08msh355f3d137183fd3p12bc4ajsn6d7f48028726",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
           ...query
        },
    };


    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }
        catch(error){
            setError(error);
            alert('There is an error');
        }
        finally {
            setIsLoading(false);
        }
    }


    useEffect(() =>{
        fetchData();
    } ,[]);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return {data , isLoading , error , refetch};
}

export default useFetch;