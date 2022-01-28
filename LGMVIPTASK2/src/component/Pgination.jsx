import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Wraper=styled.div`
text-align:center;

margin-bottom:10rem;
.btn{
  
    width:17rem;
    margin:0 auto;
    box-shadow: 0 0 1rem rgba(0,0,0,0.1);
    background:#fff;
  
    
}

.link{
    button{
        padding:0.6rem 2rem;
    
    border:none;
    outline:none;
    background:#fff;
    font-size:2rem;
    transition:0.3s ease-in;

    }
    .active{
        background:#222;
        color:#fff;
    }
    
  
   
    
    
}

`

const Pgination = () => {
    const[active,setActive]=useState(!true);
  return (
      <>
      <Wraper>
     
      <div className="btn">

    
      <Link className="link"  to='/users?page=1'><button className={`${!active? 'active':''}`} onClick={()=>  setActive(false)}>1</button></Link>
      <Link  className='link' to='/users?page=2'><button className={`${active? 'active':''}`} onClick={()=>  setActive(!active)}>2</button></Link>
     
      </div>

      </Wraper>
      
      
      </>
  );
};

export default Pgination;
