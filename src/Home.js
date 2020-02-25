import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';
import './custom.scss';
import { Button, Input } from 'reactstrap';
import Footer from './Footer';
import Logo from './pics/logo01.gif';
import Daocheng from './pics/daocheng.jpg';
import Linzhi from './pics/linzhi.jpeg';
import Xihu from './pics/xihu.jpg';
import Miaozhai from './pics/miaozhai.png';
import Hulunbeier from './pics/hunlunbeier.jpg';
import Yushui from './pics/yushui.jpg';
import Search from './pics/search.png';


class ToolBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImg: null
        }
        this.clickPlace = this.clickPlace.bind(this);
    }

    clickPlace(e) {
        let focusBackground = document.getElementById("focus");
        let target = e.target;
        let image = target.src;
        if (focusBackground) {
            focusBackground.style.backgroundImage = `url(${image})`;
        }
    }

    componentDidMount() {
        let focusBackground = document.getElementById("focus");
        if (focusBackground) {
            focusBackground.style.backgroundImage = `url(${Yushui})`;
        }
    }

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
                                稻城 | 童話不過如此
                            </div>
                        </div>

                        <div id="searchBox">
                            <form>
                                <div id="selection">
                                    <input type="radio"></input> 全部
                                    <input type="radio"></input> 目的地
                                </div>

                                <div id="search">
                                    <Input placeholder="搜目的地/攻略" />
                                    <Button active><img src={Search}></img></Button>{' '}
                                </div>

                            </form>
                        </div>
                    </div>
                    <div id="placeList">
                        <ul id="imageList">
                            <li><img src={Daocheng} onClick={this.clickPlace} /></li>
                            <li ><img src={Linzhi} onClick={this.clickPlace} /></li>
                            <li><img src={Xihu} onClick={this.clickPlace} /></li>
                            <li><img src={Miaozhai} onClick={this.clickPlace} /></li>
                            <li><img src={Hulunbeier} onClick={this.clickPlace} /></li>
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
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Home;
