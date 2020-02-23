import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';
// import Footer from './Footer';
import Logo from './pics/logo01.gif';
import Daocheng from './pics/daocheng.jpg';
import Linzhi from './pics/linzhi.jpeg';
import Xihu from './pics/xihu.jpg';
import Miaozhai from './pics/miaozhai.png';
import Hulunbeier from './pics/hunlunbeier.jpg';


class ToolBar extends React.Component {
    render() {


        return (
            <>
                {/* <header>
                    <a href="#" id="logo"><img src={Logo} /></a>
                    <nav>
                        <a href="#" id="menu-icon"></a>
                        <ul>
                            <li><a href="#" class="current">首頁</a></li>
                            <li><a href="#">目的地</a></li>
                            <li><a href="#">攻略</a></li>
                            <li><a href="#">聯係我們</a></li>
                        </ul>
                    </nav>
                </header> */}

                <header>
                    <a href="#" id="homeLink"><img src={Logo} /></a>
                    <nav>
                        <ul id="navList">
                            <li><a href="#">首頁</a></li>
                            <li><a href="#">目的地</a></li>
                            <li><a href="#">旅游攻略</a></li>
                            <li><a href="#">聯係我們</a></li>
                        </ul>
                    </nav>
                </header>
                <div id="focus">
                    <div id="textSearch">
                        <div id="description">
                            <div>
                                Sciences Description
                            </div>
                        </div>

                        <div id="searchBox">
                            <form>
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div id="placeList">
                        <ul id="imageList">
                            <li><img src={Daocheng} /></li>
                            <li><img src={Linzhi} /></li>
                            <li><img src={Xihu} /></li>
                            <li><img src={Miaozhai} /></li>
                            <li><img src={Hulunbeier} /></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

class RecommList extends React.Component {
    render() {
        return (
            <div>
                Recommended List
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
                    <div id="footer">
                        {/* <Footer /> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default Home;
