import React from 'react';
import NavigationBar from './navbarIL';
import FooterPage from './footer';
import NgoFooter from './ngofooter';
import Products from './products';
import Card from "react-bootstrap/Card";



const Vendor = () => {
    return (
        <div>
            <NavigationBar />

            <div className="flex-container designTop">
                <div className="box">
                    <Card>
                        <form>
                            <label for="service">Service:</label>
                            <select id="service" name="service">
                                <option value="electricity">Electricity</option>
                                <option value="gas">Gas</option>
                                <option value="newspaper">Newspaper</option>
                                <option value="audi">Audi</option>
                            </select>

                            <p>Name of organisation</p>
                            <input type="text" name="name" />

                            <p>GSTIN Number</p>
                            <input type="text" name="gstin" /> 

                            <p><input type="submit" value="Submit" /></p>
                        </form>
                    </Card>
                </div>
            </div>

            <FooterPage />
        </div>
    );

}

export default Vendor;