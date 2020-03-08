import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './TravelNote.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, CardGroup, CardBody, CardSubtitle, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

import Footer from './Footer';
import ToolBar from './ToolBar';

class TravelNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            travelNote: null,
            noteContent: null,
            noteImage: null
        }
    }

    componentDidMount() {

        // for CKEditor5
        BalloonEditor
            .create(document.querySelector('#editor'))
            .then(editor => {
                window.editor = editor;
            })
            .catch(error => {
                console.error('There was a problem initializing the editor.', error);
            });
    }



    render() {
        return (
            <Router>
                <div id="home">
                    <div id="toolBar">
                        <ToolBar />
                    </div>
                    <div id="travelNoteContent">
                        <div id="editor">
                            <p>This is the editor content.</p>
                        </div>
                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}


export default TravelNote;