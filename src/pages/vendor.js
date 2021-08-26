import React from 'react';
import NavigationBar from './navbarIL';
import FooterPage from './footer';
import VendorFooter from './vendorfooter';
import Services from './services';


const Vendor = () => {
    return(
        <div>
            <NavigationBar  />
            <Services />
            <VendorFooter />
        </div>
    );

}

export default Vendor;