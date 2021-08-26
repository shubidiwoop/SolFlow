import React, { useState } from "react";
import NavigationBar from "./navbarIL";
import FooterPage from "./footer";
import VendorFooter from "./vendorfooter";
import Services from "./services";
import Card from "react-bootstrap/Card";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Vendor = () => {
  const [service, setService] = useState("");
  const [nameofOrganisation, setNameOfOrganisation] = useState("");
  const [gstIn, setGstIn] = useState("");

  const onSubmitHandler = () => {
    const vendorData = {
      service,
      gstIn,
      nameofOrganisation,
    };
    console.log(vendorData);
  };
  
  const handleSelect = (event) => {
    setService(event);
  }
  return (
    <div>
      <NavigationBar />

      <div className="flex-container designTop">
        <div className="box">
          <Card>
            <form onSubmit={onSubmitHandler}>
              <label for="service">Service:</label>
              <DropdownButton
                alignRight
                title="Select one:"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="electricity">Electricity</Dropdown.Item>
                <Dropdown.Item eventKey="news">News</Dropdown.Item>
                <Dropdown.Item eventKey="gas">Gas</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="others">Others</Dropdown.Item>
              </DropdownButton>

              <p>Name of organisation</p>
              <input
                type="text"
                name="name"
                onChange={(event) => setNameOfOrganisation(event.target.value)}
              />

              <p>GSTIN Number</p>
              <input
                type="text"
                name="gstin"
                onChange={(event) => setGstIn(event.target.value)}
              />

              <p>
                <input type="submit" value="Submit" />
              </p>
            </form>
          </Card>
        </div>
      </div>

      <FooterPage />
    </div>
  );
};

export default Vendor;
