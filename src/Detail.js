import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, CardGroup, CardBody, CardSubtitle, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import Footer from './Footer';



class Detail extends React.Component {
    state = {
        travelNote: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);

        // fetch(`https://api.twitter.com/user/${id}`)
        //     .then((travelNote) => {
        //         this.setState(() => ({ travelNote }))
        //     })
    }

    render() {
        return (
            <Router>
                <div id="home">
                    <div id="toolBar">

                    </div>
                    <div id="recommList">

                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}


export default Detail;
