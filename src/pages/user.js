import React, { Fragment } from 'react';
import NavigationBar from './navbarIL';
import Footer from './footer';
import VendorsUser from './vendorsuser';

const Donor = () => {
    return(
        <Fragment>
            <NavigationBar  />
            <VendorsUser />
            <Footer />
        </Fragment>
    );

}

export default Donor;