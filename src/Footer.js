import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Footer.css';
import './custom.scss';
import LogoOne from './pics/qianyuqianxun03.jpg';
import LogoTwo from './pics/qianyuqianxun07.jpg';
import LogoThree from './pics/qianyuqianxun14.jpg';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <>
                <CardGroup>
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This content is a little bit longer.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={LogoOne} />
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={LogoTwo} />
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={LogoThree} />
                    </Card>
                </CardGroup>
            </>
        );
    }


}


export default Footer;

