import React from 'react';
import Cards from './Cards';
import Pgination from './Pgination';

const UserDetails = () => {
  return (
    <>
     <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}><Cards />
  
  </div>

<Pgination />
    </>
  )
  
 
};

export default UserDetails;
