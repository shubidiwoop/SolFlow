import React from "react";
import '../cssSyling/Home.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footerD">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">SolFlow</h5>
            <p>
              Powered by Solana. Contact us to get included
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Help</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> SolFlow </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;