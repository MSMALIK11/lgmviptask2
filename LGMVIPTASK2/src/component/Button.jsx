import React from 'react';


import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserButton=styled.button`
display:inline-block;
height:5rem;

width:15rem;
background:palevioletred;
border:none;
outline:none;
border-radius:1rem;
box-shadow:0 0 2rem palevioletred ;
color:#fff;
text-transform:uppercase;
font-size:1.7rem;
font-weight:bold;
letter-spacing:0.1rem;
transition:all .3s ;
font-family: 'Jost', sans-serif;
:hover{
    background:transparent;
    border:0.3rem solid palevioletred;
    color:#333;
  
    border-radius:0rem 10rem 5rem 10rem ;


`


const Button = ({name,path}) => {
  return <UserButton><Link className="link" style={{textDecoration:'none',color:'inherit'}} to={path}>{name}</Link></UserButton>;
};

export default Button;
