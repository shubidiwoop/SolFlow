import React from 'react';
import Card from 'react-bootstrap/Card';
import '../cssSyling/Home.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';


const Cards = () => {
    return (

        <CardColumns className = "design">
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?electricity" />
                <Card.Body>
                    <Card.Title>Electricity</Card.Title>
                    <Card.Text>
                        Kabootar Electric Company, incorporated in New Delhi in 1905, is one of the largest electric energy companies in India. The company provides electric service to approximately 16 million people throughout a 70,000-square-mile service area in northern and central India.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?oil" />
                <Card.Body>
                    <Card.Title>Gas</Card.Title>
                    <Card.Text>
                        On February 18, 1959, Tel Baba Private Limited was incorporated to expand and develop the newly discovered oil fields of Naharkatiya and Moran in the Indian North East. In 1961, it became a joint venture company between the Indian Government and Bulbul Oil Company Limited, UK. Today, TBIL is a premier Indian National Oil Company engaged in the business of exploration, development and production of crude oil and natural gas, transportation of crude oil and production of LPG. 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?newspaper" />
                <Card.Body>
                    <Card.Title>Newspaper</Card.Title>
                    <Card.Text>
                        The Jhadu Pocha Wealth magazine is a regular source of knowledge that will help you create wealth through - a pick of features relevant to you, on topics ranging from stocks and property to gold and tax planning, even lucrative hobbies and business ideas; professional advice to help put your family finances in order; answers to your complicated financial questions; dedicated pages on unique and actionable data and much more. Happy reading The Jhadu Pocha Wealth.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <div align="right"><Button variant="primary">View all vendors</Button></div>
        </CardColumns>

       
    )
}

export default Cards;