import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';
// import Footer from './Footer';


class ToolBar extends React.Component {
    render() {


        return (
            <div>
                Qian Yu Qian Xun
            </div>
        )
    }
}

class RecommList extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div id="home">
                    <div id="toolBar">
                        <ToolBar />
                    </div>
                    <div id="recommList">
                        <RecommList />
                    </div>
                    {/* <div id="footer">
                        <Footer />
                    </div> */}
                </div>
            </Router>
        );
    }
}

export default Home;
