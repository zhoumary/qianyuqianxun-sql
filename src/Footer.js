import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Footer.css';
import './custom.scss';
import LogoOne from './pics/qianyuqianxun03.jpg';
import LogoTwo from './pics/qianyuqianxun07.jpg';
import LogoThree from './pics/qianyuqianxun14.jpg';
import Logo3 from './pics/logo03.gif';
import Logo4 from './pics/logo04.gif';
import Logo5 from './pics/logo05.gif';
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
                <CardGroup className="footerContainer">
                    <Card>
                        <CardBody>
                            <CardTitle>千遇千尋旅游</CardTitle>
                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                            <CardText>60,000 多个全球旅游目的地</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>關於我們</CardTitle>
                            <CardSubtitle>關於千遇千尋 聯係我們</CardSubtitle>
                            <CardText>加入我們</CardText>
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

