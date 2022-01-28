import React from 'react';
import styled from 'styled-components';
import UserButton from './Button';
import logo from './images/logo.png'

import { Link } from 'react-router-dom';

const Nav=styled.div`
position:fixed;
top:0;
width:100%;
height:10rem;
line-height:4rem;
// background:linear-gradient(to left,palevioletred,papayawhip);
background:#fff;
box-shadow:0 0 1rem rgba(0,0,0,0.2);
z-index:999;
.container{
    display:flex;
justify-content:space-between;
align-items:center;
padding:0 15rem;
@media(max-width:672px){
    padding:0;
   .btn{
       display:none;
   }
   .brand{
       width:26rem;
       margin:0 auto;
    
   }

}

}

img{
    width:20rem;
    animation:animate .8s linear infinite;
    transform:scale(0.8)
}

@keyframes animate{
    from{
        transform:scale(0.8)

    }
    to{
        transform:scale(1.1)
    }
}
   
}

`;


const Navbar = () => {
  return (
      <>
      <Nav>
         <div className="container">
             <div className="brand">
                <Link to="/">
                <img src={logo} alt="" /> 
                </Link>
           
             <div className="toggle"></div>
            
          
             </div>
<div className="btn">
<UserButton name="get users" path="/users" />
</div>
         </div>
       

         
      </Nav>
      
      </>
  )
};

export default Navbar;
