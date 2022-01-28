import React,{useState,useEffect} from 'react';
import Card from './Card';
import { getAllUsers } from './services/api';
import styled from 'styled-components'

import { useLocation } from 'react-router-dom';

const Flex=styled.div`
display:flex;
align-items:center;
justify-content:center;
background:red;
`
const Cards = () => {
  const [user,setuser]=useState([]);
  const[loading,setLoading]=useState(true);

  const [value, setValue] = useState('initial');
const [page,setPage]=useState(1);
  const {search}=useLocation();

const searchParams=new URLSearchParams(search);
const q=searchParams.get('page');
  useEffect(()=>{
    try {
      const getuser=async()=>{
       
        const res= await getAllUsers(page);
        if(res){
          setPage(q);
          setuser(res.data)
          setLoading(false);
          
        }
        
        }
        getuser();
      
    } catch (error) {
      console.log('error while fetching  data',error);
      
    }

  
    return () => console.log('unmounting...');
   

  },[page,q]);

  return (

    <>


    { 
    loading? <div className='d-flex align-items-center fs-1'><h1>Loading.....</h1> </div>:  
    
    user.map((data,index)=>{
      return(
<div style={{display:'flex'}}>
<Card  user={data} key={index}  />
</div>

      

      )
    })

    }
    
 
 
    
    </>
  );
};

export default Cards;
