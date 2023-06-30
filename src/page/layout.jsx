import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Third from '../components/Third/Third'
import Card from '../components/Card/Card';
import "./layout.css"
import SecondCard from '../components/SecondCard/SecondCard';
function Layout() {
  const [array,SetArray]=useState([0,1,2,3,4,5,6,7])
  return (
    <>
      
        <Navbar />
        <Third />
     
      <div className="cardMainCss container-fluid">
        {array.map((e) => (
          <Card e={e} />
        ))}
      </div>

      <div className="cardMainCsss">
        <SecondCard />
        <SecondCard />
        <SecondCard />
      </div>
    </>
  );
}

export default Layout