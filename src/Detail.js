import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Detail.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, CardGroup, CardBody, CardSubtitle, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import Footer from './Footer';
import ToolBar from './ToolBar';


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            travelNote: null,
            noteContent: null,
            noteImage: null
        }
    }

    componentDidMount() {
        this.getTravelNote();
        this.getNoteContents();
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


    getNoteContents = _ => {
        const id = this.props.match.params.id;
        const url = 'http://localhost:4000/travelNote/' + '?noteID=' + id;

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({ noteContent: response.data });
            })
            .catch(err => console.log(err))
    }


    renderNoteContents = ({ id, noteID, content }) => {


        return (
            <>

            </>
        );
    }



    render() {
        const id = this.props.match.params.id;
        const urlImage = 'http://localhost:4000/travalNodesImg/' + id;

        const note = this.state.travelNote;
        if (note === null) {
            return <div></div>
        }

        const noteContens = this.state.noteContent;

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
                                <Col xs="8" className="noteDetails">
                                    <ListGroup>
                                        {this.renderNoteContents({ noteContens })}
                                    </ListGroup>
                                </Col>

                                <Col xs="3" className="noteIndex">
                                    <Card>
                                        <CardTitle>
                                            游記目錄
                                        </CardTitle>
                                    </Card>

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
