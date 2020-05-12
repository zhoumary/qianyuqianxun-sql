import React from 'react';
import { Link } from "react-router-dom";
import './ToolBar.css';
import './custom.scss';

import Logo from './pics/logo01.gif';

class ToolBar extends React.Component {

    render() {
        return (
            <>
                <div id="toolBar">
                    <header>
                        <Link to="/Home" id="homeLink" onClick={() => window.location.refresh()}><img src={Logo} /></Link>
                        <nav>
                            <ul id="navList">
                                <li><Link to="/Home" onClick={() => window.location.refresh()}>首頁</Link></li>
                                <li><a href="#">目的地</a></li>
                                <li><a href="#">旅游攻略</a></li>
                                <li><a href="#">聯係我們</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </>
        )
    }
}

export default ToolBar;