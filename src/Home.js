import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';
import './custom.scss';
import classnames from 'classnames';
import { Button, Input, Container, Row, Col, CardGroup, CardBody, CardSubtitle, Card, CardImg, NavLink, CardText, TabContent, TabPane, Nav, NavItem, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import Footer from './Footer';

import Logo from './pics/logo01.gif';

import Daocheng from './pics/daocheng.jpg';
import Linzhi from './pics/linzhi.jpeg';
import Xihu from './pics/xihu.jpg';
import Miaozhai from './pics/miaozhai.png';
import Hulunbeier from './pics/hunlunbeier.jpg';
import Yushui from './pics/yushui.jpg';
import DefaultBoard from './pics/defaultBoard02.jpg';
import Search from './pics/search.png';

import Asia from './pics/asia-con.png';
import Ociena from './pics/ociena-co.png';
import European from './pics/EU-icon.gif';
import America from './pics/america-icon.jpg';
import Africa from './pics/africa-con.png';

import Latest from './pics/news.JPG';
import LatestNews from './pics/latestNews.jpg';
import LatestPolicy from './pics/latestPolicy.jpg';
import Turkey from './pics/travel01.jpg';
import River from './pics/travel02.jpg';
import Greece from './pics/travel03.jpeg';
import Desert from './pics/travel03.jpg';
import Tebit from './pics/travel04.jpg';
import Indiain from './pics/travel05.jpg';
import Guilin from './pics/travel06.jpg';





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
            focusBackground.style.backgroundImage = `url(${DefaultBoard})`;
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
            travelNotes: []
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }

    componentDidMount() {

        this.setState({ activeTab: "1" });
        this.getTravelNotes();

    }

    getTravelNotes = _ => {
        fetch('http://localhost:4000/travelNotes')
            .then(response => response.json())
            .then(response => {
                this.setState({ travelNotes: response.data })
            })
            .catch(err => console.log(err))
    }

    renderLatest = ({ id, title, description, destination, image }) => {

        let base64data;
        if (image) {
            // convert blob to base64
            console.log(image);
            let blob = new Blob(image.data);

            const fileReaderInstance = new FileReader();

            fileReaderInstance.readAsDataURL(blob);
            fileReaderInstance.onloadend = () => {
                base64data = fileReaderInstance.result;
                console.log(base64data);
            }
        }

        return (
            <ListGroupItem tag="a" href="#" action key={id}>
                <CardGroup>
                    <Card>
                        <CardImg src={`http://localhost:4000/travalNodesImg/${id}`} top width="100%" />
                        <img src={base64data}></img>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                            <CardSubtitle>{destination}</CardSubtitle>
                            <CardText>{description}</CardText>
                        </CardBody>
                    </Card>
                </CardGroup>
            </ListGroupItem>
        )
    }

    render() {
        const { travelNotes } = this.state;
        if (travelNotes == []) {
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

                        <Row className="newsTravels">
                            <Col xs="4">
                                <Card>
                                    <CardImg top width="100%" src={Latest} />
                                </Card>
                                <Card body className="text-center">
                                    <CardTitle>最新動態</CardTitle>
                                    <CardImg top width="100%" src={LatestNews} />
                                    <CardText>關注綫路最新動態，出行更自由</CardText>
                                </Card>
                                <Card body className="text-right">
                                    <CardTitle>最新政策</CardTitle>
                                    <CardImg top width="100%" src={LatestPolicy} />
                                    <CardText>關注新政策，出行有保障</CardText>
                                </Card>
                            </Col>
                            <Col xs="8">
                                <Nav tabs className="recommdList">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            熱門游記
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            最新發表
                                    </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab} className="recommdCards">
                                    <TabPane tabId="1">
                                        <ListGroup>
                                            <ListGroupItem tag="a" href="#" action>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Turkey} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={River} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Greece} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Desert} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Tebit} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Indiain} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Guilin} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        {/* <ListGroup>
                                            {travelNotes.map(this.renderLatest)}
                                        </ListGroup> */}
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        } else {
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

                        <Row className="newsTravels">
                            <Col xs="4">
                                <Card>
                                    <CardImg top width="100%" src={Latest} />
                                </Card>
                                <Card body className="text-center">
                                    <CardTitle>最新動態</CardTitle>
                                    <CardImg top width="100%" src={LatestNews} />
                                    <CardText>關注綫路最新動態，出行更自由</CardText>
                                </Card>
                                <Card body className="text-right">
                                    <CardTitle>最新政策</CardTitle>
                                    <CardImg top width="100%" src={LatestPolicy} />
                                    <CardText>關注新政策，出行有保障</CardText>
                                </Card>
                            </Col>
                            <Col xs="8">
                                <Nav tabs className="recommdList">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            熱門游記
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            最新發表
                                    </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab} className="recommdCards">
                                    <TabPane tabId="1">
                                        <ListGroup>
                                            <ListGroupItem tag="a" href="#" action>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Turkey} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={River} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Greece} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Desert} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Tebit} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Indiain} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <CardGroup>
                                                    <Card>
                                                        <CardImg top width="100%" src={Guilin} />
                                                    </Card>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle>千遇千尋旅游</CardTitle>
                                                            <CardSubtitle>年輕的你，用更酷的方式去探尋</CardSubtitle>
                                                            <CardText>60,000 多个全球旅游目的地</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </CardGroup>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <ListGroup>
                                            {travelNotes.map(this.renderLatest)}
                                        </ListGroup>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        }


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
