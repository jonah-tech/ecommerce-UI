import React from 'react';
import Header from '../Header';
import MenuHeader from '../MenuHeader';

/**
* @author jonnah k
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        <MenuHeader />
        {props.children}
    </>
   )

 }

export default Layout
