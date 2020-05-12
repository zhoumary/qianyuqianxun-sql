import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './TravelNote.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, CardGroup, CardBody, CardSubtitle, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MyUploadAdapter from './MyUploadAdapter';

import Footer from './Footer';
import ToolBar from './ToolBar';

class TravelNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            travelNote: null,
            noteContent: null,
            noteImage: null,

        }
    }

    componentDidMount() {

        this.init();

    }


    init = () => {
        ClassicEditor
            .create(document.querySelector('#editor'), {
                image: {
                    toolbar: [
                        'imageTextAlternative', '|',
                        'imageStyle:alignLeft',
                        'imageStyle:full',
                        'imageStyle:alignRight'
                    ],
                    styles: [
                        'full',
                        'alignLeft',
                        'alignRight'
                    ]
                },
                // config: {
                //     height: '300px'
                // },
                extraPlugins: [MyCustomUploadAdapterPlugin]   // 添加上传适配器
            })
            // .then(editor => { editor.resize( 900, 300 ); })
            .catch(error => { console.error( error ); });
    }



    render() {
        return (
            <Router>
                <div id="home">
                    <div id="toolBar">
                        <ToolBar />
                    </div>
                    <div id="editor"></div>
                    <div id="submitContent">
                        <Button outline color="warning" tag={Link} to={{ pathname: `/TravelNote` }} onClick={() => window.location.refresh()}>預覽</Button>
                        <Button color="primary" tag={Link} to={{ pathname: `/TravelNote` }} onClick={() => window.location.refresh()}>發表游記</Button>
                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}


// 定义上传适配器
function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        // 第二个参数设置上传图片的地址
        return new MyUploadAdapter(loader, 'http://localhost:4000/resource');
    };
}

export default TravelNote;