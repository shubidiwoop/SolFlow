import React, { useState } from 'react';
import NavigationBar from './navbarIL';
import FooterPage from './footer';
import NgoFooter from './ngofooter';
import Products from './products';
import Card from "react-bootstrap/Card";



const User = () => {
    const [adharnumber, setAdharNumber] = useState('');
    const onSubmitHandler = () => {
        console.log(adharnumber);
    }
    return (
        <div>
            <NavigationBar />

            <div className="flex-container designTop">
                <div className="box">
                    <Card>
                        <form onSubmit={onSubmitHandler}>
                            <p>Aadhar Number</p>
                            <input type="number" name="aadhar" onChange={(event) => setAdharNumber(event.target.value)} />

                            <p><input type="submit" value="Submit" /></p>
                        </form>
                    </Card>
                </div>
            </div>

            <FooterPage />
        </div>
    );

}

export default User;