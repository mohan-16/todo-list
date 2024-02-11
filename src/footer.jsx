import React from 'react';

const Footer = ({length}) => {
  return (
    <footer>
    <p style={{textAlign:'center', fontSize:'20px', fontWeight:"900", color:'whitesmoke', margin:"10px" , padding:"30px" ,textShadow:"1px 1px 2px black"}}> {length} LIST IS HERE....!</p>
    </footer>
  );
};

export default Footer;