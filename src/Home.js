import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle } from 'reactstrap';
import Footer from './Footer';
import Logo from './pics/logo01.gif';
import Daocheng from './pics/daocheng.jpg';
import Linzhi from './pics/linzhi.jpeg';
import Xihu from './pics/xihu.jpg';
import Miaozhai from './pics/miaozhai.png';
import Hulunbeier from './pics/hunlunbeier.jpg';
import Yushui from './pics/yushui.jpg';
import Asia from './pics/asia-con.png';
import Ociena from './pics/ociena-co.png';
import European from './pics/EU-icon.gif';
import America from './pics/america-icon.jpg';
import Africa from './pics/africa-con.png';
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

    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,
            setActiveTab: null
        }
    }

    render() {
        const { activeTab, setActiveTab } = this.state;

        const toggle = tab => {
            if (activeTab !== tab) setActiveTab(tab);
        }

        return (
            <>
                <Container className="recommdContianer">
                    <Row className="router">
                        <Col>
                            <NavLink href="#">
                                <Card>
                                    <CardImg top width="100%" src={Asia} />
                                    <CardText>亞洲綫</CardText>
                                </Card>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink href="#">
                                <Card>
                                    <CardImg top width="100%" src={Ociena} />
                                    <CardText>大洋洲綫</CardText>
                                </Card>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink href="#">
                                <Card>
                                    <CardImg top width="100%" src={European} />
                                    <CardText>歐洲綫</CardText>
                                </Card>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink href="#">
                                <Card>
                                    <CardImg top width="100%" src={America} />
                                    <CardText>美洲綫</CardText>
                                </Card>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink href="#">
                                <Card>
                                    <CardImg top width="100%" src={Africa} />
                                    <CardText>非洲綫</CardText>
                                </Card>
                            </NavLink>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4">最新動態</Col>
                        <Col xs="8">
                            <Nav tabs className="recommdList">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        熱門游記
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        最新發表
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="6">
                                            <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="6">
                                            <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </>
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
