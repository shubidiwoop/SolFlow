import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import '../cssSyling/Home.css';
import CardColumns from 'react-bootstrap/CardColumns';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Services = () => {
    function readCookie(name) {
        let key = name + "=";
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
                console.log(cookie);
            }
            if (cookie.indexOf(key) === 0) {
                console.log(cookie.substring(key.length, cookie.length));
                return cookie.substring(key.length, cookie.length);
            }
        }
        return null;
    }
 const [editPro,setEditPro] = useState({
     edit:[
        {
            "cost" :0,
            "Quantity":0
        }
     ]
 });
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleData = (event) => {
        event.preventDefault();
        console.log(event.target.cost.value)
        console.log(event.target.quantity.value)
        setEditPro({
            edit: [
                {
                  "cost" :event.target.cost.value,
                  "Quantity":event.target.quantity.value
                }
              ]
          });
          setShow(false);
    }
    const paymentHistory = (event) => {
        // need to work on function
        event.preventDefault();
        // const amount = event.target.addmoney.value;
        const emaila = readCookie("email");
        axios.post('https://ngo-server.herokuapp.com/erc20/balanceof', {
            "emailAddress": String(emaila)
        })
            .then(function (response) {
                console.log("minted", response);
                window.alert("Your balance is " + response.data.data[0].uint256);
            })
            .catch(function (error) {
                console.log("ERRROR STARTS HERE::\n", error.response.data);
                console.log("\nERROR ENDS HERE");
                alert("error in adding money");
            })
    }
    
    return (
        <Fragment>

        <CardColumns className="design">
                <Card>
                    <div><Button variant="info" onClick={paymentHistory}>Payment History</Button></div>
                    <br />
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?books" />
                <Card.Body>
                    <Card.Title>Product 1</Card.Title>
                    <Card.Text>
                        Cost of good: {`$${editPro.edit[0].cost}`} 
                        <br/>
 
                    </Card.Text>
                    <Button variant="secondary" onClick={handleShow}>Edit Product</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={0} />
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?shelter" />
                <Card.Body>
                    <Card.Title>Product 2</Card.Title>
                    <Card.Text>
                        cost: $5
                        <br/>
                        Quantity needed: 50
                        <br/>
                        Total goal: $250
                    </Card.Text>
                    <Button variant="secondary">Edit Product</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={0} />
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?clothes" />
                <Card.Body>
                    <Card.Title>Product 3</Card.Title>
                    <Card.Text>
                        cost: $10 
                        <br/>
                        Quantity needed: 60
                        <br/>
                        Total goal: $600
                    </Card.Text>
                    <Button variant="secondary">Edit Product</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={20} />
                </Card.Footer>

            </Card>
            <div align="right"><Button variant="primary">Add product</Button></div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit = {handleData}>
                        <Form.Group controlId="cost">
                            <Form.Label>Cost</Form.Label>
                            <Form.Control required type="number" placeholder="Enter cost Price" />
                        </Form.Group>

                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control required type="number" placeholder="Enter quantity" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </CardColumns>
        </Fragment>


    )
}

export default Services;