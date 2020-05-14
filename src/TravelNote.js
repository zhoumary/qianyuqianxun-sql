import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './TravelNote.css';
import './custom.scss';
import { Button } from 'reactstrap';
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
            noteContent: null
        };
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {

        // this.init();

    }


    // init = () => {
    //     ClassicEditor
    //         .create(document.querySelector('#editor'), {
    //             image: {
    //                 toolbar: [
    //                     'imageTextAlternative', '|',
    //                     'imageStyle:alignLeft',
    //                     'imageStyle:full',
    //                     'imageStyle:alignRight'
    //                 ],
    //                 styles: [
    //                     'full',
    //                     'alignLeft',
    //                     'alignRight'
    //                 ]
    //             },
    //             // config: {
    //             //     height: '300px'
    //             // },
    //             extraPlugins: [MyCustomUploadAdapterPlugin]   // 添加上传适配器
    //         })
    //         // .then(editor => { editor.resize( 900, 300 ); })
    //         .catch(error => { console.error( error ); });
    // }


    // submit the travel note to http://localhost:4000/noteContent
    submit() {
        const {noteContent} = this.state;
        const noteBody = {
            content: noteContent
        }
        fetch(`http://localhost:4000/noteContent`, {
            method: 'POST',
            body: JSON.stringify(noteBody), // string or object
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log('Success:', response))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Router>
                <div id="home">
                    <div id="toolBar">
                        <ToolBar />
                    </div>
                    {/* <div id="editor">{this.state.noteContent}</div> */}
                    <div id="classicEditor">
                        <CKEditor
                            editor={ ClassicEditor }
                            config={
                                {extraPlugins: [MyCustomUploadAdapterPlugin]}                            
                            }
                            data={this.state.noteContent}
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({noteContent: data});
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }

                        />
                    </div>
                    <div id="submitContent">
                        <Button outline color="warning" tag={Link} to={{ pathname: `/TravelNote` }} onClick={() => window.location.refresh()}>預覽</Button>
                        <Button color="primary" onClick={this.submit}>發表游記</Button>
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
        const uploader = new MyUploadAdapter(loader, 'http://localhost:4000/resource');

        return uploader;
    };
}

export default TravelNote;