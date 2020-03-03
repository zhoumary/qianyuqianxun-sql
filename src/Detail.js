import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Detail.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, CardGroup, CardBody, CardSubtitle, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import Footer from './Footer';
import ToolBar from './ToolBar';
import DefaultBoard from './pics/defaultBoard02.jpg';


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            travelNote: null,
            noteImage: null
        }
    }

    componentDidMount() {
        this.getTravelNote();
        this.getTravelNoteImage();

        // set travel note title background image
        let noteBackground = document.getElementById("noteTitile");
        if (noteBackground && this.state.noteImage !== null) {
            noteBackground.style.backgroundImage = `url(${DefaultBoard})`;
        }
    }

    getTravelNote = _ => {
        const id = this.props.match.params.id;
        const url = 'http://localhost:4000/travelNotes/' + id;

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({ travelNote: response.data });
            })
            .catch(err => console.log(err))
    }

    getTravelNoteImage = _ => {
        const id = this.props.match.params.id;
        const urlImage = 'http://localhost:4000/travalNodesImg/' + id;

        fetch(urlImage)
            .then(response => {
                this.setState({ noteImage: response.data });
                console.log(response);
                console.log(response.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        const id = this.props.match.params.id;
        const urlImage = 'http://localhost:4000/travalNodesImg/' + id;
        const note = this.state.travelNote;
        if (note === null) {
            return (
                <Router></Router>
            )
        }




        return (
            <Router>
                <div id="home">
                    <div id="toolBar">
                        <ToolBar />
                    </div>
                    <div id="travelNote">
                        <div className="thisNote" id="noteTitile" style={{ backgroundImage: `url(${urlImage})` }}>
                            <Card body className="title">
                                <CardTitle>{note.title}</CardTitle>
                            </Card>

                        </div>
                        <Container className="content">
                            <Row className="noteContent">
                                <Col xs="8">

                                </Col>

                                <Col xs="3">

                                </Col>
                            </Row>
                        </Container>
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
