import React from "react";
import NavigationBar from "./navbar";
import "../cssSyling/Home.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Assets/glogin.png";
import HelpCard from "./helpcard";
import FooterPage from "./footer";
import GoogleLoginComponent from "../components/GoogleLoginComponent";

const SignUp = (props) => {
  const onLoginHandlerVendor = (login, profile) => {
    if (!login) return window.alert("Failed to sign in.");
    else {
      window.location.href = "http://localhost:3000/vendorinput"
      localStorage.setItem('vendorProfile', JSON.stringify(profile));
    }
  };
  const onLoginHandlerUser = (login, profile) => {
    if (!login) return window.alert("Failed to sign in.");
    else {
      window.location.href = "http://localhost:3000/userinput"
      localStorage.setItem('userProfile', JSON.stringify(profile));
    }
  };
  return (
    <div>
      <NavigationBar />
      <div className="flex-container designTop">
        <div className="box">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Vendor SignIn/SignUp!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <GoogleLoginComponent loggingIn={onLoginHandlerVendor} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  User SignIn/SignUp!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <GoogleLoginComponent loggingIn={onLoginHandlerUser} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="box">
          <HelpCard />
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default SignUp;
